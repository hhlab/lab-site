// メンバーの「在室ボード」。役職ごとの段に名札を並べる。
// 名札には氏名・学年・関心テーマをすべて載せる（操作なしで読める）。
// url を持つメンバーは氏名が本人のサイトへのリンクになる。
(() => {
  const data = window.LAB_MEMBERS || [];
  const board = document.getElementById("member-board");
  if (!board) return;

  // 段の順番と見出し。role はこの4種
  const ROWS = [
    { role: "教員", label: "教員",     en: "Faculty" },
    { role: "博士", label: "博士課程", en: "Doctoral" },
    { role: "修士", label: "修士課程", en: "Master's" },
    { role: "学部", label: "学部",     en: "Undergraduate" },
  ];

  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // url があれば氏名をリンクにする。外部サイトなので別タブで開く
  const name = (m) => (m.url
    ? `<a href="${esc(m.url)}" target="_blank" rel="noopener noreferrer">${esc(m.name)}</a>`
    : esc(m.name));

  const card = (m) => `
    <li class="card">
      <i class="card__pin" aria-hidden="true"></i>
      <span class="card__name">${name(m)}</span>
      <span class="card__meta"><b>${esc(m.grade)}</b><span>${esc(m.en)}</span>${m.sample ? `<span class="card__sample">サンプル</span>` : ""}</span>
      <ul class="card__tags" aria-label="関心テーマ">
        ${(m.interests || []).map((t) => `<li>${esc(t)}</li>`).join("")}
      </ul>
    </li>`;

  board.insertAdjacentHTML("beforeend", ROWS.map(({ role, label, en }) => {
    const members = data.filter((m) => m.role === role);
    if (!members.length) return "";
    return `
      <div class="board__row board__row--${esc(role)}">
        <h3 class="board__role">${label}<small>${en}<span>${members.length}名</span></small></h3>
        <ul class="board__cards">${members.map(card).join("")}</ul>
      </div>`;
  }).join(""));
})();
