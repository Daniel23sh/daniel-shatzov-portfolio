import styles from "./PortfolioBackground.module.css";
import { RandomNotes } from "./RandomNotes";

/**
 * Decorative, non-interactive page artwork. Render it once from the root
 * layout so it stays consistent while routes change.
 */
export function PortfolioBackground() {
  return (
    <div className={styles.artwork} aria-hidden="true">
      <svg
        className={styles.gitMap}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <g className={styles.gitLines} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 0 84 H 132 C 174 84 182 128 220 128 H 334 C 390 128 390 54 446 54 H 568" />
          <path d="M 0 278 H 90 C 124 278 124 352 160 352 H 236 C 272 352 272 298 308 298" />
          <path d="M 0 668 H 118 C 154 668 154 756 198 756 H 334" />
          <path d="M 332 900 V 838 C 332 804 382 804 414 804 H 604" />
          <path d="M 836 900 V 830 C 836 786 892 786 932 786 H 1112" />
          <path d="M 1112 786 C 1156 786 1156 720 1200 720 H 1272" />
          <path d="M 1440 52 H 1348 C 1306 52 1306 104 1260 104 H 1172" />
          <path d="M 1440 332 H 1368 C 1328 332 1328 390 1286 390 H 1208" />
          <path d="M 1440 574 H 1360 C 1318 574 1318 648 1270 648 H 1180" />
        </g>
        <g className={styles.commitNodes} fill="#f4efe8" stroke="currentColor" strokeWidth="1.5">
          <circle cx="90" cy="84" r="5" /><circle cx="220" cy="128" r="5" /><circle cx="334" cy="128" r="5" />
          <circle cx="446" cy="54" r="5" /><circle cx="160" cy="352" r="5" /><circle cx="308" cy="298" r="5" />
          <circle cx="118" cy="668" r="5" /><circle cx="198" cy="756" r="5" /><circle cx="414" cy="804" r="5" />
          <circle cx="604" cy="804" r="5" /><circle cx="932" cy="786" r="5" /><circle cx="1112" cy="786" r="5" />
          <circle cx="1208" cy="720" r="5" /><circle cx="1272" cy="720" r="5" /><circle cx="1172" cy="104" r="5" />
          <circle cx="1260" cy="104" r="5" /><circle cx="1208" cy="390" r="5" /><circle cx="1286" cy="390" r="5" />
          <circle cx="1180" cy="648" r="5" /><circle cx="1270" cy="648" r="5" />
        </g>
        <circle className={styles.currentCommit} cx="1270" cy="648" r="5" />
      </svg>

      <RandomNotes />
    </div>
  );
}
