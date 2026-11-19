import type { MarkdownInstance } from "astro";
import type { Locale } from "../i18n/config";

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  cover?: string;
  relatedWork?: string;
  figuresNote?: string;
  /** Built and reachable by URL, but left out of the Writing list (e.g. a tone experiment). */
  unlisted?: boolean;
}

export interface Article {
  slug: string;
  locale: Locale;
  frontmatter: ArticleFrontmatter;
  module: MarkdownInstance<ArticleFrontmatter>;
}

const modules = import.meta.glob<MarkdownInstance<ArticleFrontmatter>>("./writing/*/*.md", { eager: true });

const articles: Article[] = Object.entries(modules).map(([path, module]) => {
  const [, locale, file] = path.match(/\.\/writing\/([^/]+)\/([^/]+)\.md$/) ?? [];
  return { slug: file, locale: locale as Locale, frontmatter: module.frontmatter, module };
});

/** Every article for one locale, including unlisted ones (used to build pages). */
export function getAllArticles(locale: Locale): Article[] {
  return articles.filter((a) => a.locale === locale);
}

/** Listed articles for one locale, newest first. */
export function getArticles(locale: Locale): Article[] {
  return articles
    .filter((a) => a.locale === locale && !a.frontmatter.unlisted)
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}

export function getArticle(locale: Locale, slug: string): Article | undefined {
  return articles.find((a) => a.locale === locale && a.slug === slug);
}

export function formatArticleDate(date: string, locale: Locale): string {
  const d = new Date(`${date}T00:00:00Z`);
  return locale === "zh"
    ? `${d.getUTCFullYear()} 年 ${d.getUTCMonth() + 1} 月 ${d.getUTCDate()} 日`
    : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}
