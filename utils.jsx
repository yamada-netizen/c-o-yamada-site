/* Shared utilities — reveal observer, kinetic title, counter, marquee */

/* Hook: observe element entering view; toggle .in-view */
function useReveal(opts) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fallback: if IntersectionObserver doesn't fire (iframe edge cases), make visible after delay
    const fallback = setTimeout(() => {
      if (!el.classList.contains('in-view')) el.classList.add('in-view');
    }, 100);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('in-view');
          if (opts && opts.once !== false) obs.unobserve(el);
        } else if (opts && opts.repeat) {
          el.classList.remove('in-view');
        }
      });
    }, { threshold: opts && opts.threshold || 0.18, rootMargin: opts && opts.rootMargin || '0px 0px -10% 0px' });
    obs.observe(el);
    return () => { clearTimeout(fallback); obs.disconnect(); };
  }, []);
  return ref;
}

/* Kinetic title — animates each character */
function KineticTitle({ children, tag = 'h1', className = '', style }) {
  const ref = useReveal();
  const Tag = tag;
  const text = children;
  // Split preserving spaces and HTML span markers like {{accent}}...{{/accent}}
  const parts = [];
  let i = 0; let charIdx = 0;
  const accentRanges = [];
  const raw = String(text);
  // Simplified: treat text as plain string; accent via prop wrap via children array support
  for (let k = 0; k < raw.length; k++) {
    const c = raw[k];
    if (c === ' ' || c === '\u3000') {
      parts.push(<span key={k} className="sp" />);
    } else if (c === '\n') {
      parts.push(<br key={k} />);
    } else {
      parts.push(<span key={k} className="ch" style={{ '--i': charIdx }}>{c}</span>);
      charIdx++;
    }
  }
  return (
    <Tag ref={ref} className={`title-kinetic ${className}`} style={style}>
      {parts}
    </Tag>
  );
}

/* Mixed kinetic title — accepts array of {text, accent?} */
function KineticMixed({ parts, tag = 'h1', className = '', style }) {
  const ref = useReveal();
  const Tag = tag;
  let i = 0;
  return (
    <Tag ref={ref} className={`title-kinetic ${className}`} style={style}>
      {parts.map((p, pi) => {
        const seg = [];
        const text = String(p.text);
        for (let k = 0; k < text.length; k++) {
          const c = text[k];
          if (c === ' ' || c === '\u3000') {
            seg.push(<span key={`${pi}-${k}`} className="sp" />);
          } else if (c === '\n') {
            seg.push(<br key={`${pi}-${k}`} />);
          } else {
            seg.push(
              <span
                key={`${pi}-${k}`}
                className="ch"
                style={{ '--i': i++, color: p.accent ? 'var(--gold-500)' : undefined }}
              >{c}</span>
            );
          }
        }
        return <React.Fragment key={pi}>{seg}</React.Fragment>;
      })}
    </Tag>
  );
}

/* Animated number counter */
function Counter({ to, suffix = '', prefix = '', duration = 1800, decimals = 0, className = 'counter-num', style }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
            else setVal(to);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  const formatted = val.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

/* Reveal wrapper */
function Reveal({ children, kind = 'up', delay = 0, className = '', style, as = 'div' }) {
  const ref = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} data-reveal={kind === 'up' ? 'true' : kind} className={className} style={{ ...style, '--delay': delay + 'ms' }}>
      {children}
    </Tag>
  );
}

/* Marquee */
function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span key={i} className="marquee-item">{it}</span>
        ))}
      </div>
    </div>
  );
}

/* Scroll progress bar */
function ScrollProgress() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (ref.current) ref.current.style.width = p + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} className="scroll-progress"/>;
}

/* Sticky header that adds .scrolled */
function StickyHeader({ children }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      if (window.scrollY > 80) el.classList.add('scrolled');
      else el.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header ref={ref} className="site-header">{children}</header>;
}

window.useReveal = useReveal;
window.KineticTitle = KineticTitle;
window.KineticMixed = KineticMixed;
window.Counter = Counter;
window.Reveal = Reveal;
window.Marquee = Marquee;
window.ScrollProgress = ScrollProgress;
window.StickyHeader = StickyHeader;
