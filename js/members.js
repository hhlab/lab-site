// メンバーの「在室ボード」。役職ごとの段に名札を並べる。
// 名札には氏名・学年・関心テーマをすべて載せる（操作なしで読める）。
// url を持つメンバーは氏名が本人のサイトへのリンクになる。
(() => {
  const data = window.LAB_MEMBERS || [];
  const board = document.getElementById("member-board");
  if (!board) return;
  const i18n = window.LAB_I18N;
  const pick = i18n.pick;

  // 段の順番と見出し。role はこの3種
  const ROWS = [
    { role: "教員", key: "faculty", en: "Faculty" },
    { role: "博士", key: "doctoral", en: "Doctoral" },
    { role: "修士", key: "masters", en: "Master's" },
  ];

  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // url があれば氏名をリンクにする。外部サイトなので別タブで開く
  const name = (m) => (m.url
    ? `<a href="${esc(m.url)}" target="_blank" rel="noopener noreferrer">${esc(pick(m.name, m.en))}</a>`
    : esc(pick(m.name, m.en)));

  const card = (m) => `
    <li class="card">
      <i class="card__pin" aria-hidden="true"></i>
      <span class="card__name">${name(m)}</span>
      <span class="card__meta"><b>${esc(pick(m.grade, m.gradeEn))}</b>${i18n.language === "ja" && m.en ? `<span lang="en">${esc(m.en)}</span>` : ""}</span>
      <ul class="card__tags" aria-label="${i18n.t("interests")}">
        ${(pick(m.interests, m.interestsEn) || []).map((t) => `<li>${esc(t)}</li>`).join("")}
      </ul>
    </li>`;

  const render = () => {
    board.innerHTML = ROWS.map(({ role, key, en }) => {
      const members = data.filter((m) => m.role === role);
      if (!members.length) return "";
      return `
        <div class="board__row board__row--${esc(role)}">
          <h3 class="board__role">${i18n.t(key)}<small>${i18n.language === "ja" ? `<span lang="en">${en}</span>` : ""}<span>${members.length}${i18n.language === "ja" ? "名" : (members.length === 1 ? " member" : " members")}</span></small></h3>
          <ul class="board__cards">${members.map(card).join("")}</ul>
        </div>`;
    }).join("");
  };
  render();
  window.addEventListener("languagechange", render);
})();
