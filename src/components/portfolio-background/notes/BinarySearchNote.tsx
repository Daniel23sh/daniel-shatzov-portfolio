import styles from "../PortfolioBackground.module.css";

const values = [3, 8, 14, 21, 26, 37, 49];

function ArrayRow({
  comparedIndex,
  found = false,
  rejected,
  y,
}: {
  comparedIndex: number;
  found?: boolean;
  rejected: readonly number[];
  y: number;
}) {
  return (
    <g fill="currentColor" stroke="currentColor">
      {values.map((value, index) => {
        const x = 81 + index * 40;
        const cellClass = found && index === comparedIndex
          ? styles.inkGreen
          : index === comparedIndex
            ? styles.inkAmber
            : rejected.includes(index)
              ? styles.inkRejected
              : undefined;

        return (
          <g key={`${y}-${value}`} className={cellClass}>
            <text x={x + 14} y={y - 9} textAnchor="middle">
              {index}
            </text>
            <rect x={x} y={y} width="38" height="31" fill="none" />
            <text x={x + 19} y={y + 22} textAnchor="middle">
              {value}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export function BinarySearchNote() {
  return (
    <svg viewBox="0 0 420 320" focusable="false">
      <g className={styles.handwriting} fill="currentColor">
        <text x="46" y="30" className={styles.noteTitle}>
          Binary Search · target = 26
        </text>
        <line x1="42" y1="39" x2="378" y2="39" stroke="currentColor" />

        <text x="24" y="72">Step 1</text>
        <ArrayRow comparedIndex={3} rejected={[]} y={76} />
        <text x="124" y="128">mid = 3 → 21 &lt; 26 → right</text>

        <text x="24" y="168">Step 2</text>
        <ArrayRow comparedIndex={5} rejected={[0, 1, 2, 3]} y={172} />
        <text x="124" y="224">mid = 5 → 37 &gt; 26 → left</text>

        <text x="24" y="264">Step 3</text>
        <ArrayRow comparedIndex={4} found rejected={[0, 1, 2, 3, 5, 6]} y={268} />
        <text x="124" y="316">
          mid = 4 → 26 = 26 → found
          <tspan className={styles.inkGreen}> ✓</tspan>
        </text>
      </g>
    </svg>
  );
}
