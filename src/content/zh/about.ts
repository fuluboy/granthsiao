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
    "我做產品與設計十多年，帶過 7 人的 PM、UI／UX 與前端團隊。我習慣先看使用者實際怎麼工作，再決定什麼值得做；UX 與前端背景讓我能直接和工程討論怎麼做出來。",
    "現在我把帶團隊的方法用在和 AI 一起工作上：講清楚要什麼、怎樣才算做完，再判斷結果好不好。工作之外，我做一些自己的音樂。",
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/grant-hsiao-b3143682/", external: true },
    { label: "Email", href: `mailto:${siteConfig.contactEmail}`, external: true },
    { label: "履歷", href: siteConfig.resumeHref.zh },
    { label: "SoundCloud", href: "https://soundcloud.com/grant-hsiao", external: true },
  ],
  writingLabel: "最近在寫",
};
