import type { Locale } from "../i18n/config";
import { home as homeZh } from "./zh/home";
import { home as homeEn } from "./en/home";
import { about as aboutZh } from "./zh/about";
import { about as aboutEn } from "./en/about";
import { contact as contactZh } from "./zh/contact";
import { contact as contactEn } from "./en/contact";
import { profile as profileZh, footer as footerZh, siteMeta as siteMetaZh } from "./zh/site";
import { profile as profileEn, footer as footerEn, siteMeta as siteMetaEn } from "./en/site";
import { workBySlug as workZh, workOrder } from "./zh/work";
import { workBySlug as workEn } from "./en/work";

export { workOrder };

export function getHome(locale: Locale) {
  return locale === "zh" ? homeZh : homeEn;
}

export function getAbout(locale: Locale) {
  return locale === "zh" ? aboutZh : aboutEn;
}

export function getContact(locale: Locale) {
  return locale === "zh" ? contactZh : contactEn;
}

export function getProfile(locale: Locale) {
  return locale === "zh" ? profileZh : profileEn;
}

export function getFooter(locale: Locale) {
  return locale === "zh" ? footerZh : footerEn;
}

export function getSiteMeta(locale: Locale) {
  return locale === "zh" ? siteMetaZh : siteMetaEn;
}

export function getWork(locale: Locale, slug: string) {
  const table = locale === "zh" ? workZh : workEn;
  return table[slug];
}

export function getWorkSlugs(locale: Locale) {
  const table = locale === "zh" ? workZh : workEn;
  return Object.keys(table);
}

export function getAllWork(locale: Locale) {
  const table = locale === "zh" ? workZh : workEn;
  return workOrder.flatMap((slug) => (table[slug] ? [table[slug]] : []));
}
