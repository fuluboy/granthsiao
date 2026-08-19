import type { HomeContent } from "../types";

export const home: HomeContent = {
  meta: {
    title: "Product & Design Lead",
    description:
      "結合產品策略、UX、資料與技術能力，透過 AI 加速研究、驗證與實作，將產品想法一路推進到可驗證、可落地的成果。",
  },
  profile: {
    name: "Grant Hsiao／蕭宏彬",
    role: "Product & Design Lead",
    location: "Taipei, Taiwan",
    primaryAction: "查看精選作品",
    secondaryAction: "下載履歷",
  },
  hero: {
    kicker: "HOME",
    title: "從產品策略到上線，透過 AI 加速把想法變成產品。",
    lead: "結合產品策略、UX、資料與技術能力，從問題探索與產品決策一路推進到設計、驗證與上線；也運用 AI 加速研究、原型、小規模前後端實作與測試，在投入完整開發前更快驗證產品與技術可行性。",
    eyebrow: "Product Strategy · UI/UX Leadership · AI-assisted Validation & Building",
  },
  selectedWork: {
    kicker: "SELECTED WORK",
    heading: "精選案例",
    cards: [
      {
        slug: "house579",
        index: "01",
        eyebrow: "0-to-1 Product · Commercialization · Product Operations",
        name: "House579",
        title: "從零建立房產刊登平台，並推進至付費營運",
        description:
          "在沒有品牌知名度與大量客服資源的情況下，從註冊、刊登、資料搬移到手機管理一步步建立，讓平台從免費導入走向付費營運。",
        tags: ["0-to-1 Product", "Commercialization", "Product Operations"],
        metric: "5 萬+ 付費物件 · 3,000+ 房仲",
        imageSide: "left",
      },
      {
        slug: "rakuya-data-product",
        index: "02",
        eyebrow: "Product Strategy · B2B PropTech · Agent Intelligence",
        name: "樂屋房仲案源情報",
        title: "把分散的市場訊號，轉成房仲每天可採取行動的案源情報",
        description:
          "從房仲每天跨平台找新案、比對價格與判斷地址的工作出發，建立初次上架、降價與下架日報，再推進品牌試用、系統整合與付費合作。",
        tags: ["Product Strategy", "B2B PropTech", "Agent Intelligence"],
        metric: "案源掃描 1–2 小時 → 5–10 分鐘 · 2 家品牌續約付費",
        imageSide: "right",
      },
      {
        slug: "design-system",
        index: "03",
        eyebrow: "Design Leadership · Design System · Team Transformation",
        name: "Design System",
        title: "把分散元件與體驗邏輯，整理成跨產品共同基礎",
        description:
          "利用 Figma 與 Vue 轉型，建立 Token、設計元件、前端元件與治理方式，讓三個產品團隊逐步共用同一套基礎。",
        tags: ["Design Leadership", "Design System", "Team Transformation"],
        metric: "3 個產品團隊導入 · 首批元件 2 週交付",
        imageSide: "left",
      },
      {
        slug: "star-metric",
        index: "04",
        eyebrow: "AI-assisted Product · 0-to-1 · Mobile App",
        name: "Star Metric",
        title: "從 AI 實驗到上架產品",
        description:
          "整合星座、MBTI 與紫微訊號，建立 27,648 組內容資料與兩階段 AI 生成流程，完成 UI/UX、AI 協作開發與 Android 上架。",
        tags: ["AI-assisted Product", "0-to-1", "Mobile App"],
        metric: "27,648 組內容 · Android 已上架",
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
    ],
  },
  aboutTeaser: {
    kicker: "ABOUT",
    heading: "嗨，我是 Grant。",
    paragraph:
      "我是橫跨產品策略、UX、技術與團隊管理的 Product & Design Lead。我擅長從複雜問題中整理產品方向，並把策略一路推進到設計、驗證與實作；近年也持續將 AI 納入產品工作流程，加速探索、驗證與交付。",
    cta: "了解更多",
  },
  contactCta: {
    kicker: "CONTACT",
    title: "一起把複雜的問題，整理成能往前推進的產品。",
    lead: "我關注產品策略、AI 產品應用、0→1 建置，以及需要整合 UX、資料、技術與跨職能協作的產品挑戰。",
    cta: "聯絡我",
  },
};