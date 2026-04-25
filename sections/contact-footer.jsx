/* CONTACT + FOOTER */

function ContactForm() {
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [topic, setTopic] = React.useState('経営伴走');
  const [message, setMessage] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `[HP問い合わせ] ${topic} - ${company || name}`;
    const body =
`お名前： ${name}
会社名： ${company}
メール： ${email}
ご相談内容： ${topic}

【ご相談内容詳細】
${message}

---
(c-o-yamada.com のお問い合わせフォームから送信)`;
    const mailto = `mailto:yamada@os-coy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    background: 'rgba(255,255,255,.06)',
    border: '1px solid rgba(255,255,255,.18)',
    color: 'var(--paper)',
    fontSize: 14,
    fontFamily: 'inherit',
    borderRadius: 0,
    outline: 'none',
    transition: 'border-color .25s',
  };
  const labelStyle = {
    display: 'block', fontSize: 11, letterSpacing: '.1em',
    color: 'var(--gold-500)', marginBottom: 8, fontWeight: 500,
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>お名前 <span style={{ color: '#f08' }}>*</span></label>
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle}/>
        </div>
        <div>
          <label style={labelStyle}>会社名</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle}/>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>メールアドレス <span style={{ color: '#f08' }}>*</span></label>
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle}/>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>ご相談内容</label>
        <select value={topic} onChange={(e) => setTopic(e.target.value)} style={inputStyle}>
          <option>経営伴走</option>
          <option>405事業(経営改善計画)</option>
          <option>財務研修</option>
          <option>その他</option>
        </select>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>ご相談内容(自由記述)</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5}
          placeholder="現状の課題や、検討中のテーマがあればご記入ください" style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}/>
      </div>

      <button type="submit" className="btn btn-gold" style={{ border: 'none', cursor: 'pointer' }}>
        メールを送信する <span className="arrow"></span>
      </button>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', marginTop: 12, lineHeight: 1.7 }}>
        ※ ご利用のメールソフトが起動し、入力内容を本文に転記したメール下書きが開きます。
        内容をご確認の上、送信してください。
      </div>
    </form>
  );
}

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
              <p style={{ fontSize: 17, lineHeight: 2.1, color: 'rgba(255,255,255,.75)', maxWidth: 480, marginBottom: 36 }}>
                経営課題は一社一社異なります。<br/>
                現状をお聞かせいただき、最適な支援の形をご提案します。
              </p>
            </Reveal>

            {/* 連絡先一覧(Email/Office) */}
            <Reveal delay={1000}>
              <div style={{ marginBottom: 24 }}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '110px 1fr',
                  padding: '20px 0',
                  borderTop: '1px solid rgba(255,255,255,.18)',
                  borderBottom: '1px solid rgba(255,255,255,.18)',
                  alignItems: 'baseline',
                }}>
                  <div className="seq-num" style={{ color: 'var(--gold-500)' }}>— Email</div>
                  <div>
                    <a href="mailto:yamada@os-coy.com" className="link-underline serif" style={{
                      fontSize: 22, fontWeight: 500, color: 'var(--paper)',
                    }}>
                      yamada@os-coy.com
                    </a>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 6 }}>
                      24時間受付・原則翌営業日までに返信
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'grid', gridTemplateColumns: '110px 1fr',
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(255,255,255,.18)',
                  alignItems: 'baseline',
                }}>
                  <div className="seq-num" style={{ color: 'var(--gold-500)' }}>— Office</div>
                  <div>
                    <div className="serif" style={{ fontSize: 18, fontWeight: 500, color: 'var(--paper)' }}>
                      コンサルティングオフィス山田
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 6 }}>
                      群馬県太田市 — オンライン対応可
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={300}>
              <div className="seq-num" style={{ color: 'var(--gold-500)', marginBottom: 22, fontSize: 12 }}>
                — Form / お問い合わせフォーム
              </div>
              <ContactForm/>
            </Reveal>
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

window.ContactForm = ContactForm;
window.Contact = Contact;
window.Footer = Footer;
