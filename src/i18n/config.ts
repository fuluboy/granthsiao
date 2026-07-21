export const LOCALES = ["zh", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "zh";

export const HTML_LANG: Record<Locale, string> = {
  zh: "zh-Hant",
  en: "en",
};

export const OG_LOCALE: Record<Locale, string> = {
  zh: "zh_TW",
  en: "en_US",
};

export const WORK_SLUGS = ["house579", "rakuya-data-product", "design-system"] as const;
export type WorkSlug = (typeof WORK_SLUGS)[number];

export function otherLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

/** Swap the leading /zh/ or /en/ path segment to build the alternate-language URL for the same page. */
export function swapLocaleInPath(pathname: string, targetLocale: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${targetLocale}/`;
  parts[0] = targetLocale;
  return `/${parts.join("/")}/`;
}

export const UI_TEXT: Record<
  Locale,
  {
    nav: { about: string; work: string; contact: string };
    langSwitchLabel: string;
    langSwitchLabelTo: (target: Locale) => string;
    menuOpen: string;
    menuClose: string;
    skipToContent: string;
    viewCaseStudy: string;
    nextCase: string;
    previousCase: string;
    onThisPage: string;
    backToWork: string;
    placeholderKicker: string;
  }
> = {
  zh: {
    nav: { about: "ABOUT", work: "SELECTED WORK", contact: "CONTACT" },
    langSwitchLabel: "切換語言",
    langSwitchLabelTo: (target) => (target === "en" ? "切換為英文網站" : "切換為中文網站"),
    menuOpen: "開啟選單",
    menuClose: "關閉選單",
    skipToContent: "跳至主要內容",
    viewCaseStudy: "查看完整案例",
    nextCase: "下一個案例",
    previousCase: "上一個案例",
    onThisPage: "本頁章節",
    backToWork: "返回精選作品",
    placeholderKicker: "圖片待補",
  },
  en: {
    nav: { about: "ABOUT", work: "SELECTED WORK", contact: "CONTACT" },
    langSwitchLabel: "Switch language",
    langSwitchLabelTo: (target) => (target === "zh" ? "Switch to Chinese site" : "Switch to English site"),
    menuOpen: "Open menu",
    menuClose: "Close menu",
    skipToContent: "Skip to main content",
    viewCaseStudy: "View case study",
    nextCase: "Next case",
    previousCase: "Previous case",
    onThisPage: "On this page",
    backToWork: "Back to selected work",
    placeholderKicker: "Image pending",
  },
};
