/* 405 BUSINESS — dark band w/ marquee of industries */

function Business405() {
  const industries = [
    '射出成型業','プレス加工業','切削加工業','運輸業','建設業',
    '土産物卸業','建材卸業','工業品卸売業','宝石小売業','服飾小売業',
    '書籍小売業','飲食業','理美容業','介護福祉業','サービス業',
  ];
  return (
    <section className="section dark" id="business-405" style={{ padding: '160px 0 0' }}>
      <div style={{ padding: '0 48px', maxWidth: 1640, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'end', marginBottom: 80 }}>
          <Reveal>
            <div className="section-num" style={{ marginBottom: 24 }}>
              <span className="gold-mark"></span>§ 03 — Business Improvement
            </div>
            <h2 className="section-title">
              経営改善計画策定<br/>
              <span style={{ color: 'var(--gold-500)', fontWeight: 500 }}>（405事業）</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: 16, lineHeight: 2, color: 'rgba(255,255,255,.78)', maxWidth: 540 }}>
              国が認定した専門家として、資金繰りにお困りの事業者様を支援します。借入金の返済を一時止めるか、減額するためのご支援を、金融機関様への橋渡しとともに。
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, marginBottom: 80 }}>
          <Reveal kind="left">
            <div className="serif italic-en" style={{ fontSize: 18, color: 'var(--gold-500)', marginBottom: 18 }}>
              What is 405 Business?
            </div>
            <p style={{ fontSize: 15, lineHeight: 2.1, color: 'rgba(255,255,255,.85)', marginBottom: 32 }}>
              国が認定した専門家の支援を受け、金融支援を伴う本格的な経営改善計画を策定する場合、
              <span style={{ color: 'var(--gold-500)', fontWeight: 600 }}>費用の３分の２を国が補助</span>
              する支援事業です。
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid rgba(255,255,255,.18)' }}>
              {[
                ['01', '費用の2/3を国が補助'],
                ['02', '返済額の減額交渉'],
                ['03', '金融機関への橋渡し'],
                ['04', '実行可能な計画策定'],
              ].map(([n, t], i) => (
                <Reveal key={i} delay={i * 120}>
                  <div style={{
                    padding: '22px 4px',
                    borderBottom: '1px solid rgba(255,255,255,.18)',
                    borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,.18)' : 'none',
                    paddingLeft: i % 2 === 1 ? 28 : 4,
                    display: 'flex', alignItems: 'baseline', gap: 18,
                  }}>
                    <span className="seq-num" style={{ color: 'var(--gold-500)' }}>— {n}</span>
                    <span className="serif" style={{ fontSize: 17, fontWeight: 500 }}>{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal kind="right" delay={200}>
            <div className="hover-image" style={{ position: 'relative' }}>
              <img src="meeting.png" alt="経営支援ミーティング"
                style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block', filter: 'grayscale(.2) brightness(.92)' }}/>
              <div style={{
                position: 'absolute', top: -10, right: -10,
                width: 36, height: 36, background: 'var(--gold-500)',
              }}/>
              <div style={{
                position: 'absolute', bottom: 20, left: 20,
                fontSize: 11, color: 'rgba(255,255,255,.7)', letterSpacing: '.16em',
              }}>
                CLIENT SESSION — 2026
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="eyebrow" style={{ color: 'var(--gold-100)', marginBottom: 20 }}>
            支援実績のある業種 — <span style={{ fontWeight: 600 }}>15</span>+ Industries
          </div>
        </Reveal>
      </div>

      {/* infinite marquee of industries */}
      <Marquee items={industries}/>
      <div style={{ height: 80 }}/>
    </section>
  );
}

window.Business405 = Business405;
