// 研究テーマ・研究室紹介の描画と、ナビゲーションの現在位置表示。
(() => {
  const content = window.LAB_CONTENT || {};

  // ---- 研究テーマのアイコン（線画。hover 時だけ CSS で動く） ----
  const GLYPH = {
    // 教育AIエージェント: 対話。返事の吹き出しの中で点が打たれている
    chat: `<svg class="glyph glyph--chat" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M22 28h46a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H44L30 76V64h-8a8 8 0 0 1-8-8V36a8 8 0 0 1 8-8z" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".55"/>
      <path class="reply" d="M54 60h44a8 8 0 0 1 8 8v18a8 8 0 0 1-8 8h-6v10L80 94H54a8 8 0 0 1-8-8V68a8 8 0 0 1 8-8z" stroke="currentColor" stroke-width="1.5"/>
      <g class="dots" fill="currentColor"><circle cx="66" cy="77" r="3"/><circle cx="76" cy="77" r="3"/><circle cx="86" cy="77" r="3"/></g>
      </svg>`,
    // 時系列グラフ: つながりが増えるネットワーク。ノードが順に脈打つ
    graph: `<svg class="glyph glyph--graph" viewBox="0 0 120 120" aria-hidden="true">
      <g stroke="currentColor" stroke-width="1.5" opacity=".55">
        <line x1="60" y1="60" x2="24" y2="30"/><line x1="60" y1="60" x2="96" y2="34"/>
        <line x1="60" y1="60" x2="30" y2="94"/><line x1="60" y1="60" x2="92" y2="90"/>
        <line x1="24" y1="30" x2="96" y2="34"/><line x1="30" y1="94" x2="92" y2="90"/>
      </g>
      <g fill="currentColor" style="transform-box:fill-box;transform-origin:center">
        <circle cx="60" cy="60" r="6"/><circle cx="24" cy="30" r="4"/><circle cx="96" cy="34" r="4"/>
        <circle cx="30" cy="94" r="4"/><circle cx="92" cy="90" r="4"/>
      </g></svg>`,
    // ゲームAI: 盤面。石がひとマス動く
    board: `<svg class="glyph glyph--board" viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.5" opacity=".55">
        <rect x="22" y="22" width="76" height="76"/>
        <line x1="47.3" y1="22" x2="47.3" y2="98"/><line x1="72.7" y1="22" x2="72.7" y2="98"/>
        <line x1="22" y1="47.3" x2="98" y2="47.3"/><line x1="22" y1="72.7" x2="98" y2="72.7"/>
      </g>
      <circle class="stone stone--a" cx="34.7" cy="34.7" r="7" fill="currentColor"/>
      <circle cx="60" cy="60" r="7" fill="currentColor"/>
      <circle class="stone stone--b" cx="85.3" cy="85.3" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
      </svg>`,
    // Skillルーティング: ひとつの入口から3つの先へ。選ばれた経路が引かれる
    route: `<svg class="glyph glyph--route" viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4">
        <path d="M28 60C52 60 52 28 86 28"/><path d="M28 60H86"/><path d="M28 60C52 60 52 92 86 92"/>
      </g>
      <path class="active" d="M28 60C52 60 52 28 86 28" fill="none" stroke="currentColor" stroke-width="2.5" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
      <circle cx="28" cy="60" r="6" fill="currentColor"/>
      <g fill="none" stroke="currentColor" stroke-width="1.5">
        <circle class="target" cx="92" cy="28" r="5"/><circle cx="92" cy="60" r="5"/><circle cx="92" cy="92" r="5"/>
      </g></svg>`,
    // ロボットの動作学習: 二関節のアーム。肘と手首が揺れる
    arm: `<svg class="glyph glyph--arm" viewBox="0 0 120 120" aria-hidden="true">
      <line x1="18" y1="100" x2="102" y2="100" stroke="currentColor" stroke-width="1.5" opacity=".55"/>
      <rect x="30" y="88" width="28" height="12" rx="2" fill="currentColor"/>
      <g class="upper">
        <line x1="44" y1="88" x2="44" y2="48" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <g class="fore">
          <line x1="44" y1="48" x2="84" y2="40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          <path d="M84 40l9-9M84 40l11 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle class="joint" cx="44" cy="48" r="5" stroke="currentColor" stroke-width="1.5"/>
        </g>
        <circle class="joint" cx="44" cy="88" r="5" stroke="currentColor" stroke-width="1.5"/>
      </g></svg>`,
    // 画像処理による模写: 元の葉の隣に、同じ形が線でなぞられていく
    trace: `<svg class="glyph glyph--trace" viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" opacity=".5">
        <path d="M20 76C20 46 42 30 64 28 64 58 48 74 20 76Z" stroke-width="1.5"/>
        <path d="M20 76L56 40" stroke-width="1"/>
      </g>
      <path class="copy" d="M56 92C56 62 78 46 100 44 100 74 84 90 56 92Z" fill="none" stroke="currentColor" stroke-width="2" pathLength="100" stroke-dasharray="100"/>
      </svg>`,
  };

  const grid = document.getElementById("research-grid");
  if (grid && content.research) {
    grid.innerHTML = content.research.map((r) => `
      <article class="theme">
        ${GLYPH[r.glyph] || GLYPH.graph}
        <div class="theme__body">
          <p class="theme__en">${r.en}</p>
          <h3>${r.title}</h3>
          <p>${r.text}</p>
        </div>
      </article>`).join("");
  }

  // ---- 研究室について ----
  const lead = document.getElementById("about-lead");
  if (lead && content.about?.lead) {
    lead.innerHTML = content.about.lead.map((t) => `<p class="about__lead">${t}</p>`).join("");
  }
  const seminar = document.getElementById("about-seminar");
  if (seminar && content.about?.seminar) {
    const sm = content.about.seminar;
    seminar.innerHTML = `
      <h3 class="seminar__title">${sm.title}<small>週1回</small></h3>
      <p class="seminar__lead">${sm.lead}</p>
      <dl class="seminar__roles">
        ${sm.roles.map((r) => `<div><dt><b>${r.en}</b>${r.who}</dt><dd>${r.what}</dd></div>`).join("")}
      </dl>`;
  }

  // ---- ナビ: スクロールで背景、現在のセクションに下線 ----
  const nav = document.getElementById("nav");
  const links = [...document.querySelectorAll(".nav ul a")];
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => a.removeAttribute("aria-current"));
      const a = links.find((l) => l.getAttribute("href") === `#${en.target.id}`);
      a?.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  sections.forEach((s) => io.observe(s));
  // ヒーローまで戻ったら下線を消す
  const hero = document.querySelector(".hero");
  if (hero) new IntersectionObserver(([en]) => {
    if (en.isIntersecting) links.forEach((a) => a.removeAttribute("aria-current"));
  }, { rootMargin: "-45% 0px -45% 0px" }).observe(hero);
})();
