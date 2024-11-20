import styles from './Error.module.css';

export default function Error({ children }: { children: React.ReactNode }) {
  return <h3 className={styles.error__text}>{children}</h3>;
}
