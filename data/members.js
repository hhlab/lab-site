// メンバーデータ
// 名札の内容はこのファイルだけを編集すれば変わる。
//   role     : "教員" | "博士" | "修士" | "学部"  … 在室ボードの段を決める
//   grade    : 表示用の学年ラベル（教授 / D2 / M1 / B4 など）
//   interests: 関心キーワード（3つ程度が見やすい）
//   url      : 本人のサイト。入れると名札の氏名がリンクになる（省略可）
//   sample   : true の名札には「サンプル」と表示される。実在の人に置き換えたら消す
window.LAB_MEMBERS = [
  { id: "hattori",  name: "服部 隆志",   en: "Takashi Hattori",   role: "教員", grade: "教授",
    interests: ["知識処理", "生成AI", "人とAIの協働"] },

  { id: "aoki",     name: "青木 結衣",   en: "Yui Aoki",          role: "博士", grade: "D2",   sample: true,
    interests: ["大規模言語モデル", "知識グラフ", "推論"] },
  { id: "miura",    name: "三浦 悠真",   en: "Yuma Miura",        role: "博士", grade: "D1",   sample: true,
    interests: ["マルチエージェント", "交渉", "ゲーム理論"] },

  { id: "takahashi",name: "高橋 澪",     en: "Mio Takahashi",     role: "修士", grade: "M2",   sample: true,
    interests: ["ヒューマンAIインタラクション", "意思決定支援"] },
  { id: "sasaki",   name: "佐々木 蓮",   en: "Ren Sasaki",        role: "修士", grade: "M2",   sample: true,
    interests: ["説明可能性", "公平性", "監査"] },
  { id: "kawagoe",  name: "川越 航太",   en: "Kota Kawagoe",      role: "修士", grade: "M1",
    interests: ["AI Agent", "RAG"], url: "https://project-kk.com" },
  { id: "nakamura", name: "中村 ひなた", en: "Hinata Nakamura",   role: "修士", grade: "M1",   sample: true,
    interests: ["生成モデルの評価", "ベンチマーク"] },
  { id: "kobayashi",name: "小林 大地",   en: "Daichi Kobayashi",  role: "修士", grade: "M1",   sample: true,
    interests: ["強化学習", "ロボティクス"] },
  { id: "yamada",   name: "山田 咲",     en: "Saki Yamada",       role: "修士", grade: "M1",   sample: true,
    interests: ["対話システム", "音声"] },

  { id: "ishii",    name: "石井 陽",     en: "Haru Ishii",        role: "学部", grade: "B4",   sample: true,
    interests: ["データ可視化", "都市データ"] },
  { id: "fujita",   name: "藤田 楓",     en: "Kaede Fujita",      role: "学部", grade: "B4",   sample: true,
    interests: ["プロンプト設計", "教育"] },
  { id: "okamoto",  name: "岡本 湊",     en: "Minato Okamoto",    role: "学部", grade: "B3",   sample: true,
    interests: ["画像生成", "デザイン支援"] },
  { id: "matsumoto",name: "松本 凛",     en: "Rin Matsumoto",     role: "学部", grade: "B3",   sample: true,
    interests: ["社会シミュレーション", "エージェント"] },
];
