import styles from "../PortfolioBackground.module.css";

export function GitDeploymentNote() {
  return (
    <svg viewBox="0 0 360 280" focusable="false">
  <g
    className={styles.handwriting}
    fill="currentColor"
    style={{ fontSize: "20px" }}
  >
    <text x="24" y="42">
      git add portfolio.website
    </text>

    <text x="24" y="74">
      <tspan x="24" dy="0">
        git commit -m
      </tspan>
      <tspan x="24" dy="26">
        &quot;feat: build something useful&quot;
      </tspan>
    </text>

    <text x="30" y="136" className={styles.commentInk}>
      # accidentally made it better
    </text>

    <text x="30" y="166" className={styles.commentInk}>
      # somehow, it works
    </text>

    <text x="24" y="210">
      git push world
    </text>

    <text x="42" y="250" className={styles.inkGreen}>
      ✓ deployed
    </text>
  </g>
</svg>
  );
}
