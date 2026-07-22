import styles from "@/components/layout/Footer.module.css";
import { siteConfig } from "@/content/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          {siteConfig.name}
          <span aria-hidden="true"> · </span>
          {siteConfig.role}
        </p>
        <p className={styles.care}>Built somewhere between “what if?” and “that works.”</p>
        <p className={styles.year}>© {currentYear}</p>
      </div>
    </footer>
  );
}
