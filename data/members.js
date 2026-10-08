// メンバーデータ
// 名札の内容はこのファイルだけを編集すれば変わる。
//   role     : "教員" | "博士" | "修士"  … 在室ボードの段を決める
//   grade    : 表示用の役職・学年ラベル（教授 / 名誉教授 / D2 / M1 など）
//   interests: 関心キーワード（3つ程度が見やすい）
//   en / gradeEn / interestsEn: 英語表示用の氏名・役職・専門分野
//   url      : 本人のサイト。入れると名札の氏名がリンクになる（省略可）
window.LAB_MEMBERS = [
  { id: "hattori",  name: "服部 隆志",   en: "Takashi Hattori",   role: "教員", grade: "教授",
    gradeEn: "Professor", interests: ["計算機科学", "プログラミング言語", "プログラミング教育"],
    interestsEn: ["Computer Science", "Programming Languages", "Programming Education"],
    url: "https://www.k-ris.keio.ac.jp/html/100012628_ja.html" },
  { id: "hagino",   name: "萩野 達也",   en: "Tatsuya Hagino", role: "教員", grade: "名誉教授", gradeEn: "Professor Emeritus",
    interests: ["ソフトウェア科学", "システムソフトウェア", "Web技術"],
    interestsEn: ["Software Science", "System Software", "Web Technologies"],
    url: "https://k-ris.keio.ac.jp/html/100012626_ja.html" },

  { id: "inaba",    name: "稲葉 素記",   en: "Motoki Inaba", role: "博士", grade: "博士", gradeEn: "Doctoral student",
    interests: ["ゲーム情報学"], interestsEn: ["Game Informatics"] },

  { id: "sugawara", name: "菅原 佳澄",   en: "Kasumi Sugawara", role: "修士", grade: "修士", gradeEn: "Master's student",
    interests: ["知能機械学", "制御工学"], interestsEn: ["Physical AI", "Control Engineering"] },
  { id: "odagaki",  name: "小田垣 椎太", en: "Shita Odagaki", role: "修士", grade: "修士", gradeEn: "Master's student",
    interests: ["画像処理", "モーショントラッキング"], interestsEn: ["Image Processing", "Motion Tracking"] },
  { id: "kawagoe",  name: "川越 航太",   en: "Kota Kawagoe",      role: "修士", grade: "M1",
    gradeEn: "M1", interests: ["AI Agent", "RAG"], interestsEn: ["AI Agents", "RAG"], url: "https://project-kk.com" },
];
