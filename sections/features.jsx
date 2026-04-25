/* FEATURES — 当社の強み (4 features w/ scroll-reveal) */

function Features() {
  const items = [
    { n: '01', t: '財務分析力', en: 'Financial Analysis', d: '決算書を読み解き、利益構造を可視化。数字に基づいた経営判断を支援します。' },
    { n: '02', t: '心理的支援', en: 'Psychological Support', d: 'REBT心理士の資格を活かし、経営者の意思決定と組織の行動変容を支援します。' },
    { n: '03', t: '伴走型支援', en: 'Hands-on Partnership', d: '計画を作って終わりではなく、実行段階まで伴走。成果が出るまで一緒に走ります。' },
    { n: '04', t: '成果重視', en: 'Outcome-Driven', d: '「正しいこと」より「動くこと」を重視。絵に描いた餅で終わらせません。' },
  ];

  return (
    <section className="section" id="features" style={{ padding: '160px 48px 140px' }}>
      <div style={{ maxWidth: 1640, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, alignItems: 'end', marginBottom: 96 }}>
          <Reveal>
            <div className="section-num" style={{ marginBottom: 24 }}>
              <span className="gold-mark"></span>§ 02 — Features
            </div>
            <h2 className="section-title">
              当社の<br/>
              <span style={{ color: 'var(--green-800)' }}>強み。</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="serif" style={{ fontSize: 22, lineHeight: 1.85, color: 'var(--ink-700)', fontWeight: 500, paddingBottom: 12 }}>
              財務と心理、両面からのアプローチで<br/>
              経営課題の<span style={{ color: 'var(--gold-600)' }}>本質</span>に向き合います。
            </p>
          </Reveal>
        </div>

        <hr className="hairline"/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {items.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="lift" style={{
                padding: '48px 32px 44px',
                borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
                borderBottom: '1px solid var(--rule)',
                height: '100%',
                cursor: 'default',
              }}>
                <div className="seq-num" style={{ marginBottom: 32, fontSize: 13 }}>— {s.n}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 22 }}>
                  <div className="serif" style={{ fontSize: 24, fontWeight: 600, color: 'var(--ink-900)', lineHeight: 1.3 }}>
                    {s.t}
                  </div>
                </div>
                <div className="italic-en" style={{ fontSize: 14, color: 'var(--gold-600)', marginBottom: 22 }}>
                  {s.en}
                </div>
                <div style={{ fontSize: 13.5, lineHeight: 1.95, color: 'var(--ink-700)' }}>
                  {s.d}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Features = Features;
