'use client';

import { useEffect, useRef, useState } from 'react';
import Picture from './Picture';
import { PictureI } from '@/models/Pictures';
import styles from './Gallery.module.css';
import Loading from './Loading';
import fetchPictures from '@/fetch/fetchPictures';
import Error from './Error';

export default function Gallery({ search }: { search: string }) {
  const urlInitialState = search
    ? `https://api.pexels.com/v1/search?per_page=80&query=${search}`
    : 'https://api.pexels.com/v1/curated?per_page=80';
  const [results, setResults] = useState<number | null>(null);
  const [pictures, setPictures] = useState<PictureI[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState<string>(urlInitialState);
  const [nextUrl, setNextUrl] = useState<string>('');
  const observerRef = useRef<HTMLDivElement>(null);

  async function getPictures() {
    setLoading(true);
    const pictures = await fetchPictures(url);
    setLoading(false);
    if (pictures) {
      setResults(pictures.total_results);
      setPictures((prevPictures) => [...prevPictures, ...pictures.photos]);
      if (pictures.next_page) {
        setNextUrl(pictures.next_page);
      }
      setError(null);
    } else {
      setError('Unable to fetch the gallery.');
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextUrl && !loading) {
          observer.disconnect();
          setUrl(nextUrl);
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 1
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, nextUrl]);

  useEffect(() => {
    getPictures();
  }, [url]);

  return (
    <div className={styles.gallery__container}>
      {results && <h2>{`Total Results: ${results}`}</h2>}
      <div className={styles.gallery__grid}>
        {pictures.map((picture) => (
          <Picture key={Math.random().toString(36)} picture={picture} />
        ))}
        {error && (
          <>
            <Error>{error}</Error>
            <button
              onClick={() => {
                getPictures();
              }}
            >
              Try Again
            </button>
          </>
        )}
      </div>
      {!loading && <div className={styles.observer} ref={observerRef}></div>}
      {loading && <Loading />}
    </div>
  );
}
