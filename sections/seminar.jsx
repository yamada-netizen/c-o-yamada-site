/* SEMINAR — 財務研修 + testimonials */

function Seminar() {
  const testimonials = [
    { q: '説明が分かりやすく、質問もしやすく、４時間があっという間でした。B/S・P/L、税金など基本から丁寧に説明していただき理解が深まりました。', t: 'わかりやすい説明' },
    { q: '具体的な事例が多く、自分の事業に置き換えて考えることができました。損益分岐点売上高のイメージがつき、具体的な計画を立てられそうです。', t: '実践的な内容' },
    { q: '数字が苦手でも大事なことが分かり、やっていこうと思いました。ビジネスプラン作成への意欲が湧いてきました。', t: '行動につながる学び' },
    { q: 'アットホームで質問しやすい雰囲気が良かったです。財務を網羅的に教えていただき、自分の弱い部分が分かりました。', t: '研修の満足度' },
  ];

  return (
    <section className="section tinted" id="seminar" style={{ padding: '160px 48px' }}>
      <div style={{ maxWidth: 1640, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'end', marginBottom: 80 }}>
          <Reveal>
            <div className="section-num" style={{ marginBottom: 24 }}>
              <span className="gold-mark"></span>§ 04 — Seminar
            </div>
            <h2 className="section-title">
              誰でもわかる<br/>
              <span style={{ color: 'var(--green-800)' }}>財務研修。</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: 16, lineHeight: 2.1, color: 'var(--ink-700)', maxWidth: 540 }}>
              数字に苦手意識がある方でも、具体的な行動につながる研修。多くの方が「数字に苦手意識があっても理解できた」「具体的な行動につながった」と評価してくださいました。
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56 }}>
          {/* Left — recent sessions */}
          <Reveal kind="left">
            <div className="serif italic-en" style={{ fontSize: 18, color: 'var(--gold-600)', marginBottom: 18 }}>
              Recent Sessions
            </div>
            <div className="serif" style={{ fontSize: 24, fontWeight: 600, color: 'var(--green-900)', marginBottom: 32 }}>
              財務を経営に活かす
            </div>

            <div style={{ borderTop: '1px solid var(--rule)' }}>
              {[
                ['令和8年3月', '経営分析セミナー'],
                ['令和7年12月', '創業のための会計知識'],
              ].map(([d, t], i) => (
                <Reveal key={i} delay={i * 140}>
                  <div style={{
                    display: 'grid', gridTemplateColumns: '160px 1fr 24px',
                    padding: '24px 0', borderBottom: '1px solid var(--rule)',
                    alignItems: 'baseline',
                  }}>
                    <div className="italic-en" style={{ fontSize: 14, color: 'var(--ink-500)', letterSpacing: '.04em' }}>{d}</div>
                    <div className="serif" style={{ fontSize: 17, fontWeight: 500, color: 'var(--ink-900)' }}>「{t}」</div>
                    <div style={{ color: 'var(--gold-600)', fontSize: 16, textAlign: 'right' }}>→</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div style={{
                marginTop: 36, padding: '28px 32px',
                background: 'var(--white)', border: '1px solid var(--rule)',
              }}>
                <div className="eyebrow" style={{ color: 'var(--gold-600)', marginBottom: 12 }}>
                  対象 / Target
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-700)', lineHeight: 1.85 }}>
                  幹部社員向け · 経営者勉強会 · 商工会・金融機関での登壇
                </div>
              </div>
            </Reveal>
          </Reveal>

          {/* Right — testimonials grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--rule)', background: 'var(--paper)' }}>
            {testimonials.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="lift" style={{
                  padding: '40px 36px',
                  borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--rule)' : 'none',
                  height: '100%',
                }}>
                  <div className="serif" style={{ fontSize: 56, color: 'var(--gold-500)', lineHeight: .8, marginBottom: 4, fontWeight: 600 }}>"</div>
                  <p style={{ fontSize: 13.5, lineHeight: 2, color: 'var(--ink-700)', marginBottom: 24, fontWeight: 400 }}>
                    {c.q}
                  </p>
                  <div className="eyebrow" style={{ color: 'var(--gold-600)', fontSize: 11 }}>— {c.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Seminar = Seminar;
