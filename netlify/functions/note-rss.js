// Netlify Function: note RSS を取得・JSON で返却
// クライアント側からは /.netlify/functions/note-rss?user=fast_sorrel6694 で呼ぶ

exports.handler = async (event) => {
  const user = (event.queryStringParameters && event.queryStringParameters.user) || 'fast_sorrel6694';
  const rssUrl = `https://note.com/${user}/rss`;

  try {
    const res = await fetch(rssUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CO-YamadaBot/1.0)' },
    });
    if (!res.ok) {
      return { statusCode: res.status, body: JSON.stringify({ error: `note RSS fetch failed: ${res.status}` }) };
    }
    const xml = await res.text();

    // 簡易RSSパーサ (正規表現ベース。note の固定レイアウトに依存)
    const items = [];
    const itemRe = /<item>([\s\S]*?)<\/item>/g;
    let m;
    while ((m = itemRe.exec(xml)) !== null && items.length < 10) {
      const block = m[1];
      const get = (tag) => {
        const re = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`);
        const r = re.exec(block);
        if (!r) return '';
        return r[1].replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
      };
      const title = get('title');
      const link = get('link');
      const pubDate = get('pubDate');
      const desc = get('description');
      // descから先頭テキストを抽出 (タグ除去)
      const excerpt = desc.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 120);
      items.push({ title, link, pubDate, excerpt });
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=600',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ status: 'ok', count: items.length, items }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: String(e) }),
    };
  }
};
