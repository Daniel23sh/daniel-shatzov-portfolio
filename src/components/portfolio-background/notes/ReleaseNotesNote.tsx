import styles from "../PortfolioBackground.module.css";

export function ReleaseNotesNote() {
  return (
    <svg viewBox="0 0 330 290" focusable="false">
      <g className={styles.handwriting} fill="currentColor">
        <text x="35" y="46" className={styles.noteTitle}>DANIEL · RELEASE NOTES</text>
        <text x="53" y="102" className={styles.inkGreen} style={{ fontSize: '30px' }}>+</text>
        <text x="92" y="102" style={{ fontSize: '20px' }}>more curiosity</text>
        <text x="53" y="150" className={styles.inkGreen} style={{ fontSize: '30px' }}>+</text>
        <text x="92" y="150" style={{ fontSize: '20px' }}>better questions</text>
        <text x="53" y="198" className={styles.inkAmber} style={{ fontSize: '30px' }}>−</text>
        <text x="92" y="198" style={{ fontSize: '20px' }}>unnecessary complexity</text>
        <text x="51" y="246" className={styles.inkMuted} style={{ fontSize: '30px' }}>~</text>
        <text x="92" y="246" style={{ fontSize: '20px' }}>always building</text>
      </g>
    </svg>
  );
}
