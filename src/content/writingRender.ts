import sharp from "sharp";
import { withBase } from "../i18n/config";

/**
 * Turns an article's compiled Markdown HTML into the blocks the article page
 * renders, so every article gets the Selected Work treatment with no
 * per-article styling:
 *   - each `## heading` starts its own section (numbered kicker + heading,
 *     alternating background, listed in the "On this page" nav);
 *   - every image that sits alone in a paragraph becomes a click-to-zoom
 *     figure (same ResponsiveMedia + PhotoSwipe lightbox as Selected Work),
 *     with its alt text shown as the caption;
 *   - root-relative links and image paths get the deploy base.
 * Authoring rules live in src/content/writing/README.md.
 */

export type ArticleBlock =
  | { type: "html"; html: string }
  | { type: "image"; src: string; alt: string; width: number; height: number };

export interface ArticleSection {
  id: string;
  heading?: string;
  navLabel?: string;
  blocks: ArticleBlock[];
}

// Builds run from the repo root, so public/ files resolve relative to it.
const PUBLIC_DIR = "./public";
const IMAGE_PARAGRAPH = /<p>\s*<img\s+src="([^"]+)"\s+alt="([^"]*)"\s*\/?>\s*<\/p>/g;
const H2 = /<h2 id="([^"]*)">([\s\S]*?)<\/h2>/g;

const stripTags = (s: string) => s.replace(/<[^>]+>/g, "").trim();
const decode = (s: string) =>
  s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

function withBaseLinks(html: string): string {
  return html
    .replace(/(src|href)="\/(?!\/)/g, `$1="${withBase("/")}`)
    .replace(/<table>/g, '<div class="article-table"><table>')
    .replace(/<\/table>/g, "</table></div>");
}

async function toBlocks(html: string): Promise<ArticleBlock[]> {
  const blocks: ArticleBlock[] = [];
  let last = 0;
  for (const m of html.matchAll(IMAGE_PARAGRAPH)) {
    const before = html.slice(last, m.index);
    if (before.trim()) blocks.push({ type: "html", html: withBaseLinks(before) });
    const path = m[1];
    const meta = await sharp(`${PUBLIC_DIR}${path}`).metadata();
    blocks.push({
      type: "image",
      src: withBase(path),
      alt: decode(m[2]),
      width: meta.width ?? 1600,
      height: meta.height ?? 900,
    });
    last = (m.index ?? 0) + m[0].length;
  }
  const rest = html.slice(last);
  if (rest.trim()) blocks.push({ type: "html", html: withBaseLinks(rest) });
  return blocks;
}

/** Nav label = the part before "：" / ":" when a heading has one (e.g. "解法一"), else the whole heading. */
function navLabelFor(heading: string): string {
  const short = heading.split(/[：:]/)[0].trim();
  return short.length < heading.length ? short : heading;
}

export async function buildArticleSections(compiledHtml: string): Promise<ArticleSection[]> {
  const sections: ArticleSection[] = [];
  const matches = [...compiledHtml.matchAll(H2)];
  const intro = compiledHtml.slice(0, matches[0]?.index ?? compiledHtml.length);
  if (intro.trim()) sections.push({ id: "intro", blocks: await toBlocks(intro) });

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const start = (m.index ?? 0) + m[0].length;
    const end = matches[i + 1]?.index ?? compiledHtml.length;
    const heading = decode(stripTags(m[2]));
    sections.push({
      id: `section-${i + 1}`,
      heading,
      navLabel: navLabelFor(heading),
      blocks: await toBlocks(compiledHtml.slice(start, end)),
    });
  }
  return sections;
}
