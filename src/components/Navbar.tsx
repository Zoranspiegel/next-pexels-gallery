import Link from 'next/link';
import styles from './Navbar.module.css';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className={styles.navbar__container}>
      <Link href="/">
        <h1>Zoran&apos;s Next Gallery</h1>
      </Link>
      <Search />
    </nav>
  );
}
