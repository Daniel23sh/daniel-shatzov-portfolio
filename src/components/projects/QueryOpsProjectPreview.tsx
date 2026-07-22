"use client";

import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  LuArrowRight,
  LuChartNoAxesColumnIncreasing,
  LuCircleCheck,
  LuClipboardCheck,
  LuDatabaseZap,
  LuLayoutDashboard,
  LuListChecks,
  LuLockKeyhole,
  LuMessageSquareText,
  LuPanelsTopLeft,
  LuShieldCheck,
  LuSlidersHorizontal,
  LuTable2,
} from "react-icons/lu";

import styles from "@/components/projects/QueryOpsProjectPreview.module.css";

type ProductViewId =
  | "overview"
  | "ask-data"
  | "saved-views"
  | "governed-activity";
type AskViewId = "results" | "sql" | "diagnostics";
type SavedViewId = "unused-licenses" | "support-tickets" | "security-events";
type DashboardFilter = "all" | "owned" | "shared";

const productViews = [
  {
    id: "overview",
    label: "Overview",
    icon: LuLayoutDashboard,
    eyebrow: "01 / GOVERNED WORKSPACE",
    title: "Data access with operational context.",
    description:
      "QueryOps AI brings scoped exploration, reusable views, and controlled actions into one role-aware workspace.",
    proofs: ["Role-aware", "Scoped access", "Synthetic demo data"],
  },
  {
    id: "ask-data",
    label: "Ask Data",
    icon: LuMessageSquareText,
    eyebrow: "02 / SAFE EXPLORATION",
    title: "From a business question to a controlled result.",
    description:
      "Approved templates and permitted questions run through validated, read-only execution under the viewer’s assigned scope.",
    proofs: ["Validated SQL", "PostgreSQL RLS", "Role-gated SQL"],
  },
  {
    id: "saved-views",
    label: "Saved Views",
    icon: LuPanelsTopLeft,
    eyebrow: "03 / REUSABLE CONTEXT",
    title: "Turn useful results into working views.",
    description:
      "Operational query results can become reusable dashboard cards and saved views without exposing unrestricted database access.",
    proofs: ["Dashboard cards", "Controlled export", "Configurable layouts"],
  },
  {
    id: "governed-activity",
    label: "Governed Activity",
    icon: LuClipboardCheck,
    eyebrow: "04 / CONTROLLED ACTIONS",
    title: "Sensitive changes stay reviewable.",
    description:
      "Requests are previewed, policy-checked, approved when required, executed server-side, and recorded in an audit trail.",
    proofs: ["Approvals", "Revalidation", "Audit trail"],
  },
] as const;

const askViews = [
  { id: "results", label: "Results" },
  { id: "sql", label: "SQL" },
  { id: "diagnostics", label: "Diagnostics" },
] as const satisfies readonly { id: AskViewId; label: string }[];

const demoRows = [
  {
    product: "Design Suite",
    vendor: "Northstar Software",
    monthlyCost: "$42 / month",
    lastUsed: "More than 90 days ago",
  },
  {
    product: "Project Board",
    vendor: "Atlas Tools",
    monthlyCost: "$18 / month",
    lastUsed: "More than 60 days ago",
  },
  {
    product: "PDF Editor",
    vendor: "Papertrail",
    monthlyCost: "$14 / month",
    lastUsed: "More than 45 days ago",
  },
] as const;

const savedViews = [
  {
    id: "unused-licenses",
    label: "Unused licenses",
    category: "Licenses",
    relationship: "owned",
  },
  {
    id: "support-tickets",
    label: "Open support tickets",
    category: "Support",
    relationship: "owned",
  },
  {
    id: "security-events",
    label: "High severity security events",
    category: "Security",
    relationship: "shared",
  },
] as const satisfies readonly {
  id: SavedViewId;
  label: string;
  category: string;
  relationship: Exclude<DashboardFilter, "all">;
}[];

const overviewCards = productViews.slice(1);

function ProductTopbar() {
  return (
    <header className={styles.productTopbar}>
      <div className={styles.productBrand}>
        <span aria-hidden="true" className={styles.productMark}>
          <LuDatabaseZap />
        </span>
        <strong>QueryOps AI</strong>
        <span className={styles.demoLabel}>Demo workspace</span>
      </div>
      <div className={styles.viewerContext} aria-label="Preview viewer context">
        <span>Analyst</span>
        <span aria-hidden="true">·</span>
        <span>Finance</span>
      </div>
    </header>
  );
}

