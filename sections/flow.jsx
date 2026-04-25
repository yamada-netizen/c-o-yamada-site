/* FLOW — 5-step flow diagram with arrows */

function Flow() {
  const steps = [
    { n: '01', period: 'Day 1', t: '初回ヒアリング', d: '経営者・幹部の方に現状と課題認識を伺い、真のボトルネックを特定します。' },
    { n: '02', period: 'Week 1–2', t: '現状分析・課題抽出', d: '決算書・KPI等を基に経営・財務・組織を客観的に分析。課題を優先順位付きで明確化します。' },
    { n: '03', period: 'Week 2–4', t: '戦略設計・実行計画', d: 'テーマを定め、数値目標・期限・責任者を明示した実行可能な計画に落とし込みます。' },
    { n: '04', period: 'Month 2–', t: '伴走型実行支援', d: '定例ミーティングを通じて進捗管理と意思決定を支援。現場にも入り、実行を支えます。' },
    { n: '05', period: '随時', t: '成果検証・改善', d: '成果を検証し軌道修正。仕組み化・内製化まで支援し、継続的成長の体制を構築します。' },
  ];

  return (
    <section className="section tinted" id="flow" style={{ padding: '120px 48px 140px' }}>
      <div style={{ maxWidth: 1640, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 36, marginBottom: 80 }}>
          <Reveal>
            <div className="section-num">
              <span className="gold-mark"></span>§ 09 — Flow
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="section-title" style={{ fontSize: 'clamp(36px, 3.4vw, 52px)' }}>
              サービスの流れ。
            </h2>
          </Reveal>
        </div>

        {/* Flow diagram */}
        <div className="flow-diagram">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <Reveal delay={i * 80}>
                <div className="flow-card">
                  <div className="flow-step-label">
                    <span className="flow-num">STEP {s.n}</span>
                    <span className="flow-period">{s.period}</span>
                  </div>
                  <div className="flow-card-body">
                    <h3 className="flow-title">{s.t}</h3>
                    <p className="flow-desc">{s.d}</p>
                  </div>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <div className="flow-arrow" aria-hidden="true">
                  <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                    <path d="M0 7 L24 7 M18 1 L24 7 L18 13" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="square"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Flow = Flow;
