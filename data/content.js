// 研究テーマ・研究室紹介
window.LAB_CONTENT = {
  // glyph: "chat" | "graph" | "board" | "route" | "arm" | "trace" … js/main.js のアイコン種別（テーマごとに1つずつ）
  research: [
    { glyph: "chat",    en: "Educational AI Agents",   title: "教育AIエージェント",
      text: "学ぶ人の理解に合わせて教え方を変え、寄り添うAIエージェントをつくる。" },
    { glyph: "graph",   en: "Temporal Graph Prediction", title: "時系列グラフにおけるノードの次数成長予測",
      text: "時間とともにつながりが増えていくグラフで、どのノードが伸びるかを予測する。" },
    { glyph: "board",   en: "Game AI",                  title: "ゲームAI",
      text: "ゲームという環境の中で、状況を読み、学習しながら賢く振る舞うAIを設計する。" },
    { glyph: "route",   en: "Skill Routing",            title: "AIエージェントのためのSkillルーティング",
      text: "数多くのスキルの中から、いま必要なものをエージェントが選び取る仕組みを考える。" },
    { glyph: "arm",     en: "Robot Learning",           title: "機械学習でロボットに動きを覚えさせる",
      text: "人が手で作り込むのではなく、データから学んでロボットが動けるようにする。" },
    { glyph: "trace",   en: "Imitative Drawing",        title: "画像処理による模写",
      text: "画像処理で対象の形や特徴をとらえ、模写として再現する。" },
  ],

  about: {
    lead: [
      "AIをはじめとする機械学習を軸に、幅広いテーマを扱う研究室です。",
      "教育を支えるエージェントからグラフ・ゲーム・ロボット・画像まで、対象は多様です。共通しているのは、データから学び、実際に動く知能をつくること。",
    ],
    // ゼミの進め方。週1回、立場ごとに持ってくるものが違う
    seminar: {
      title: "ゼミの進め方",
      lead: "全員が集まり、立場ごとに違うものを持ち寄ります。",
      roles: [
        { who: "修士1年", en: "M1",       what: "論文を読んできて、内容を発表する。" },
        { who: "修士2年", en: "M2",       what: "自分の研究の進捗を報告する。" },
        { who: "博士課程", en: "Doctoral", what: "研究の進捗など。何を話すかは自由。" },
      ],
    },
  },
};
