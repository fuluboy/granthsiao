// Generates a 1200x630 share image (og:image / twitter:image) for every Writing article.
// Usage: node scripts/og-writing.cjs   (needs Playwright + network for Google Fonts)
// Output: public/og/writing/<lang>/<slug>.png — picked up automatically by the article page.
// Image on the right = frontmatter `ogFigure` if set, otherwise `cover`.
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "src/content/writing");
const outDir = path.join(root, "public/og/writing");

function frontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  const fm = {};
  if (!m) return fm;
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1");
  }
  return fm;
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const dataUri = (p) => {
  const ext = path.extname(p).slice(1).replace("jpg", "jpeg");
  return `data:image/${ext};base64,${fs.readFileSync(p).toString("base64")}`;
};

function html({ lang, title, figure }) {
  const kicker = lang === "zh" ? "文章 · WRITING" : "WRITING";
  const font = lang === "zh" ? "'Noto Sans TC'" : "'Manrope', 'Noto Sans TC'";
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&family=Noto+Sans+TC:wght@500;700;900&display=block" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;background:#f7f3ea url(${dataUri(path.join(root, "public/brand/bg-dot.png"))});
 font-family:${font},sans-serif;color:#1b1b1c;position:relative;background-size:18px}
body::before{content:"";position:absolute;inset:0;background:rgba(247,243,234,.72)}
.text{position:absolute;left:80px;top:72px;width:560px;height:486px;display:flex;flex-direction:column}
.kicker{font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:800;font-size:18px;letter-spacing:.14em;color:#7a5d19}
.rule{width:56px;height:4px;background:#c9a227;margin:22px 0 28px}
h1{font-weight:900;font-size:${lang === "zh" ? 54 : 50}px;line-height:1.28;word-break:keep-all;overflow-wrap:anywhere}
.by{margin-top:auto;display:flex;align-items:center;gap:14px;font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:600;font-size:20px;color:#4a4a4c}
.by img{width:40px;height:40px;border-radius:50%}
.fig{position:absolute;left:690px;top:50%;transform:translateY(-50%);width:450px;max-height:530px;background:#fffdf8;border:1px solid rgba(27,27,28,.12);border-radius:16px;overflow:hidden;padding:16px}
.fig img{display:block;width:100%;height:auto}
</style></head><body>
<div class="text"><div class="kicker">${kicker}</div><div class="rule"></div><h1>${esc(title)}</h1>
<div class="by"><img src="${dataUri(path.join(root, "public/brand/logo.png"))}">Grant Hsiao</div></div>
<div class="fig"><img src="${dataUri(figure)}"></div>
</body></html>`;
}

(async () => {
  const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined;
  const browser = await chromium.launch(proxy ? { proxy } : {});
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, ignoreHTTPSErrors: true });
  for (const lang of fs.readdirSync(contentDir).filter((d) => fs.statSync(path.join(contentDir, d)).isDirectory())) {
    for (const file of fs.readdirSync(path.join(contentDir, lang)).filter((f) => f.endsWith(".md"))) {
      const fm = frontmatter(fs.readFileSync(path.join(contentDir, lang, file), "utf8"));
      const fig = fm.ogFigure || fm.cover;
      if (!fm.title || !fig) continue;
      await page.setContent(html({ lang, title: fm.title, figure: path.join(root, "public", fig) }), { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(800);
      const out = path.join(outDir, lang, file.replace(/\.md$/, ".png"));
      fs.mkdirSync(path.dirname(out), { recursive: true });
      await page.screenshot({ path: out });
      console.log("wrote", path.relative(root, out));
    }
  }
  await browser.close();
})();
