/* Top utility bar — corporate authority signals */

function TopBar() {
  return (
    <div className="top-bar">
      <div className="badges">
        <span>認定経営革新等支援機関</span>
        <span>中小企業診断士登録</span>
        <span>REBT心理士</span>
        <span>群馬県太田市</span>
      </div>
      <div className="meta">
        <span>EN / JA</span>
        <span>yamada@os-coy.com</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <StickyHeader>
      <div className="inner">
        <a href="#top" className="brand" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src="logo.png" alt="" />
          <div className="wordmark">
            Consulting Office YAMADA
            <small>Est. — Ota, Gunma</small>
          </div>
        </a>
        <nav className="nav-links">
          <a href="#features">強み</a>
          <a href="#business-405">経営改善計画</a>
          <a href="#seminar">財務研修</a>
          <a href="#about">代表紹介</a>
          <a href="#cases">支援実績</a>
          <a href="#journal">記事</a>
          <a href="#service">サービス</a>
        </nav>
        <a href="#contact" className="header-cta">
          無料相談
          <span style={{ width: 14, height: 1, background: 'currentColor', display: 'inline-block' }}/>
        </a>
      </div>
    </StickyHeader>
  );
}

window.TopBar = TopBar;
window.Header = Header;
