/* CASES — 支援実績 (4 industries) */

function Cases() {
  const cases = [
    {
      img: 'case-kaigo.png',
      industry: '医療・介護',
      en: 'Healthcare',
      title: 'デイサービス・訪問看護事業',
      support: ['財務分析による収支構造の可視化', '人件費比率の適正化', '稼働率向上施策の立案'],
      result: ['赤字体質からの脱却', '安定した収益構造の確立'],
    },
    {
      img: 'case-seizou.png',
      industry: '製造業',
      en: 'Manufacturing',
      title: '食品製造業の利益改善',
      support: ['財務分析による利益構造の可視化', '原価計算制度の設計', '原価管理の仕組み構築', '専門家チームによる商品開発支援'],
      result: ['前年比1.5倍の利益増', '原価が見える経営体制の確立'],
    },
    {
      img: 'case-kouri.png',
      industry: '小売業',
      en: 'Retail',
      title: '店舗改善・採用強化',
      support: ['同業他社の店舗調査・ベンチマーク分析', '差別化要素の抽出', '店舗改善方針の設計', '求人内容の再設計（訴求軸の明確化）'],
      result: ['社長の理想に近い店舗設計を実現', '採用ターゲットの明確化'],
    },
    {
      img: 'case-oroshi.png',
      industry: '卸売業',
      en: 'Wholesale',
      title: '営業体制改革',
      support: ['財務分析による収益構造の把握', 'ABC分析による得意先別利益率算出', '営業会議への参加と仕組み改革', '報告型会議から改善創出型会議への転換'],
      result: ['利益重視の営業体制へ転換', '会議の質向上による営業力強化'],
    },
  ];

  return (
    <section className="section tinted" id="cases" style={{ padding: '160px 48px 140px' }}>
      <div style={{ maxWidth: 1640, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80 }}>
          <Reveal>
            <div className="section-num" style={{ marginBottom: 24 }}>
              <span className="gold-mark"></span>§ 06 — Cases
            </div>
            <h2 className="section-title">
              支援実績。
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-700)', marginTop: 18 }}>
              業種を問わず、経営課題の本質に向き合います。
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="italic-en" style={{ fontSize: 14, color: 'var(--ink-500)' }}>
              4 Industries — 4 Stories
            </div>
          </Reveal>
        </div>

        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="lift" style={{
                display: 'grid',
                gridTemplateColumns: '70px 280px 1fr 1.1fr 1fr',
                gap: 36,
                padding: '44px 0',
                borderBottom: '1px solid var(--rule)',
                alignItems: 'start',
                background: 'transparent',
              }}>
                <div>
                  <div className="serif" style={{
                    fontSize: 44, fontWeight: 500, color: 'var(--gold-600)',
                    lineHeight: 1, letterSpacing: '-0.02em',
                  }}>
                    0{i + 1}
                  </div>
                </div>

                <div className="hover-image" style={{ position: 'relative' }}>
                  <img src={c.img} alt={c.industry}
                    style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}/>
                </div>

                <div>
                  <div className="eyebrow" style={{ color: 'var(--gold-600)', marginBottom: 10 }}>
                    {c.industry} — {c.en}
                  </div>
                  <div className="serif" style={{ fontSize: 26, fontWeight: 600, color: 'var(--ink-900)', lineHeight: 1.4 }}>
                    {c.title}
                  </div>
                </div>

                <div>
                  <div className="seq-num" style={{ color: 'var(--ink-500)', marginBottom: 14, fontSize: 11 }}>
                    支援内容 / SCOPE
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {c.support.map((s, j) => (
                      <li key={j} style={{
                        fontSize: 13.5, lineHeight: 1.95, color: 'var(--ink-700)',
                        paddingLeft: 16, position: 'relative', marginBottom: 4,
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--ink-500)' }}>—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  background: 'var(--white)',
                  padding: '22px 26px',
                  borderLeft: '3px solid var(--gold-500)',
                }}>
                  <div className="seq-num" style={{ color: 'var(--gold-600)', marginBottom: 14, fontSize: 11 }}>
                    Result / 成果
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {c.result.map((r, j) => (
                      <li key={j} className="serif" style={{
                        fontSize: 15, lineHeight: 1.7, color: 'var(--ink-900)',
                        fontWeight: 600, marginBottom: 6,
                      }}>
                        → {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Cases = Cases;
