// note RSS を取得し posts.json を生成 (GitHub Actions から呼ばれる)
import fs from 'node:fs/promises';

const NOTE_USER = process.env.NOTE_USER || 'fast_sorrel6694';
const RSS_URL = `https://note.com/${NOTE_USER}/rss`;
const OUT_PATH = 'posts.json';

const res = await fetch(RSS_URL, {
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CO-Yamada-Sync/1.0)' },
});
if (!res.ok) {
  console.error(`note RSS fetch failed: ${res.status}`);
  process.exit(1);
}
const xml = await res.text();

// 簡易RSSパーサ
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
  const excerpt = desc.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 120);
  items.push({ title, link, pubDate, excerpt });
}

const payload = {
  status: 'ok',
  user: NOTE_USER,
  fetchedAt: new Date().toISOString(),
  count: items.length,
  items,
};

await fs.writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8');
console.log(`Wrote ${OUT_PATH} with ${items.length} items.`);
