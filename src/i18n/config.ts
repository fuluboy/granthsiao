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

export const WORK_SLUGS = ["house579", "rakuya-data-product", "design-system", "star-metric"] as const;
export type WorkSlug = (typeof WORK_SLUGS)[number];

export function otherLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

/**
 * Deploy base path (e.g. "/granthsiao" on GitHub Pages, "" locally), with any
 * trailing slash stripped so it can be safely concatenated with a leading-
 * slash path below. Astro's `import.meta.env.BASE_URL` already reflects the
 * `base` value configured in astro.config.mjs.
 */
function normalizedBase(): string {
  const base = import.meta.env.BASE_URL ?? "/";
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

/**
 * Prefix a root-relative path (starting with "/") with the configured deploy
 * base path, so hardcoded internal links and `public/`-rooted asset paths
 * keep resolving correctly under a GitHub Pages project subpath instead of
 * silently pointing at the domain root.
 */
export function withBase(path: string): string {
  return `${normalizedBase()}${path}`;
}

/**
 * Strip the deploy base path from a pathname if present, leaving the
 * "logical" site-relative path. Safe to call on a pathname that never had
 * the base in the first place (e.g. if a future Astro version stops
 * including it in Astro.url.pathname) — it's a no-op in that case.
 */
function stripBase(pathname: string): string {
  const base = normalizedBase();
  if (base && pathname.startsWith(base)) {
    return pathname.slice(base.length) || "/";
  }
  return pathname;
}

/** Swap the leading /zh/ or /en/ path segment to build the alternate-language URL for the same page. */
export function swapLocaleInPath(pathname: string, targetLocale: Locale): string {
  const parts = stripBase(pathname).split("/").filter(Boolean);
  if (parts.length === 0) return withBase(`/${targetLocale}/`);
  parts[0] = targetLocale;
  return withBase(`/${parts.join("/")}/`);
}

/** Normalize a pathname (with or without the base already applied) to always include the base exactly once. */
export function ensureBase(pathname: string): string {
  return withBase(stripBase(pathname));
}

/** A short piece of UI copy that only ever needs a zh/en pair (not full page content). */
export type LocalizedText = Record<Locale, string>;

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
    accessibility: {
      primaryNav: string;
      footerNav: string;
      caseStudyNav: string;
      nextCaseNav: string;
    };
    caseStudy: {
      sectionNav: {
        context: string;
        whatWeSaw: string;
        keyDecisions: string;
        execution: string;
        impact: string;
        reflection: string;
      };
      keyDecisionsKicker: string;
      heroMediaPurpose: string;
      executionMediaPurpose: string;
    };
    media: {
      selectedWorkCoverPurpose: string;
      before: string;
      after: string;
      placeholderVariant: {
        hero: string;
        ui: string;
        diagram: string;
        "before-after": string;
        detail: string;
        process: string;
      };
    };
    lightbox: {
      viewLargerImage: string;
      close: string;
      previous: string;
      next: string;
      zoomIn: string;
      zoomOut: string;
    };
    language: {
      current: string;
    };
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
    accessibility: {
      primaryNav: "主要導覽",
      footerNav: "頁尾導覽",
      caseStudyNav: "案例章節導覽",
      nextCaseNav: "案例前後導覽",
    },
    caseStudy: {
      sectionNav: {
        context: "專案背景",
        whatWeSaw: "觀察與洞察",
        keyDecisions: "關鍵決策",
        execution: "執行方式",
        impact: "成果影響",
        reflection: "回顧反思",
      },
      keyDecisionsKicker: "關鍵決策",
      heroMediaPurpose: "案例首頁主視覺",
      executionMediaPurpose: "呈現產品規則、資料流程或元件治理的示意圖",
    },
    media: {
      selectedWorkCoverPurpose: "精選作品封面圖",
      before: "改版前",
      after: "改版後",
      placeholderVariant: {
        hero: "主視覺",
        ui: "介面",
        diagram: "示意圖",
        "before-after": "改版前後",
        detail: "細節",
        process: "流程",
      },
    },
    lightbox: {
      viewLargerImage: "放大查看圖片",
      close: "關閉圖片",
      previous: "上一張",
      next: "下一張",
      zoomIn: "放大",
      zoomOut: "縮小",
    },
    language: {
      current: "中",
    },
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
    accessibility: {
      primaryNav: "Primary navigation",
      footerNav: "Footer navigation",
      caseStudyNav: "Case study sections",
      nextCaseNav: "Case study navigation",
    },
    caseStudy: {
      sectionNav: {
        context: "Context",
        whatWeSaw: "What we saw",
        keyDecisions: "Key decisions",
        execution: "Execution",
        impact: "Impact",
        reflection: "Reflection",
      },
      keyDecisionsKicker: "KEY DECISIONS",
      heroMediaPurpose: "Case study hero visual",
      executionMediaPurpose:
        "Illustrate the product rules, data workflow, or component governance in practice",
    },
    media: {
      selectedWorkCoverPurpose: "Selected work cover image",
      before: "Before",
      after: "After",
      placeholderVariant: {
        hero: "Hero",
        ui: "UI",
        diagram: "Diagram",
        "before-after": "Before / After",
        detail: "Detail",
        process: "Process",
      },
    },
    lightbox: {
      viewLargerImage: "View larger image",
      close: "Close image",
      previous: "Previous image",
      next: "Next image",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
    },
    language: {
      current: "EN",
    },
  },
};
