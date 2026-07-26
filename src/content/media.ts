import { withBase, type Locale } from "../i18n/config";

/**
 * Explicit per-locale image path pair. Every real Case Study image that can
 * differ between languages (mainly diagrams with in-image text) should
 * resolve through this type instead of a single shared `src` string, so a
 * Chinese and an English page can never end up loading the same file for
 * content that isn't actually language-neutral.
 *
 * Used by decisionMediaBySlug in src/pages/[lang]/work/[slug].astro.
 */
export type LocalizedImageSource = Record<Locale, string>;

/**
 * Builds a LocalizedImageSource from this project's naming convention —
 * `<name>.<ext>` for zh, `<name>-EN.<ext>` for en — with an optional
 * explicit override for the English path.
 *
 * This is a convenience default, never the only way to set a path: pass
 * `enSrc` (or write `{ zh, en }` directly at the call site) whenever a real
 * English asset doesn't follow the `-EN` suffix convention.
 */
export function localizedSrc(zhSrc: string, enSrc?: string): LocalizedImageSource {
  return {
    zh: zhSrc,
    en: enSrc ?? zhSrc.replace(/(\.[a-zA-Z0-9]+)$/, "-EN$1"),
  };
}

/** Resolves a LocalizedImageSource to the path for one locale. Returns undefined if `source` is undefined (no asset yet). */
export function resolveLocalizedSrc(
  source: LocalizedImageSource | undefined,
  locale: Locale
): string | undefined {
  const path = source?.[locale];
  return path ? withBase(path) : undefined;
}
