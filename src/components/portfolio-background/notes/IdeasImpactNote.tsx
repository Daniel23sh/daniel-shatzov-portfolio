import styles from "../PortfolioBackground.module.css";

export function IdeasImpactNote() {
  return (
    <svg viewBox="0 0 300 260" focusable="false">
      <g className={styles.handwriting} fill="currentColor">
        <text x="46" y="44" className={styles.largeHandwriting}>POST /ideas</text>
        <text x="50" y="86">→ <tspan className={styles.inkAmber}>201 Created</tspan></text>
        <path d="M110 99v33m-8-9 8 9 8-9" fill="none" stroke="currentColor" />
        <text x="46" y="168">SELECT <tspan className={styles.inkGreen}>impact</tspan></text>
        <text x="46" y="198">FROM ideas</text>
        <text x="46" y="228">WHERE useful = true;</text>
      </g>
    </svg>
  );
}
