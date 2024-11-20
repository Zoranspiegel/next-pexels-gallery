import type { PictureI } from '@/models/Pictures';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Picture.module.css';

export default function Picture({ picture }: { picture: PictureI }) {
  const pictureWidth = 300;
  const pictureHeightRatio = picture.height / picture.width;
  const pictureHeight = Math.ceil(pictureWidth * pictureHeightRatio);
  const pictureFooterHeight = 40;
  const pictureHeightSpan =
    Math.ceil((pictureHeight + pictureFooterHeight) / 10) + 1;
  return (
    <div
      style={{ gridRow: `span ${pictureHeightSpan}` }}
      className={styles.picture__container}
    >
      <div
        className={styles.picture__content}
        style={{ backgroundColor: picture.avg_color }}
      >
        <Link href={picture.url} target="_blank">
          <Image
          className={styles.picture__image}
            src={picture.src.medium}
            alt={picture.alt}
            width={pictureWidth}
            height={pictureHeight}
          />
        </Link>
        <Link href={picture.photographer_url} target="_blank">
          <p className={styles.picture__photographer}>{picture.photographer}</p>
        </Link>
      </div>
    </div>
  );
}
