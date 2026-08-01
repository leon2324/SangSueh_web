export const magazineData = {
  magazineTitle: "尚學文教｜2026 暑期頂尖計劃",
  issueTitle: "7 月學習探索誌 —— 打破常規，翻轉未來",
  studentName: "尚學優秀學員",
  
  // P.02-P.03 Director Message
  directorMessage: {
    title: "打破常規學習框架，看見孩子的無限可能",
    subtitle: "「發現問題 → 自主思考 → 解決問題 → 規模化與商業化」",
    content: [
      "親愛的家長您好：",
      "歡迎翻開《尚學文教｜2026 暑期頂尖計劃》7 月份的學習紀錄誌！在過去這四個星期裡，孩子們經歷了一場打破傳統課堂限制的跨領域探究之旅。",
      "我們堅信，真正的教育不是填鴨式的知識灌輸，而是點燃孩子對未知事物的好奇心。從科學實驗中的保冰材質測試、成本計算與科展銷售提案，到旗山農地的親自除草、播種與澆水觀察；從故事寫作的八格畫本發表，到走出教室踏查鴻旗農場與古蹟博物館。",
      "每一個汗水與笑容交織的瞬間，都記錄著孩子從『被動學習』跨越到『主動探索與商業思考』的成長足跡。感謝您陪伴孩子一同見證這段精彩的暑期里程！"
    ],
    audioUrl: "/audio/director_speech.mp3", // mock audio endpoint
    transcript: [
      "親愛的家長您好，我是尚學文教營長...",
      "歡迎來到 2026 暑期頂尖計畫線上電子雜誌。",
      "這個月孩子們表現非常亮眼，從科學探究到食農體驗...",
      "讓我們一起看見他們的無限可能！"
    ]
  },

  // P.04-P.09 Theme Features (4 Major Themes)
  themes: [
    {
      id: "science",
      title: "🔬 冰品保冰商業化科展",
      category: "科學探究 DAY 1 ~ 10",
      description: "從日常問題『冰品怎麼保冷最久？』出發，做實驗測試保溫材料、數據分析、成本計算與擬定商業提案，舉辦專屬科展攤位銷售競賽。",
      image: "/images/science/img_1.jpg",
      gallery: [
        "/images/science/img_1.jpg",
        "/images/science/img_2.jpg",
        "/images/science/img_3.jpg",
        "/images/science/img_4.jpg"
      ],
      skills: ["實驗數據分析", "商業成本計算", "團隊提案簡報", "問題解決力"],
      story: "孩子們親自動手封裝不同材質的保冷層，紀錄溫度變化曲線。最後更化身為小創業家，計算包材成本並向大家發表他們的『涼夏保冰方案』！"
    },
    {
      id: "agri",
      title: "🌱 旗山農耕與小小市集",
      category: "食農教育 DAY 1 ~ 3 & 澆水紀錄",
      description: "從事前整地除草、體驗農夫辛勞，到播種、定期澆水紀錄作物成長，體會食物得來不易與產銷合作思維。",
      image: "/images/agri/img_1.jpg",
      gallery: [
        "/images/agri/img_1.jpg",
        "/images/agri/img_2.jpg",
        "/images/agri/img_3.jpg",
        "/images/agri/img_4.jpg"
      ],
      skills: ["作物觀察紀錄", "農地整地勞動", "產銷分潤觀念", "感恩與合作"],
      story: "陽光下，孩子們踩在泥土上、揮灑汗水拔除雜草。當看到自己親手澆灌的幼苗發芽時，那份發自內心的喜悅是課本上學不到的珍貴寶藏。"
    },
    {
      id: "writing",
      title: "✍️ 八格畫本與主題作文",
      category: "故事寫作與美感表達",
      description: "啟發想像力與邏輯思維，將豐富的暑期經歷轉化為八格繪本創作、封面設計與精采主題作文發表。",
      image: "/images/writing/img_1.jpg",
      gallery: [
        "/images/writing/img_1.jpg",
        "/images/writing/img_2.jpg",
        "/images/writing/img_3.jpg"
      ],
      skills: ["邏輯分鏡設計", "美感繪本創作", "修辭作文發表", "自信表達"],
      story: "每一本八格畫本都承載著孩子獨一無二的創意宇宙。孩子們手握色筆，將營隊中的點點滴滴畫成繪本，向全班自豪地發表故事。"
    },
    {
      id: "outdoor",
      title: "🚜 鴻旗農場與台南文化踏查",
      category: "戶外真實探索體驗",
      description: "走出教室！7/17 前往鴻旗休閒農場進行果園採摘與一日農夫體驗，並走訪台南水道博物館與司法博物館體驗歷史人文。",
      image: "/images/outdoor/img_1.jpg",
      gallery: [
        "/images/outdoor/img_1.jpg",
        "/images/outdoor/img_2.jpg",
        "/images/outdoor/img_3.jpg"
      ],
      skills: ["自然生態導覽", "文化古蹟探索", "團體生活常規", "跨域視野"],
      story: "在鴻旗農場的果園裡，孩子們呼吸著新鮮空氣、親手採摘新鮮水果，感受大自然的饋贈與豐富的生態知識。"
    }
  ],

  // P.10-P.13 Student Showcase
  showcase: [
    {
      id: 1,
      title: "保冰實驗結構設計圖 vs 實體裝置",
      student: "張*安 隊長",
      beforeLabel: "初稿設計圖",
      afterLabel: "實體測試裝置",
      beforeImg: "/images/science/img_5.jpg",
      afterImg: "/images/science/img_6.jpg",
      highlight: "巧妙運用廢棄寶特瓶與保麗龍碎屑，成功將融冰時間延長了 45 分鐘！"
    },
    {
      id: 2,
      title: "八格繪本創作《暑期奇幻農場冒險》",
      student: "陳*廷 小畫家",
      beforeLabel: "故事大綱草稿",
      afterLabel: "精裝八格畫本",
      beforeImg: "/images/writing/img_4.jpg",
      afterImg: "/images/writing/img_5.jpg",
      highlight: "繪本色彩豐富、分鏡明確，展現出極強的故事敘事力與想像力。"
    }
  ],

  // P.14-P.15 Radar & Evaluation
  competencies: [
    { label: "批判思考力", score: 92, desc: "能提出關鍵問題並多角度評估解決方案" },
    { label: "科學探究力", score: 95, desc: "實驗操作嚴謹，精確紀錄溫度與材料數據" },
    { label: "團隊協作力", score: 90, desc: "主動協助隊友分工，具備良好溝通態度" },
    { label: "表達創作力", score: 88, desc: "八格畫本設計極具美感，報告清晰有條理" },
    { label: "問題解決力", score: 94, desc: "遇到保冰效能不足時能迅速調整包材" }
  ],
  teacherComments: [
    {
      teacher: "科學探究導師 —— 陳老師",
      comment: "孩子在科展實驗中展現出超乎同齡人的專注力與邏輯思維。特別是在計算包材成本時，展現出優秀的商業探究潛力！"
    },
    {
      teacher: "食農與作文導師 —— 林老師",
      comment: "下田除草時從不喊累，澆水紀錄非常仔細。作文發表時台風穩健，內容情感真摯，是非常有感染力的小領導者！"
    }
  ],

  // Initial Guestbook Posts
  guestbook: [
    {
      id: 1,
      author: "張媽媽",
      message: "看到孩子在科展實驗和食農教育中的轉變真的太感動了！感謝尚學老師們的用心帶領！",
      sticker: "🌟 超級棒！",
      date: "2026-07-26"
    },
    {
      id: 2,
      author: "陳爸爸",
      message: "孩子回家一直分享旗山農地拔草跟科展銷售的事，今年暑假過得超級充實非常有意義！",
      sticker: "🔬 小小科學家",
      date: "2026-07-27"
    }
  ]
};
