/* HERO — full-bleed, kinetic typography, large portrait, scroll hint */

function Hero() {
  return (
    <section id="top" style={{
      position: 'relative',
      padding: '64px 48px 120px',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Section meta — top corner */}
      <div style={{
        position: 'absolute', top: 40, left: 48, right: 48,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 11, letterSpacing: '.16em', color: 'var(--ink-500)',
      }}>
        <Reveal kind="up" delay={0}>
          <span className="italic-en">§ 2026 — Annual Report</span>
        </Reveal>
        <Reveal kind="up" delay={120}>
          <span style={{ display: 'flex', gap: 22 }}>
            <span>FINANCIAL</span>
            <span style={{ color: 'var(--gold-500)' }}>×</span>
            <span>PSYCHOLOGICAL</span>
          </span>
        </Reveal>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 80,
        alignItems: 'end',
        maxWidth: 1640,
        margin: '0 auto',
        width: '100%',
        paddingTop: 48,
      }}>
        {/* Left — title block */}
        <div>
          <Reveal kind="up" delay={100}>
            <div className="eyebrow" style={{ marginBottom: 36 }}>
              <span className="gold-mark"></span>
              Management Consulting · Ota, Gunma
            </div>
          </Reveal>

          <KineticMixed
            tag="h1"
            parts={[
              { text: '財務' },
              { text: '×', accent: true },
              { text: '心理で\n中小企業の\n意思決定を' },
              { text: '支援する', accent: true },
              { text: '。' },
            ]}
            style={{
              fontFamily: 'Noto Serif JP, serif',
              fontWeight: 600,
              fontSize: 'clamp(56px, 7vw, 110px)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: 'var(--ink-900)',
              marginBottom: 48,
            }}
          />

          <Reveal kind="up" delay={1200}>
            <p style={{
              fontSize: 18,
              lineHeight: 2.1,
              color: 'var(--ink-700)',
              maxWidth: 560,
              marginBottom: 56,
            }}>
              数字の分析だけでは、経営は変わりません。<br/>
              人と組織が自ら動き出し、成果につながる。<br/>
              それが、当社の伴走型コンサルティングです。
            </p>
          </Reveal>

          <Reveal kind="up" delay={1400}>
            <div style={{ display: 'flex', gap: 14, marginBottom: 80 }}>
              <a className="btn btn-dark" href="#contact">
                無料相談を申し込む <span className="arrow"></span>
              </a>
              <a className="btn btn-ghost" href="#service">
                サービス詳細を見る
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — large portrait */}
        <Reveal kind="right" delay={400}>
          <div style={{ position: 'relative' }}>
            <div className="hover-image" style={{
              background: 'var(--paper-2)', padding: 18,
            }}>
              <img src="profile.jpg" alt="山田裕一"
                style={{ width: '100%', height: 580, objectFit: 'cover', objectPosition: 'center 22%', display: 'block' }}/>
              <div style={{
                position: 'absolute', top: -14, right: -14,
                width: 48, height: 48, background: 'var(--gold-500)',
                pointerEvents: 'none',
              }}/>
            </div>

            <div style={{
              position: 'absolute', bottom: -32, left: -36,
              background: 'var(--green-900)', color: 'var(--paper)',
              padding: '26px 30px', maxWidth: 320,
            }}>
              <div className="eyebrow" style={{ color: 'var(--gold-100)', marginBottom: 10 }}>
                Representative
              </div>
              <div className="serif" style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.3 }}>
                山田 裕一
              </div>
              <div className="italic-en" style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', marginTop: 2 }}>
                Yuichi Yamada
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,.2)', margin: '14px 0' }}/>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.7)', letterSpacing: '.06em', lineHeight: 1.7 }}>
                中小企業診断士 / REBT心理士
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroll hint */}
      <div className="scroll-hint">Scroll</div>
    </section>
  );
}

/* === STATS BAND — counters band right after hero === */

function StatsBand() {
  const stats = [
    { num: 15, suffix: '+', label: '支援実績業種', sub: 'Industries Served' },
    { num: 100, suffix: '%', label: '伴走型支援', sub: 'Hands-on Approach' },
    { num: 8, suffix: '万円〜', label: '月額費用（税別）', sub: 'Monthly Plan' },
    { num: 405, suffix: '', label: '事業認定支援機関', sub: 'Certified by METI' },
  ];
  return (
    <section className="section dark" style={{ padding: '90px 48px' }}>
      <div style={{ maxWidth: 1640, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,.18)' }}>
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div style={{
                padding: '40px 32px 36px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,.18)' : 'none',
                borderBottom: '1px solid rgba(255,255,255,.18)',
                height: '100%',
              }}>
                <div className="seq-num" style={{ color: 'var(--gold-500)', marginBottom: 28 }}>
                  — 0{i + 1}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 24 }}>
                  <span className="counter-num">{s.num.toLocaleString()}</span>
                  <span className="serif" style={{ fontSize: 22, color: 'var(--gold-500)', fontWeight: 500 }}>
                    {s.suffix}
                  </span>
                </div>
                <div className="serif" style={{ fontSize: 16, color: 'var(--paper)', fontWeight: 500, marginBottom: 4 }}>
                  {s.label}
                </div>
                <div className="italic-en" style={{ fontSize: 12, color: 'rgba(255,255,255,.5)' }}>
                  {s.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.StatsBand = StatsBand;
