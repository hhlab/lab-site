// 研究テーマ・これまでの研究・研究室紹介
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

  pastResearch: [
    {
      year: 2025,
      papers: [
        {
          author: "稲葉 素記・濱田 遼太郎・服部 隆志",
          authorEn: "Motoki Inaba, Ryotaro Hamada, Takashi Hattori",
          title: "オセロにおける次の一手問題と解説自動生成の性能評価",
          titleEn: "Evaluating the Performance of Automatically Generated Next-Move Problems and Explanations in Othello",
          linkLabel: "論文情報 / Paper",
          linkFormat: "WEB",
          url: "https://ipsj.ixsq.nii.ac.jp/records/2005507",
        },
      ],
    },
    {
      year: 2024,
      papers: [
        {
          author: "黄 勃翰", authorEn: "Bohan Huang",
          title: "Code Completion System Suitable for Beginners", titleLang: "en",
          linkLabel: "学内のみ",
          url: "https://doc.lib.keio.ac.jp/region1/mag/m/2024/mgtm_2024_4313.pdf",
        },
        {
          author: "伊藤 明孝", authorEn: "Akitaka Ito",
          title: "ウェアラブルデバイスを用いた集中力推定と介入",
          titleEn: "Concentration Estimation and Intervention Using Wearable Devices",
          linkLabel: "学内のみ",
          url: "https://doc.lib.keio.ac.jp/region1/mag/m/2024/mgtm_2024_4293ab.pdf",
        },
      ],
    },
    {
      year: 2016,
      papers: [
        {
          author: "服部 隆志", authorEn: "Takashi Hattori",
          title: "プログラミング入門をどうするか：7. 慶應義塾大学SFCにおける初年次プログラミング教育",
          titleEn: "Discussion on the Way of Computer Programming Education: 7. First-Year Programming Course at Keio SFC",
          linkLabel: "論文情報 / Paper",
          linkFormat: "WEB",
          url: "https://ipsj.ixsq.nii.ac.jp/records/158101",
        },
      ],
    },
    {
      year: 2015,
      papers: [
        {
          author: "大田 祐輔", authorEn: "Yusuke Ota",
          title: "トピックモデルを用いた自由記述アンケートの要約",
          linkLabel: "成果報告 / Report",
          linkFormat: "WEB",
          url: "https://www.kri.sfc.keio.ac.jp/report/mori/2015/c-072/",
        },
      ],
    },
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
