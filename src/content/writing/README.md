# Writing: how to add an article

Each article is one Markdown file per language. The page template adds the Selected Work look automatically, so an article needs no CSS of its own.

```
src/content/writing/zh/<slug>.md
src/content/writing/en/<slug>.md
public/images/writing/<slug>/*.webp
```

## Frontmatter

```yaml
title: "…"
description: "…"          # list card + meta description
date: "2026-11-19"
cover: "/images/writing/<slug>/<file>.webp"   # list card image
relatedWork: "shunfeng"   # optional: Selected Work slug, shown as a card at the end
figuresNote: "…"          # optional: a note under the title (EN uses it when figures are in Chinese)
```

## What the template does for you

- **Sections**: each `## heading` becomes a section like a case-study section. It gets a numbered kicker (01, 02…), alternating paper and subtle backgrounds, and an entry in the "On this page" nav. The nav label is the text before "：" or ":" when the heading has one (「解法一：…」 shows as 「解法一」). Text before the first `##` is the intro.
- **Images**: an image on its own line (`![caption](/images/writing/<slug>/x.webp)`) becomes a framed figure. Clicking it zooms, using the same PhotoSwipe lightbox as Selected Work. The alt text is shown as the caption under the image, so write the alt as a caption. Width and height are read from the file.
- **GIFs**: a line `::giphy[<GIPHY id>|<caption>]` embeds that GIF with GIPHY's own player, plus the caption and a "via GIPHY" credit. Don't copy GIF files into the repo.
- **Unlisted**: `unlisted: true` in the frontmatter builds the page but keeps it out of the Writing list (good for experiments).
- **Headings** use the full reading width, fill each line before wrapping, and break only at punctuation or spaces, never mid-word. Very long runs with no punctuation still break anywhere on a phone, so in Chinese headings keep each run between punctuation marks to about 10 characters (break it up with ，、：).
- **Lists**: `-` and `1.` lists show mustard markers (Markdown alone loses them because of the global reset).
- **Quotes**: `>` blocks get the same mustard left rule as case-study quotes. Use them for copy-paste templates.
- **Tables** scroll sideways on phones.
- **Links**: root-relative links and image paths (`/zh/work/shunfeng/`, `/images/…`) get the `/granthsiao` base automatically.

## Content rules

- Export figures as WebP, about 1600px wide, in Noto Sans TC.
- Leave platform-only material out of the web version, such as Threads/X short versions and internal file paths.

## Share image (og:image)

Every article gets its own 1200×630 share image for Threads, X, LINE and Facebook previews.
After adding or retitling an article, run `node scripts/og-writing.cjs` and commit the PNGs in
`public/og/writing/<lang>/<slug>.png`. The image shows the title on the left and the `cover`
figure on the right (set `ogFigure` in frontmatter to use a different figure). Pages without a
PNG fall back to the site-wide image.
