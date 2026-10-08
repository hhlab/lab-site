// 日本語を初期表示にし、ユーザーが選んだ言語を保存する。
(() => {
  const messages = {
    ja: {
      pageTitle: "服部研究室 | Hattori Lab, Keio SFC",
      description: "慶應義塾大学 湘南藤沢キャンパス（SFC）の服部研究室。森の中で、知能を設計する。",
      lab: "服部研究室", skip: "本文へ", navigation: "ページ内リンク",
      research: "研究", archive: "過去の研究", members: "メンバー", about: "研究室紹介", access: "アクセス",
      tagline: "森の中で、知能を設計する。", scroll: "下へスクロール",
      campus: "慶應義塾大学 湘南藤沢キャンパス",
      address: "〒252-0882 神奈川県藤沢市遠藤5322",
      campusAlt: "白い校舎と池、緑豊かな並木道を描いた湘南藤沢キャンパスの建築コンセプトアート",
      language: "表示言語", year: "年度", publicationYear: "年", weekly: "週1回", interests: "専門分野",
      faculty: "教員", doctoral: "博士課程", masters: "修士課程",
      otherResearch: "その他の研究・活動", researchCountUnit: "件",
    },
    en: {
      pageTitle: "Hattori Lab | Keio University SFC",
      description: "Hattori Lab at Keio University's Shonan Fujisawa Campus (SFC). Designing intelligence among the trees.",
      lab: "Hattori Lab", skip: "Skip to content", navigation: "Page navigation",
      research: "Research", archive: "Past Research", members: "Members", about: "About", access: "Access",
      tagline: "Designing intelligence among the trees.", scroll: "Scroll down",
      campus: "Keio University, Shonan Fujisawa Campus",
      address: "5322 Endo, Fujisawa, Kanagawa 252-0882, Japan",
      campusAlt: "Architectural concept art of Shonan Fujisawa Campus with white buildings, a pond, and tree-lined paths",
      language: "Display language", year: "Academic year", publicationYear: "Year", weekly: "Weekly", interests: "Research interests",
      faculty: "Faculty", doctoral: "Doctoral", masters: "Master's",
      otherResearch: "Other Research & Activities", researchCountUnit: "items",
    },
  };
  let language = "ja";
  try {
    const saved = localStorage.getItem("lab-language");
    if (saved === "ja" || saved === "en") language = saved;
  } catch (_) { /* 保存が制限されていても切り替えられる */ }
  document.documentElement.lang = language;

  const t = (key) => messages[language][key] ?? key;
  const apply = () => {
    document.documentElement.lang = language;
    document.title = t("pageTitle");
    document.querySelector('meta[name="description"]').content = t("description");
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    for (const attribute of ["aria-label", "alt"]) {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((node) => {
        node.setAttribute(attribute, t(node.getAttribute(`data-i18n-${attribute}`)));
      });
    }
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
  };
  window.LAB_I18N = {
    get language() { return language; },
    t,
    pick: (ja, en) => language === "en" ? (en ?? ja) : ja,
    setLanguage(next) {
      if ((next !== "ja" && next !== "en") || next === language) return;
      language = next;
      try { localStorage.setItem("lab-language", language); } catch (_) { /* 保存は任意 */ }
      apply();
      window.dispatchEvent(new Event("languagechange"));
    },
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => window.LAB_I18N.setLanguage(button.dataset.language));
    });
    apply();
  });
})();
