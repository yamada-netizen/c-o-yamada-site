/* JOURNAL — note の最新記事3件を Netlify Function 経由で取得 */

function Journal() {
  const [posts, setPosts] = React.useState(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    fetch('/.netlify/functions/note-rss?user=fast_sorrel6694')
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          setPosts(data.items.slice(0, 3));
        } else {
          setError(true);
        }
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
      });
    return () => { cancelled = true; };
  }, []);

  function formatDate(s) {
    if (!s) return '';
    try {
      const d = new Date(s);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}.${m}.${day}`;
    } catch (e) { return s; }
  }

  function pickCategory(title) {
    if (/財務|キャッシュ|決算|資金|投資/i.test(title)) return 'Finance';
    if (/心理|認知|REBT|モチベ/i.test(title)) return 'Psychology';
    if (/承継|戦略|ビジョン|経営|事業計画/i.test(title)) return 'Strategy';
    return 'Note';
  }

  return (
    <section className="section" id="journal" style={{ padding: '120px 48px 140px' }}>
      <div style={{ maxWidth: 1640, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 64, gap: 40, flexWrap: 'wrap',
        }}>
          <div>
            <Reveal>
              <div className="section-num" style={{ marginBottom: 24 }}>
                <span className="gold-mark"></span>§ 07 — Journal
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="section-title" style={{ fontSize: 'clamp(36px, 3.4vw, 52px)' }}>
                考えていること。
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 15, lineHeight: 1.95, color: 'var(--ink-700)', maxWidth: 520, marginTop: 18 }}>
                経営の現場で得た気づきや、財務・心理の観点から
                書いた記事を不定期で公開しています。
              </p>
            </Reveal>
          </div>
          <Reveal delay={280}>
            <a href="https://note.com/fast_sorrel6694" target="_blank" rel="noopener" className="link-underline" style={{
              fontSize: 13, letterSpacing: '.1em', color: 'var(--ink-900)',
              textDecoration: 'none', fontWeight: 500,
            }}>
              VIEW ALL POSTS &nbsp;→
            </a>
          </Reveal>
        </div>

        {posts === null && !error && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--ink-500)', fontSize: 14 }}>
            記事を読み込み中…
          </div>
        )}

        {error && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--ink-500)', fontSize: 14 }}>
            記事の取得に失敗しました。<a href="https://note.com/fast_sorrel6694" target="_blank" rel="noopener" style={{ color: 'var(--ink-900)' }}>noteで直接ご覧ください</a>。
          </div>
        )}

        {posts && posts.length > 0 && (
          <div className="journal-grid">
            {posts.map((p, i) => {
              const cat = pickCategory(p.title);
              return (
                <Reveal key={i} delay={i * 100}>
                  <a href={p.link} target="_blank" rel="noopener" className="journal-card">
                    <div className="journal-thumb" aria-hidden="true">
                      <span className="journal-thumb-cat">{cat}</span>
                    </div>
                    <div className="journal-body">
                      <div className="journal-meta">
                        <span className="italic-en">{formatDate(p.pubDate)}</span>
                      </div>
                      <h3 className="journal-title">{p.title}</h3>
                      <p className="journal-excerpt">{p.excerpt}</p>
                      <div className="journal-readmore">
                        <span>続きを読む</span>
                        <span className="journal-arrow">→</span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

window.Journal = Journal;