function OverviewWorkspace({ onSelect }: { onSelect: (id: ProductViewId) => void }) {
  return (
    <div className={styles.workspaceState}>
      <WorkspaceHeading
        eyebrow="Workspace overview"
        title="Good afternoon, Daniel"
        description="Your Finance workspace is ready."
      >
        <span className={styles.scopeIndicator}>
          <LuShieldCheck aria-hidden="true" />
          Scope applied: Finance
        </span>
      </WorkspaceHeading>

      <section className={styles.signalPanel} aria-labelledby="queryops-signals-title">
        <div className={styles.sectionHeadingRow}>
          <h4 id="queryops-signals-title">Workspace signals</h4>
          <span>Governed paths</span>
        </div>
        <ul className={styles.signalList}>
          <li><LuMessageSquareText aria-hidden="true" />Explore scoped operational data</li>
          <li><LuPanelsTopLeft aria-hidden="true" />Reuse saved dashboard views</li>
          <li><LuClipboardCheck aria-hidden="true" />Track controlled actions</li>
        </ul>
      </section>

      <div className={styles.overviewCards}>
        {overviewCards.map((view) => {
          const Icon = view.icon;
          const descriptions = {
            overview: "Orient to the governed workspace",
            "ask-data": "Run a scoped, read-only question",
            "saved-views": "Return to reusable operational context",
            "governed-activity": "Review approvals and audit events",
          } as const;

          return (
            <button
              key={view.id}
              type="button"
              onClick={() => onSelect(view.id)}
              className={styles.overviewCard}
              aria-label={`Open ${view.label} preview`}
            >
              <span className={styles.overviewCardIcon}><Icon aria-hidden="true" /></span>
              <span>
                <strong>{view.label}</strong>
                <small>{descriptions[view.id]}</small>
              </span>
              <LuArrowRight aria-hidden="true" className={styles.cardArrow} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WorkspaceHeading({
  children,
  description,
  eyebrow,
  title,
}: {
  children?: React.ReactNode;
  description: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <header className={styles.workspaceHeading}>
      <div>
        <p>{eyebrow}</p>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      {children}
    </header>
  );
}

function AskDataWorkspace() {
  const [activeView, setActiveView] = useState<AskViewId>("results");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const idPrefix = useId();

  const selectAdjacentView = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    const direction =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;

    if (!direction) return;
    event.preventDefault();
    const nextIndex = (currentIndex + direction + askViews.length) % askViews.length;
    setActiveView(askViews[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={styles.workspaceState}>
      <WorkspaceHeading
        eyebrow="Command workspace"
        title="Ask Data"
        description="Governed questions over structured IT Operations data."
      >
        <span className={styles.scopeIndicator}>
          <LuLockKeyhole aria-hidden="true" />
          Read-only
        </span>
      </WorkspaceHeading>

      <section className={styles.questionComposer} aria-labelledby={`${idPrefix}-question`}>
        <div className={styles.composerTopline}>
          <span id={`${idPrefix}-question`}>Question</span>
          <span>Template · Unused licenses</span>
        </div>
        <p>Show unused paid licenses in my department.</p>
        <div className={styles.composerStatus}>
          <span><LuShieldCheck aria-hidden="true" />Scoped results</span>
          <span>Read-only query</span>
        </div>
      </section>

      <section className={styles.askOutput} aria-label="Ask Data output">
        <div className={styles.askToolbar}>
          <div role="tablist" aria-label="Ask Data result views" className={styles.askTabs}>
            {askViews.map((view, index) => {
              const isActive = activeView === view.id;
              return (
                <button
                  key={view.id}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  type="button"
                  role="tab"
                  id={`${idPrefix}-${view.id}-tab`}
                  aria-controls={`${idPrefix}-${view.id}-panel`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveView(view.id)}
                  onKeyDown={(event) => selectAdjacentView(event, index)}
                  className={styles.askTab}
                >
                  {view.label}
                </button>
              );
            })}
          </div>
          <span className={styles.syntheticCue}>Synthetic demo data</span>
        </div>
        <div
          key={activeView}
          role="tabpanel"
          id={`${idPrefix}-${activeView}-panel`}
          aria-labelledby={`${idPrefix}-${activeView}-tab`}
          className={styles.askPanel}
        >
          {activeView === "results" ? <ResultsView /> : null}
          {activeView === "sql" ? <SqlView /> : null}
          {activeView === "diagnostics" ? <DiagnosticsView /> : null}
        </div>
      </section>
    </div>
  );
}

function ResultsView() {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.resultsTable}>
        <caption className="sr-only">Synthetic demo results for unused paid licenses</caption>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Vendor</th>
            <th scope="col">Monthly cost</th>
            <th scope="col">Last used</th>
          </tr>
        </thead>
        <tbody>
          {demoRows.map((row) => (
            <tr key={row.product}>
              <td data-label="Product">{row.product}</td>
              <td data-label="Vendor">{row.vendor}</td>
              <td data-label="Monthly cost">{row.monthlyCost}</td>
              <td data-label="Last used">{row.lastUsed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SqlView() {
  return (
    <div className={styles.sqlView}>
      <div className={styles.sqlHeading}>
        <span>Query intent</span>
        <span className={styles.analystCue}>Analyst visibility</span>
      </div>
      <p>Validated read-only query scoped to the current department</p>
      <pre><code>{`SELECT product, vendor, monthly_cost, last_used
FROM scoped_license_inventory
WHERE template = 'unused_licenses'
LIMIT :row_limit;`}</code></pre>
    </div>
  );
}

function DiagnosticsView() {
  return (
    <ul className={styles.diagnosticsList} aria-label="Safe query diagnostics">
      {[
        ["RLS scope applied", "Finance scope"],
        ["Row limit enabled", "Bounded result"],
        ["Read-only execution", "Mutation blocked"],
      ].map(([label, detail]) => (
        <li key={label}>
          <LuCircleCheck aria-hidden="true" />
          <span><strong>{label}</strong><small>{detail}</small></span>
        </li>
      ))}
    </ul>
  );
}

function SavedViewsWorkspace() {
  const [selectedViewId, setSelectedViewId] = useState<SavedViewId>("unused-licenses");
  const [filter, setFilter] = useState<DashboardFilter>("all");
  const selectedView = savedViews.find((view) => view.id === selectedViewId) ?? savedViews[0];
  const visibleViews = savedViews.filter(
    (view) => filter === "all" || view.relationship === filter,
  );

  const applyFilter = (nextFilter: DashboardFilter) => {
    setFilter(nextFilter);
    const firstVisible = savedViews.find(
      (view) => nextFilter === "all" || view.relationship === nextFilter,
    );
    if (firstVisible) setSelectedViewId(firstVisible.id);
  };

  return (
    <div className={styles.workspaceState}>
      <WorkspaceHeading
        eyebrow="Saved views"
        title="My dashboards"
        description="Reusable operational context, organized by access."
      >
        <span className={styles.scopeIndicator}>
          <LuPanelsTopLeft aria-hidden="true" />
          Finance views
        </span>
      </WorkspaceHeading>

      <div className={styles.savedFilters} role="group" aria-label="Filter saved views">
        {([
          ["all", "All"],
          ["owned", "Owned by me"],
          ["shared", "Shared with me"],
        ] as const).map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => applyFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.savedWorkspace}>
        <div className={styles.savedList} aria-label="Saved dashboard views">
          {visibleViews.map((view) => (
            <button
              key={view.id}
              type="button"
              aria-pressed={selectedViewId === view.id}
              onClick={() => setSelectedViewId(view.id)}
            >
              <span className={styles.savedIcon}><LuLayoutDashboard aria-hidden="true" /></span>
              <span><strong>{view.label}</strong><small>{view.category}</small></span>
              <LuArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>

        <section className={styles.dashboardPreview} aria-live="polite">
          <header>
            <div>
              <p>{selectedView.category}</p>
              <h4>{selectedView.label}</h4>
            </div>
            <span className={styles.viewDashboardCue}>View dashboard <LuArrowRight aria-hidden="true" /></span>
          </header>
          <div className={styles.dashboardCards} aria-label="Dashboard card preview">
            <article>
              <LuTable2 aria-hidden="true" />
              <strong>Operational table</strong>
              <div className={styles.tableShape} aria-hidden="true"><i /><i /><i /></div>
            </article>
            <article>
              <LuChartNoAxesColumnIncreasing aria-hidden="true" />
              <strong>Category view</strong>
              <div className={styles.chartShape} aria-hidden="true"><i /><i /><i /><i /></div>
            </article>
            <article>
              <LuSlidersHorizontal aria-hidden="true" />
              <strong>Configurable layout</strong>
              <div className={styles.layoutShape} aria-hidden="true"><i /><i /><i /></div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

function GovernedActivityWorkspace() {
  const [completed, setCompleted] = useState(false);
  const timeline = completed
    ? [
        ["Action requested", "Request recorded"],
        ["Approval decision", "Approval decision recorded"],
        ["Action executed", "Action executed"],
        ["Audit recorded", "Audit event created"],
      ]
    : [
        ["Action requested", "Request recorded"],
        ["Approval decision", "Awaiting authorized reviewer"],
        ["Action executed", "Runs only after approval"],
        ["Audit recorded", "Created after execution"],
      ];

  return (
    <div className={styles.workspaceState}>
      <WorkspaceHeading
        eyebrow="Governed activity"
        title="Governed Activity"
        description="Approvals, execution, and audit events"
      >
        <span className={`${styles.statusBadge} ${completed ? styles.statusComplete : ""}`}>
          {completed ? "Completed" : "Pending approval"}
        </span>
      </WorkspaceHeading>

      <div className={styles.activityWorkspace}>
        <section className={styles.actionSummary} aria-labelledby="queryops-action-title">
          <div className={styles.actionTitleRow}>
            <span className={styles.actionIcon}><LuListChecks aria-hidden="true" /></span>
            <div><p>Controlled action</p><h4 id="queryops-action-title">Reclaim unused licenses</h4></div>
          </div>
          <dl>
            <div><dt>Requester</dt><dd>Demo Manager · Finance</dd></div>
            <div><dt>Scope</dt><dd>Finance</dd></div>
            <div><dt>Decision</dt><dd>Authorized approver required</dd></div>
          </dl>
          <button
            type="button"
            aria-pressed={completed}
            onClick={() => setCompleted((current) => !current)}
            className={styles.demoStateButton}
          >
            {completed ? "Return to pending demo state" : "View completed demo state"}
            <LuArrowRight aria-hidden="true" />
          </button>
          {completed ? (
            <div className={styles.completedFixture} aria-live="polite">
              <span>Prepared demo workflow data</span>
              <strong>Executed 2 records · Skipped 0</strong>
            </div>
          ) : null}
        </section>

        <section className={styles.timelinePanel} aria-labelledby="queryops-timeline-title">
          <div className={styles.sectionHeadingRow}>
            <h4 id="queryops-timeline-title">Workflow timeline</h4>
            <span>Preview only</span>
          </div>
          <ol className={styles.auditTimeline}>
            {timeline.map(([label, detail], index) => {
              const isRecorded = completed || index === 0;
              return (
                <li key={label} data-recorded={isRecorded}>
                  <span aria-hidden="true" className={styles.timelineMarker}>
                    {isRecorded ? <LuCircleCheck /> : index + 1}
                  </span>
                  <span><strong>{label}</strong><small>{detail}</small></span>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </div>
  );
}

function ProductAnnotation({ view }: { view: (typeof productViews)[number] }) {
  return (
    <aside key={view.id} className={styles.annotation} aria-labelledby={`queryops-${view.id}-annotation`}>
      <p>{view.eyebrow}</p>
      <h3 id={`queryops-${view.id}-annotation`}>{view.title}</h3>
      <span>{view.description}</span>
      <ul aria-label={`${view.label} proof points`}>
        {view.proofs.map((proof) => <li key={proof}>{proof}</li>)}
      </ul>
    </aside>
  );
}

export function QueryOpsProductPreview() {
  const [activeViewId, setActiveViewId] = useState<ProductViewId>("overview");
  const navRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const idPrefix = useId();
  const activeView = productViews.find((view) => view.id === activeViewId) ?? productViews[0];

  const selectAdjacentView = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex: number | null = null;
    if (["ArrowRight", "ArrowDown"].includes(event.key)) nextIndex = (currentIndex + 1) % productViews.length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) nextIndex = (currentIndex - 1 + productViews.length) % productViews.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = productViews.length - 1;
    if (nextIndex === null) return;

    event.preventDefault();
    setActiveViewId(productViews[nextIndex].id);
    navRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={styles.previewLayout}>
      <section className={styles.productFrame} aria-label="Interactive QueryOps AI product preview">
        <ProductTopbar />
        <div className={styles.productBody}>
          <nav className={styles.productNav} aria-label="QueryOps AI preview navigation">
            <div role="tablist" aria-orientation="vertical" className={styles.navList}>
              {productViews.map((view, index) => {
                const Icon = view.icon;
                const isActive = activeView.id === view.id;
                return (
                  <button
                    key={view.id}
                    ref={(element) => { navRefs.current[index] = element; }}
                    type="button"
                    role="tab"
                    id={`${idPrefix}-${view.id}-tab`}
                    aria-controls={`${idPrefix}-${view.id}-panel`}
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveViewId(view.id)}
                    onKeyDown={(event) => selectAdjacentView(event, index)}
                    className={styles.navButton}
                  >
                    <Icon aria-hidden="true" />
                    <span>{view.label}</span>
                  </button>
                );
              })}
            </div>
            <p className={styles.navFooter}><LuShieldCheck aria-hidden="true" />Governed demo</p>
          </nav>

          <div
            key={activeView.id}
            role="tabpanel"
            id={`${idPrefix}-${activeView.id}-panel`}
            aria-labelledby={`${idPrefix}-${activeView.id}-tab`}
            tabIndex={0}
            className={styles.workspace}
          >
            {activeView.id === "overview" ? <OverviewWorkspace onSelect={setActiveViewId} /> : null}
            {activeView.id === "ask-data" ? <AskDataWorkspace /> : null}
            {activeView.id === "saved-views" ? <SavedViewsWorkspace /> : null}
            {activeView.id === "governed-activity" ? <GovernedActivityWorkspace /> : null}
          </div>
        </div>
      </section>
      <ProductAnnotation view={activeView} />
    </div>
  );
}
