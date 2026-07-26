import type { HomeContent } from "../types";

export const home: HomeContent = {
  meta: {
    title: "Product & Design Lead",
    description:
      "我擅長沿著完整的用戶旅程找出問題根因，並在商業、資料與技術條件下，將洞察轉化為能落地、能持續經營的產品解法。",
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
    title: "洞察用戶真實需求，打造兼顧使用體驗與商業動能的產品。",
    lead: "我擅長沿著完整的用戶旅程找出問題根因，並在商業、資料與技術條件下，將洞察轉化為能落地、能持續經營的產品解法。",
    eyebrow: "0→1 Product · Data Product · Design Leadership",
  },
  selectedWork: {
    kicker: "SELECTED WORK",
    heading: "三個案例，三種產品挑戰",
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
        name: "樂屋案源情報",
        title: "把分散的市場訊號，轉成房仲每天可採取行動的案源情報",
        description:
          "從房仲每天跨平台找新案、比對價格與判斷地址的工作出發，建立初次上架、降價與下架日報，再推進品牌試用、系統整合與付費合作。",
        tags: ["Product Strategy", "B2B PropTech", "Agent Intelligence"],
        metric: "每日案源掃描 1–2 小時 → 5–10 分鐘 · 2 家品牌續約付費",
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
    ],
  },
  aboutTeaser: {
    kicker: "ABOUT",
    heading: "嗨，我是 Grant。",
    paragraph:
      "我從網頁設計與前端開始，一路走進產品設計、產品策略與團隊領導。早期同時做設計和前端，讓我很快發現：畫面在設計稿上合理，真正進入系統後，還要面對資料、工程、營運，以及使用者不一定照預期操作的現實。",
    cta: "了解更多",
  },
  contactCta: {
    kicker: "CONTACT",
    title: "一起把複雜的問題，整理成能往前推進的產品。",
    lead: "我關注產品與設計領導、資料產品、0→1 建置，以及需要跨設計、工程與營運協作的挑戰。",
    cta: "聯絡我",
  },
};
