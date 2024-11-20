import Link from 'next/link';
import styles from './Navbar.module.css';
import Search from './Search';
import Image from 'next/image';
import capitalZ from '/public/art-noveau-z-letter-a11ee4.webp';
import capitalG from '/public/art-noveau-g-letter-912813.webp';

export default function Navbar() {
  return (
    <nav className={styles.navbar__container}>
      <Link href="/">
        <div className={styles['navbar__logo-container']}>
          <div className={styles['navbar__logo-word']}>
            <div className={styles['navbar__capital']}>
              <Image
                src={capitalZ}
                width={50}
                height={50}
                alt="capital letter Z"
              />
            </div>
            <h1 className={styles['navbar__title']}>oran&apos;s</h1>
          </div>
          <div className={styles['navbar__logo-word']}>
            <div className={styles['navbar__capital']}>
              <Image
                src={capitalG}
                width={50}
                height={50}
                alt="capital letter G"
              />
            </div>
            <h1 className={styles['navbar__title']}>allery</h1>
          </div>
        </div>
      </Link>
      <Search />
    </nav>
  );
}
