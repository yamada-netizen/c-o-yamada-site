/* CONTACT + FOOTER */

function Contact() {
  return (
    <section className="section dark" id="contact" style={{ padding: '160px 48px 120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1640, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 96, alignItems: 'start' }}>
          <div>
            <Reveal>
              <div className="section-num" style={{ marginBottom: 28 }}>
                <span className="gold-mark"></span>§ 10 — Contact
              </div>
            </Reveal>

            <KineticMixed
              tag="h2"
              parts={[
                { text: 'まずは\n' },
                { text: '無料相談', accent: true },
                { text: 'から。' },
              ]}
              style={{
                fontFamily: 'Noto Serif JP, serif',
                fontWeight: 600,
                fontSize: 'clamp(48px, 5vw, 80px)',
                lineHeight: 1.25,
                letterSpacing: '-0.01em',
                color: 'var(--paper)',
                marginBottom: 36,
              }}
            />

            <Reveal delay={800}>
              <p style={{ fontSize: 17, lineHeight: 2.1, color: 'rgba(255,255,255,.75)', maxWidth: 480, marginBottom: 56 }}>
                経営課題は一社一社異なります。<br/>
                現状をお聞かせいただき、最適な支援の形をご提案します。
              </p>
            </Reveal>

            <Reveal delay={1000}>
              <a className="btn btn-gold" href="mailto:yamada@os-coy.com">
                無料相談を申し込む <span className="arrow"></span>
              </a>
            </Reveal>
          </div>

          <div>
            {[
              {
                k: 'Email', v: 'yamada@os-coy.com', sub: '24時間受付・原則翌営業日までに返信',
                href: 'mailto:yamada@os-coy.com',
              },
              {
                k: 'Office', v: 'コンサルティングオフィス山田', sub: '群馬県太田市 — オンライン対応可',
              },
              {
                k: 'Form', v: 'お問い合わせフォーム', sub: '経営伴走 / 405事業 / 財務研修 / その他',
              },
            ].map((row, i) => (
              <Reveal key={i} delay={i * 140}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '110px 1fr 24px',
                  padding: '28px 0',
                  borderTop: i === 0 ? '1px solid rgba(255,255,255,.18)' : 'none',
                  borderBottom: '1px solid rgba(255,255,255,.18)',
                  alignItems: 'baseline',
                }}>
                  <div className="seq-num" style={{ color: 'var(--gold-500)' }}>— {row.k}</div>
                  <div>
                    {row.href ? (
                      <a href={row.href} className="link-underline serif" style={{
                        fontSize: 28, fontWeight: 500, color: 'var(--paper)', letterSpacing: '-0.01em',
                      }}>
                        {row.v}
                      </a>
                    ) : (
                      <div className="serif" style={{ fontSize: 22, fontWeight: 500, color: 'var(--paper)' }}>
                        {row.v}
                      </div>
                    )}
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 6, lineHeight: 1.7 }}>
                      {row.sub}
                    </div>
                  </div>
                  <div style={{ color: 'var(--gold-500)', fontSize: 18, textAlign: 'right' }}>→</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: 1640, margin: '0 auto' }}>
        <div className="display">CONSULTING OFFICE YAMADA</div>

        <div style={{
          marginTop: 48, paddingTop: 56,
          borderTop: '1px solid rgba(255,255,255,.18)',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 56,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <img src="logo.png" alt="" style={{ width: 40, height: 40, objectFit: 'contain', filter: 'brightness(1.1)' }}/>
              <div className="serif" style={{ fontWeight: 600, fontSize: 17, color: 'var(--paper)' }}>
                Consulting Office YAMADA
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 2, color: 'rgba(255,255,255,.6)', maxWidth: 380 }}>
              財務×心理で中小企業の意思決定を支援。
              群馬県太田市を拠点に、経営の本質に向き合う伴走型コンサルティングを提供しています。
            </p>
          </div>

          {[
            { h: 'Menu', items: [['強み', '#features'], ['経営改善計画', '#business-405'], ['財務研修', '#seminar'], ['代表紹介', '#about']] },
            { h: 'Service', items: [['サービス', '#service'], ['支援実績', '#cases'], ['流れ', '#flow'], ['お問い合わせ', '#contact']] },
            { h: 'Contact', items: [['yamada@os-coy.com', 'mailto:yamada@os-coy.com'], ['群馬県太田市', null], ['オンライン対応可', null]] },
          ].map((col, ci) => (
            <div key={ci}>
              <div className="seq-num" style={{ color: 'var(--gold-500)', marginBottom: 22, fontSize: 11 }}>
                — {col.h}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.items.map(([t, h], i) => (
                  <li key={i} style={{ fontSize: 13, lineHeight: 2.4, color: 'rgba(255,255,255,.78)' }}>
                    {h ? (
                      <a href={h} className="link-underline" style={{ color: 'inherit' }}>{t}</a>
                    ) : t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 80, paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,.18)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 11, color: 'rgba(255,255,255,.45)', letterSpacing: '.06em',
        }}>
          <span>© 2026 Consulting Office YAMADA. All rights reserved.</span>
          <span>認定経営革新等支援機関 · 中小企業診断士 · REBT心理士</span>
        </div>
      </div>
    </footer>
  );
}

window.Contact = Contact;
window.Footer = Footer;
