import type { HomeContent } from "../types";

export const home: HomeContent = {
  meta: {
    title: "Senior Product Manager",
    description:
      "Grant Hsiao，資深產品經理。從零建立房產平台，上線三個月近 20 萬筆免費刊登；六個月免費期後推出付費刊登，付費刊登最高 5 萬筆。",
  },
  profile: {
    name: "Grant Hsiao／蕭宏彬",
    role: "Senior Product Manager",
    location: "Taipei, Taiwan",
    primaryAction: "看代表作品",
    secondaryAction: "下載履歷",
  },
  hero: {
    kicker: "HOME",
    title: "從零建立房產平台，\n付費刊登最高 5 萬筆。",
    lead: "上線三個月近 20 萬筆免費刊登；六個月免費期後推出付費刊登。",
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
        metric: "付費刊登最高 5 萬筆 · 3,000+ 房仲",
        imageSide: "left",
      },
      {
        slug: "rakuya-data-product",
        index: "02",
        eyebrow: "Product Strategy · B2B PropTech · Agent Intelligence",
        name: "樂屋房仲案源情報",
        title: "從分散刊登辨識同一間房，還原它的市場歷程",
        description:
          "以加權比對推定地址與物件關聯，再串接實價登錄、謄本和土地圖塊；每季抽樣驗證命中結果。",
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
        slug: "speedmeter",
        index: "04",
        eyebrow: "AI-assisted Product Workflow · Data Quality · Validation",
        name: "SpeedMeter",
        title: "透過 AI 快速驗證產品假設",
        description:
          "從測速警示與道路資料出發，把 AI 用在訪談整理、原型、工作拆解、開發與測試，快速把想法做成可以實際驗證的版本。",
        tags: ["AI-assisted Workflow", "Data Quality", "Product Validation"],
        metric: "產品假設 → 可操作原型 → GPS 模擬驗證",
        imageSide: "right",
      },
      {
        slug: "star-metric",
        index: "05",
        eyebrow: "AI-assisted Product · 0-to-1 · Mobile App",
        name: "Star Metric",
        title: "從 AI 實驗到上架產品",
        description:
          "整合星座、人格類型與紫微訊號，建立 27,648 組個人化內容資料，再完成 UI/UX、AI 輔助開發與 Android 正式上架。",
        tags: ["AI-assisted Product", "0-to-1", "Mobile App"],
        metric: "27,648 組內容 · Android 已上架",
        imageSide: "left",
      },
    ],
  },
  aboutTeaser: {
    kicker: "ABOUT",
    heading: "嗨，我是 Grant。",
    paragraph:
      "我是具備 UX、前端與團隊管理背景的資深產品經理。除了從零建立平台並推進付費，也做過房仲資料產品；我習慣先弄清楚使用者怎麼工作，再與團隊決定值得做什麼。",
    cta: "了解更多",
  },
  contactCta: {
    kicker: "CONTACT",
    title: "一起把複雜的問題，整理成能往前推進的產品。",
    lead: "我關注產品策略、AI 產品應用、0→1 建置，以及需要整合 UX、資料、技術與跨職能協作的產品挑戰。",
    cta: "聯絡我",
  },
};
