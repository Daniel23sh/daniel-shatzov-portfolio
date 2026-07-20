import styles from "../PortfolioBackground.module.css";

const nodes = {
  A: [188, 48],
  B: [112, 108],
  C: [264, 108],
  D: [78, 177],
  E: [188, 177],
  F: [298, 177],
  G: [188, 246],
} as const;

const edges = [
  ["A", "B"], ["A", "C"], ["B", "D"], ["B", "E"],
  ["C", "E"], ["C", "F"], ["D", "G"], ["E", "G"], ["F", "G"],
] as const;

const shortestPathEdges = new Set(["A-B", "B-D", "D-G"]);

export function BfsNote() {
  return (
    <svg viewBox="0 0 380 320" focusable="false">
      <g className={styles.handwriting} fill="currentColor">
        <text x="80" y="29" className={styles.noteTitle}>BFS · shortest path</text>
        <line x1="58" y1="39" x2="334" y2="39" stroke="currentColor" />

        {[0, 1, 2, 3].map((layer, index) => (
          <g key={layer}>
            <text x="14" y={55 + index * 66}>Layer {layer}</text>
            <line
              x1="70"
              y1={52 + index * 66}
              x2="92"
              y2={52 + index * 66}
              stroke="currentColor"
              strokeDasharray="4 5"
            />
          </g>
        ))}

        <g transform="translate(25 10)">
          <g fill="none" stroke="currentColor" strokeWidth="1.8">
            {edges.map(([from, to]) => {
              const key = `${from}-${to}`;
              return (
                <line
                  key={key}
                  x1={nodes[from][0]}
                  y1={nodes[from][1]}
                  x2={nodes[to][0]}
                  y2={nodes[to][1]}
                  className={shortestPathEdges.has(key) ? styles.strokeAmber : undefined}
                />
              );
            })}
          </g>

          {Object.entries(nodes).map(([label, [x, y]]) => {
            const onPath = ["A", "B", "D", "G"].includes(label);
            return (
              <g key={label}>
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill="rgb(255 252 244 / 72%)"
                  stroke="currentColor"
                  className={onPath ? styles.strokeAmber : undefined}
                />
                <text x={x} y={y + 6} textAnchor="middle">{label}</text>
              </g>
            );
          })}
        </g>

        <text x="155" y="290" className={styles.smallHandwriting} style={{ fontSize: '16px' }}>level by level</text>
        <text x="25" y="320" className={styles.smallHandwriting } style={{ fontSize: '16px' }}>
          Queue by layer: [A] → [B, C] → [D, E, F] → [G]    
        </text>
      </g>
    </svg>
  );
}
