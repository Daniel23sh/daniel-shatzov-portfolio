import styles from "../PortfolioBackground.module.css";

const columns = ["x", "0", "1", "2", "3", "4", "5", "6"];
const dpValues = ["dp[x]", "0", "1", "2", "1", "1", "2", "2"];

export function CoinChangeNote() {
  return (
    <svg viewBox="0 0 430 410" focusable="false">
      <g className={styles.handwriting} fill="currentColor">
        <text x="30" y="31" className={styles.noteTitle}>COIN CHANGE · amount = 6</text>
        <text x="30" y="63" style={{ fontSize: '18px' }}>coins = [1, 3, 4]</text>

        <text x="30" y="94">
          <tspan className={styles.inkAmber}>GREEDY</tspan>
          <tspan style={{ fontSize: '18px' }}> · largest first</tspan>
        </text>
        <text x="95" y="129" className={styles.largeHandwriting}>6 → 2 → 1 → 0</text>
        <text x="128" y="151" className={styles.inkAmber}>−4&nbsp;&nbsp;&nbsp; −1&nbsp;&nbsp;&nbsp; −1</text>
        <rect x="84" y="163" width="270" height="36" fill="none" stroke="currentColor" className={styles.strokeAmber} />
        <text x="105" y="187" className={styles.inkAmber}>4 + 1 + 1 = 3 coins ✕</text>

        <line x1="28" y1="220" x2="402" y2="220" stroke="currentColor" />
        <text x="30" y="251" className={styles.noteTitle}>DYNAMIC PROGRAMMING</text>
        <text x="54" y="280" style={{ fontSize: '18px' }}>dp[x] = 1 + min(dp[x − coin])</text>

        <g fill="none" stroke="currentColor">
          <rect x="31" y="296" width="368" height="60" />
          <line x1="31" y1="326" x2="399" y2="326" />
          {Array.from({ length: 7 }, (_, index) => (
            <line key={index} x1={77 + index * 46} y1="296" x2={77 + index * 46} y2="356" />
          ))}
          <rect x="353" y="326" width="46" height="30" className={styles.strokeGreen} />
        </g>
        {columns.map((value, index) => (
          <text key={`column-${value}`} x={54 + index * 46} y="317" textAnchor="middle">{value}</text>
        ))}
        {dpValues.map((value, index) => (
          <text
            key={`value-${value}-${index}`}
            x={54 + index * 46}
            y="347"
            textAnchor="middle"
            className={index === 7 ? styles.inkGreen : undefined}
          >
            {value}
          </text>
        ))}

        <rect x="100" y="367" width="240" height="29" fill="none" stroke="currentColor" className={styles.strokeGreen} />
        <text x="128" y="388" className={styles.inkGreen}>3 + 3 = 2 coins ✓</text>
      </g>
    </svg>
  );
}
