import styles from "../PortfolioBackground.module.css";

export function MergeSortNote() {
  return (
    <svg viewBox="0 0 300 190" focusable="false">
      <g className={styles.handwriting} fill="currentColor">
        <text x="26" y="32">mergeSort(n)</text>
        <text x="42" y="58">if |n| ≤ 1 → n</text>
        <text x="42" y="84">m = ⌊|n| / 2⌋</text>
        <text x="42" y="110">L = mergeSort(n[:m])</text>
        <text x="42" y="136">R = mergeSort(n[m:])</text>
        <text x="42" y="162">return merge(L, R)</text>
      </g>
    </svg>
  );
}
