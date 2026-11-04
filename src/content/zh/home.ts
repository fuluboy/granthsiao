import type { HomeContent } from "../types";

export const home: HomeContent = {
  meta: {
    title: "Product & Design Lead",
    description:
      "Grant Hsiao，Product & Design Lead。最新作品 Shunfeng 一人 10 天完成，從研究、設計到 iPhone 實機驗證；過去從零建立房產平台，付費刊登最高 5 萬筆。",
  },
  profile: {
    name: "Grant Hsiao／蕭宏彬",
    role: "Product & Design Lead",
    location: "Taipei, Taiwan",
    primaryAction: "看代表作品",
    secondaryAction: "下載履歷",
  },
  hero: {
    kicker: "HOME",
    title: "從零建立產品，\n現在用 AI 做得更快。",
    lead: "最新作品 Shunfeng 一人 10 天完成，從研究、設計到 iPhone 實機驗證；過去從零建立房產平台，付費刊登最高 5 萬筆。",
    eyebrow: "AI-native Product · Product Strategy · UI/UX Leadership",
  },
  selectedWork: {
    kicker: "SELECTED WORK",
    heading: "精選案例",
    cards: [
      {
        slug: "shunfeng",
        index: "01",
        eyebrow: "AI-native Product · Accessibility · Design System",
        name: "Shunfeng 順風",
        title: "為聽障旅客聽機場廣播，只為你的航班震動",
        description:
          "Meta 全球 AI 開發者黑客松作品。一個人在 10 天內完成旅程研究、設計系統、動態規格、AI 協作開發與 iPhone 實機驗證。",
        tags: ["AI-native Product", "Accessibility", "Design System"],
        metric: "47/47 通知判斷全對 · 10 天一人完成",
        imageSide: "left",
      },
      {
        slug: "house579",
        index: "02",
        eyebrow: "0-to-1 Product · Commercialization · Product Operations",
        name: "House579",
        title: "先降低房仲刊登門檻，再建立付費理由",
        description:
          "在沒有品牌知名度與大量客服資源的情況下，從註冊、刊登、資料搬移到手機管理一步步建立，讓平台從免費導入走向付費營運。",
        tags: ["0-to-1 Product", "Commercialization", "Product Operations"],
        metric: "三個月近 20 萬筆免費刊登 · 付費刊登最高 5 萬筆",
        imageSide: "right",
      },
      {
        slug: "rakuya-data-product",
        index: "03",
        eyebrow: "Product Strategy · B2B PropTech · Agent Intelligence",
        name: "樂屋房仲案源情報",
        title: "從分散刊登辨識同一間房，還原它的市場歷程",
        description:
          "以加權比對推定地址與物件關聯，再串接實價登錄、謄本和土地圖塊；每季抽樣驗證命中結果。",
        tags: ["Product Strategy", "B2B PropTech", "Agent Intelligence"],
        metric: "案源掃描 1–2 小時 → 5–10 分鐘 · 2 家品牌續約付費",
        imageSide: "left",
      },
      {
        slug: "design-system",
        index: "04",
        eyebrow: "Design Leadership · Design System · Team Transformation",
        name: "Design System",
        title: "把分散元件與體驗邏輯，整理成跨產品共同基礎",
        description:
          "利用 Figma 與 Vue 轉型，建立 Token、設計元件、前端元件與治理方式，讓三個產品團隊逐步共用同一套基礎。",
        tags: ["Design Leadership", "Design System", "Team Transformation"],
        metric: "3 個產品團隊導入 · 首批元件 2 週交付",
        imageSide: "right",
      },
      {
        slug: "speedmeter",
        index: "05",
        eyebrow: "AI-assisted Product Workflow · Data Quality · Validation",
        name: "SpeedMeter",
        title: "透過 AI 快速驗證產品假設",
        description:
          "從測速警示與道路資料出發，把 AI 用在訪談整理、原型、工作拆解、開發與測試，快速把想法做成可以實際驗證的版本。",
        tags: ["AI-assisted Workflow", "Data Quality", "Product Validation"],
        metric: "產品假設 → 可操作原型 → GPS 模擬驗證",
        imageSide: "left",
      },
      {
        slug: "star-metric",
        index: "06",
        eyebrow: "AI-assisted Product · 0-to-1 · Mobile App",
        name: "Star Metric",
        title: "從 AI 實驗到上架產品",
        description:
          "整合星座、人格類型與紫微訊號，建立 27,648 組個人化內容資料，再完成 UI/UX、AI 輔助開發與 Android 正式上架。",
        tags: ["AI-assisted Product", "0-to-1", "Mobile App"],
        metric: "27,648 組內容 · Android 已上架",
        imageSide: "right",
      },
    ],
  },
  aiWorkflow: {
    kicker: "HOW I WORK WITH AI",
    heading: "AI 負責寫，我負責定義、判斷與驗收",
    lead: "從 SpeedMeter、Star Metric 到 Shunfeng，我用同一套方法和 AI 合作：AI 讓我更快看到真實結果，但做什麼、什麼算對、何時可以上線，由我決定。",
    steps: [
      {
        number: "1",
        heading: "先定義問題與驗收標準",
        body: "動手前先畫旅程、寫下什麼算成功。以 Shunfeng 為例：「只為你的航班震動，不確定就說可能」。AI 拿到的是行為規則與驗收條件，不是模糊需求。",
      },
      {
        number: "2",
        heading: "AI 實作，我來審查",
        body: "程式碼、素材與 log 分析多由 AI（Claude）完成。我負責拆需求、定規則、審查輸出，遇到取捨（例如能不能公開使用的授權）由我決定。",
      },
      {
        number: "3",
        heading: "用評估資料取代直覺",
        body: "把判斷寫成可以重跑的測試：Shunfeng 有 61 個自動測試、47 則測試廣播與 10 則集外資料。看起來更聰明的關鍵字提示，就是被評估結果否決的。",
      },
      {
        number: "4",
        heading: "實機驗證，誠實標示",
        body: "在真實裝置與情境測試：鎖屏、來電、斷線、GPS 模擬。拍片當天的 log 帶出 5 項修正。最後寫清楚哪些已驗證、哪些還沒，下一步交給真實使用者回饋。",
      },
    ],
    evidenceLabel: "用這套方法做的案例",
    evidence: [
      { name: "Shunfeng 順風", label: "一人 10 天，47/47 判斷全對", slug: "shunfeng" },
      { name: "SpeedMeter", label: "假設到原型，再用 GPS 模擬驗證", slug: "speedmeter" },
      { name: "Star Metric", label: "AI 實驗到 Android 正式上架", slug: "star-metric" },
    ],
  },
  aboutTeaser: {
    kicker: "ABOUT",
    heading: "嗨，我是 Grant。",
    paragraph:
      "我是具備 UX、前端與團隊管理背景的產品與設計主管。從零建立平台並推進付費、做過房仲資料產品，現在用 AI 一個人就能把產品從研究做到實機驗證；不變的是，先弄清楚使用者怎麼工作，再決定值得做什麼。",
    cta: "了解更多",
  },
  contactCta: {
    kicker: "CONTACT",
    title: "一起把複雜的問題，整理成能往前推進的產品。",
    lead: "我關注產品策略、AI 產品應用、0→1 建置，以及需要整合 UX、資料、技術與跨職能協作的產品挑戰。",
    cta: "聯絡我",
  },
};
