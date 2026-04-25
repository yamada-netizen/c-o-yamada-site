/* ABOUT — 代表 山田裕一 */

function About() {
  return (
    <section className="section" id="about" style={{ padding: '160px 48px 140px' }}>
      <div style={{ maxWidth: 1640, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80 }}>
          <Reveal>
            <div className="section-num" style={{ marginBottom: 24 }}>
              <span className="gold-mark"></span>§ 05 — About
            </div>
            <h2 className="section-title">代表紹介。</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="italic-en" style={{ fontSize: 14, color: 'var(--ink-500)' }}>
              Yuichi Yamada — Representative
            </div>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <Reveal kind="left">
            <div className="hover-image" style={{ position: 'relative', background: 'var(--paper-2)', padding: 18 }}>
              <img src="profile.jpg" alt="山田裕一"
                style={{ width: '100%', height: 540, objectFit: 'cover', objectPosition: 'center 22%', display: 'block' }}/>
              <div style={{
                position: 'absolute', top: -10, right: -10,
                width: 36, height: 36, background: 'var(--gold-500)',
              }}/>
            </div>

            <div style={{ marginTop: 36, paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
              <div className="eyebrow" style={{ color: 'var(--gold-600)', marginBottom: 10 }}>Representative</div>
              <div className="serif" style={{ fontSize: 32, fontWeight: 600, color: 'var(--ink-900)' }}>
                山田 裕一
              </div>
              <div className="italic-en" style={{ fontSize: 16, color: 'var(--ink-500)', marginTop: 4 }}>
                Yuichi Yamada
              </div>

              <div style={{ marginTop: 24 }}>
                {[
                  ['CERT — 01', '中小企業診断士'],
                  ['CERT — 02', 'REBT心理士'],
                ].map(([k, v], i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '110px 1fr',
                    padding: '14px 0', borderBottom: '1px solid var(--rule)',
                    alignItems: 'baseline',
                  }}>
                    <div className="seq-num" style={{ color: 'var(--ink-500)', fontSize: 11 }}>{k}</div>
                    <div className="serif" style={{ fontSize: 16, fontWeight: 500 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal kind="right" delay={200}>
            <h3 className="serif" style={{
              fontSize: 'clamp(32px, 3vw, 44px)',
              lineHeight: 1.55, fontWeight: 600,
              color: 'var(--ink-900)', letterSpacing: '-0.01em',
              marginBottom: 48,
            }}>
              「正しいことを伝える」より<br/>
              <span style={{ color: 'var(--green-800)' }}>「納得」</span>を重視する
            </h3>

            <div style={{ borderTop: '1px solid var(--rule)' }}>
              {[
                {
                  k: '01 — Origin',
                  p: '会計事務所勤務時代に中小企業診断士の資格を取得。多くの企業の決算書を見る中で、数字だけでは経営は変わらないことに気づきました。',
                },
                {
                  k: '02 — Pivot',
                  p: '独立後は、財務分析に加えてREBT心理士の資格も取得。経営者の意思決定を支援するだけでなく、組織全体の行動変容まで伴走するスタイルを確立しました。',
                },
                {
                  k: '03 — Today',
                  p: '「絵に描いた餅」で終わらない、実行可能な計画づくりと、成果が出るまでの伴走支援。それが当社のコンサルティングです。',
                },
              ].map((b, i) => (
                <Reveal key={i} delay={i * 140}>
                  <div style={{
                    display: 'grid', gridTemplateColumns: '160px 1fr', gap: 36,
                    padding: '32px 0', borderBottom: '1px solid var(--rule)',
                    alignItems: 'baseline',
                  }}>
                    <div className="seq-num" style={{ color: 'var(--gold-600)' }}>{b.k}</div>
                    <p style={{ fontSize: 16, lineHeight: 2.1, color: 'var(--ink-700)' }}>{b.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div style={{
                marginTop: 48, padding: '48px 56px',
                background: 'var(--green-900)', color: 'var(--paper)',
                position: 'relative',
              }}>
                <div className="serif" style={{
                  position: 'absolute', top: 14, left: 28,
                  fontSize: 92, color: 'var(--gold-500)', lineHeight: .9, fontWeight: 600,
                }}>"</div>
                <p className="serif" style={{
                  fontSize: 20, lineHeight: 2, fontWeight: 400, paddingLeft: 56,
                }}>
                  「正しいことを伝える」のは簡単です。しかし、それだけでは人も組織も動きません。相手の立場に立ち、納得感を生み出し、行動につなげる。それこそが、真のコンサルティングだと考えています。
                </p>
                <div className="italic-en" style={{
                  marginTop: 24, paddingLeft: 56,
                  fontSize: 13, letterSpacing: '.16em', color: 'var(--gold-500)',
                }}>
                  — Yuichi Yamada, Representative
                </div>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

window.About = About;
