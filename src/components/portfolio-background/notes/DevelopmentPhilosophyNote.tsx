import styles from "../PortfolioBackground.module.css";

export function DevelopmentPhilosophyNote() {
  return (
    <svg viewBox="0 0 360 250" focusable="false">
      <g className={styles.handwriting} fill="currentColor" style={{ fontSize: '20px' }}>
        <text x="24" y="50">const ship = (idea) =&gt;</text>
        <text x="52" y="91">refine(idea)</text>
        <text x="82" y="132">.removeFriction()</text>
        <line x1="78" y1="139" x2="280" y2="139" stroke="currentColor" className={styles.strokeAmber} />
        <text x="82" y="175">.makeWorkEasier()</text>
        <line x1="78" y1="182" x2="298" y2="182" stroke="currentColor" className={styles.strokeGreen} />
        <text x="82" y="218">.ship();</text>
      </g>
    </svg>
  );
}
