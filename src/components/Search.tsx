'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Search.module.css';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch('');
  }

  return (
    <form className={styles.search__form} onSubmit={handleSubmit}>
      <input
        className={styles.search__input}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search..."
      />
    </form>
  );
}
