import type { AboutContent } from "../types";

export const about: AboutContent = {
  meta: {
    title: "About",
    description: "Grant Hsiao，資深產品經理。曾帶領 PM、UI／UX 與前端團隊，從零建立房產平台並推進付費，也打造房仲資料產品。",
  },
  kicker: "ABOUT",
  heading: "嗨，我是 Grant。",
  photoAlt: "Grant Hsiao 的照片",
  paragraphs: [
    "我帶過 7 人的 PM、UI／UX 與前端團隊。在 House579 從零建立房產刊登平台，推進到付費；在樂屋，和團隊把房仲每天找新案、追降價的工作做成資料產品。",
    "做產品時，我會先看使用者實際怎麼工作、資料能說明什麼，再決定先解哪個問題。遇到流程或技術不確定的地方，就用原型、小規模實作與測試提早驗證。",
    "UX 與前端背景讓我能和設計、工程直接討論流程、資料與實作限制；帶團隊時，我會把問題、決策依據和優先順序講清楚。近年也把 AI 用在研究整理、原型與測試，加快驗證，再由實際結果決定下一步。",
    "工作之外，我喜歡獨立音樂，也做一些自己的音樂創作。早期的視覺設計與插畫經驗，至今仍影響我看待畫面、資訊層級與產品質感的方式。我也喜歡持續接觸新的技術與工作方法，看看它們能為產品帶來什麼新的可能。",
  ],
  featuredCases: [
    { name: "House579", label: "從零建立平台，推進付費", slug: "house579" },
    { name: "樂屋房仲案源情報", label: "把找案做成資料產品", slug: "rakuya-data-product" },
  ],
  quote: {
    text: "聽好了，所謂的排球，是在網這邊的全員都是夥伴啊！",
    source: "《排球少年》",
  },
  stats: [
    { value: "最高 5 萬筆", label: "House579 付費刊登" },
    { value: "5–10 分鐘", label: "樂屋每日案源掃描，原約 1–2 小時（回饋）" },
    { value: "3 個產品團隊", label: "Design System 跨團隊導入" },
  ],
  links: [
    { label: "SoundCloud", href: "https://soundcloud.com/grant-hsiao", external: true, icon: "soundcloud" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/grant-hsiao-b3143682/",
      external: true,
      icon: "linkedin",
    },
  ],
  resumeLabel: "下載履歷",
  contactLabel: "與我聯絡",
};
