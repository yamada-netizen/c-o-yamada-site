/* SERVICE — pricing block */

function Service() {
  return (
    <section className="section" id="service" style={{ padding: '160px 48px 100px' }}>
      <div style={{ maxWidth: 1640, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <Reveal>
            <div className="section-num" style={{ marginBottom: 24 }}>
              <span className="gold-mark"></span>§ 08 — Service
            </div>
            <h2 className="section-title">
              経営伴走型<br/>
              <span style={{ color: 'var(--green-800)' }}>コンサルティング。</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="italic-en" style={{ fontSize: 14, color: 'var(--ink-500)' }}>
              Hands-on Management Consulting
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 0,
            border: '1px solid var(--rule)', background: 'var(--paper)',
          }}>
            <div style={{ padding: '56px 56px', borderRight: '1px solid var(--rule)' }}>
              <p style={{ fontSize: 16, lineHeight: 2.1, color: 'var(--ink-700)', marginBottom: 48, maxWidth: 540 }}>
                月次での定例ミーティングを通じて、経営課題の解決を伴走支援します。
                財務分析、戦略立案、組織改善まで、経営全般をカバーします。
              </p>

              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 22,
                paddingBottom: 32, borderBottom: '1px solid var(--rule)', marginBottom: 32,
              }}>
                <div className="seq-num" style={{ color: 'var(--ink-500)' }}>月額費用</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span className="counter-num">8</span>
                  <span className="serif" style={{ fontSize: 32, fontWeight: 500, color: 'var(--ink-700)' }}>万円〜</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-500)' }}>（税別）</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 32px' }}>
                {[
                  '月次定例ミーティング',
                  '財務分析・改善提案',
                  '組織行動改善支援',
                  '幹部育成支援',
                  '随時相談対応',
                ].map((f, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div style={{
                      fontSize: 14, color: 'var(--ink-900)',
                      paddingLeft: 22, position: 'relative',
                      paddingTop: 4, paddingBottom: 4,
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: 11,
                        width: 8, height: 8, background: 'var(--gold-500)',
                      }}/>
                      {f}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div style={{ padding: '56px 48px', background: 'var(--paper-2)' }}>
              <div className="seq-num" style={{ color: 'var(--gold-600)', marginBottom: 24 }}>
                Recommended For
              </div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 600, color: 'var(--green-900)', marginBottom: 28 }}>
                こんな経営者の方に。
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  '従業員数10名〜30名の企業',
                  '売上はあるのに利益が安定しない',
                  '幹部育成に課題を感じている',
                  '規模拡大に応じた組織の仕組みづくりに問題がある',
                ].map((t, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <li className="serif" style={{
                      fontSize: 15, lineHeight: 1.75, fontWeight: 500,
                      color: 'var(--ink-900)',
                      padding: '16px 0',
                      borderBottom: i < 3 ? '1px solid var(--rule)' : 'none',
                    }}>
                      <span style={{ color: 'var(--gold-600)', marginRight: 12 }}>—</span>{t}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.Service = Service;
