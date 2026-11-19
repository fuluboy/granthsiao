import type { AboutContent } from "../types";
import { siteConfig } from "../siteConfig";

export const about: AboutContent = {
  meta: {
    title: "About",
    description:
      "Grant Hsiao，AI Product Manager / Designer。帶過 7 人的 PM、UI／UX 與前端團隊，現在專注研究 AI 怎麼真正進到團隊的工作流程。",
  },
  name: "Grant Hsiao",
  role: "AI Product Manager / Designer · 台北",
  availability: "Open to work",
  photoAlt: "Grant Hsiao 的照片",
  paragraphs: [
    "從上古時期的網頁設計起步，一路經歷 Flash、DIV/CSS、gulp，再隨浪潮走進 UI/UX 與 Vue 前端，最後闖進產品的世界，帶過七人的 PM、設計與前端團隊。每換一次跑道，都是想弄懂「這一切究竟是怎麼回事」，然後讓產品有更高的機率達成目標。",
    "近期我把大量工作透過 AI 協助完成。專案前期，它協助我用 Python 有系統地蒐集資料，並把模糊的想法追問成清楚的需求與使用情境，解析出價值落在哪裡；後期，它幫我寫自動化測試，建立模擬內容，把容易漏掉的 edge case 都輕鬆跑過一輪。",
    "在追逐產品進化的當下，我也喜歡探索獨立音樂。Indie music live forever 🤘",
  ],
  links: [
    { label: "Email", href: `mailto:${siteConfig.contactEmail}`, external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/grant-hsiao-b3143682/", external: true },
    { label: "SoundCloud", href: "https://soundcloud.com/grant-hsiao", external: true },
  ],
  writingLabel: "最近在寫",
};
