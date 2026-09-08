// ヒーロー背景: 森のように揺れる緑の光点が、近いものどうし線でつながる。
// マウス（タッチ）にゆるく引き寄せられ、離れると元の位置に戻る。
// 依存なし・Canvas 2D。prefers-reduced-motion では静止画を1枚だけ描く。
(() => {
  const canvas = document.getElementById("field");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const LINK = 120;          // 線を引く最大距離 (px)
  const REACH = 220;         // マウスの影響範囲 (px)
  const INTRO = 1800;        // 収束アニメーションの長さ (ms)
  const LEAF = [31, 122, 77];
  const GLOW = [110, 231, 168];

  let w = 0, h = 0, pts = [], t0 = 0, raf = 0, visible = true;
  const mouse = { x: -1e4, y: -1e4 };

  const rand = (a, b) => a + Math.random() * (b - a);
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function seed() {
    const n = Math.round(160 * Math.min(1.5, Math.max(0.5, (w * h) / (1440 * 900))));
    pts = [];
    for (let i = 0; i < n; i++) {
      // 下側（樹冠）ほど密になるように分布させる
      const y = h * (1 - Math.pow(Math.random(), 1.7));
      const x = Math.random() * w;
      pts.push({
        hx: x, hy: y,                              // ホーム位置
        x, y,
        sx: w / 2 + rand(-60, 60), sy: h * 0.55 + rand(-60, 60), // 収束開始位置
        ph: Math.random() * Math.PI * 2,           // 揺れの位相
        amp: rand(4, 14), spd: rand(0.4, 0.9),
        r: rand(1.2, 2.8),
      });
    }
    t0 = performance.now();
  }

  function step(now) {
    const k = Math.min(1, (now - t0) / INTRO);
    const e = easeOut(k);
    const t = now / 1000;
    for (const p of pts) {
      // 揺れ + マウスへの引き寄せ
      const wx = p.hx + Math.sin(t * p.spd + p.ph) * p.amp;
      const wy = p.hy + Math.cos(t * p.spd * 0.8 + p.ph) * p.amp * 0.6;
      let tx = wx, ty = wy;
      const dx = mouse.x - wx, dy = mouse.y - wy;
      const d = Math.hypot(dx, dy);
      if (d < REACH) {
        const f = (1 - d / REACH) * 0.35;
        tx += dx * f; ty += dy * f;
      }
      // 収束アニメーション中は開始位置から補間
      tx = p.sx + (tx - p.sx) * e;
      ty = p.sy + (ty - p.sy) * e;
      p.x += (tx - p.x) * 0.08;
      p.y += (ty - p.y) * 0.08;
      p.near = d < REACH ? 1 - d / REACH : 0;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    // 線
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        if (Math.abs(dx) > LINK || Math.abs(dy) > LINK) continue;
        const d = Math.hypot(dx, dy);
        if (d > LINK) continue;
        const near = Math.max(a.near, b.near);
        const alpha = (1 - d / LINK) * (0.22 + near * 0.5);
        ctx.strokeStyle = rgba(near > 0.05 ? GLOW : LEAF, alpha);
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
    // 点（外側にやわらかい光、内側に芯）
    for (const p of pts) {
      const r = p.r * (1 + p.near * 0.8);
      ctx.fillStyle = rgba(GLOW, 0.18 + p.near * 0.4);
      ctx.beginPath(); ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = rgba(LEAF, 0.85);
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
    }
  }

  function loop(now) {
    step(now); draw();
    raf = visible ? requestAnimationFrame(loop) : 0;
  }

  function start() {
    if (reduce) {
      // 静止画: 収束済みの状態を1枚だけ
      for (const p of pts) { p.x = p.hx; p.y = p.hy; p.near = 0; }
      draw();
      return;
    }
    if (!raf) raf = requestAnimationFrame(loop);
  }

  // 入力
  const hero = canvas.parentElement;
  hero.addEventListener("pointermove", (ev) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = ev.clientX - r.left; mouse.y = ev.clientY - r.top;
  });
  hero.addEventListener("pointerleave", () => { mouse.x = -1e4; mouse.y = -1e4; });

  // 画面外・非表示タブでは止める
  new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible) start();
  }).observe(hero);
  document.addEventListener("visibilitychange", () => {
    visible = !document.hidden && visible;
    if (!document.hidden) { visible = true; start(); }
  });

  let rt;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { resize(); if (reduce) start(); }, 120); });

  resize();
  start();
})();
