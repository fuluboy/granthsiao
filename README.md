# Grant Hsiao Portfolio

雙語（中／英）作品集網站。Astro 4（靜態輸出）＋純 CSS Design Tokens，無 UI framework 依賴。

## 指令

```bash
npm install
npm run dev      # 開發伺服器 http://localhost:4321
npm run build    # astro check + astro build，輸出到 dist/
npm run preview  # 預覽 build 後的結果
npm run check    # 只跑型別檢查
```

## 路由

- `/` — 依瀏覽器語言重新導向 `/zh/` 或 `/en/`（無 JS 時預設 `/zh/`）
- `/zh/`、`/en/` — 首頁
- `/zh/about/`、`/en/about/`
- `/zh/contact/`、`/en/contact/`
- `/zh/work/house579/`、`/zh/work/rakuya-data-product/`、`/zh/work/design-system/`（`/en/...` 同樣路徑）

中英文頁面共用同一份 Astro 模板（`src/pages/[lang]/...`，動態路由），不是兩套獨立頁面。

## 目錄結構

```
src/
  content/            內容資料（與畫面元件完全分離）
    types.ts           所有內容的 TypeScript 型別
    siteConfig.ts       非語系相關設定（聯絡信箱、履歷路徑，目前是佔位值）
    zh/ , en/           各語系內容，欄位結構一一對應
      site.ts           品牌資訊、Footer 文案
      home.ts           首頁文案（Hero、Selected Work 卡片、About 摘要、Contact CTA）
      about.ts          About 頁
      contact.ts        Contact 頁
      work/
        house579.ts
        rakuya.ts
        design-system.ts
        index.ts        依 slug 匯出對照表
    index.ts            依 locale 取內容的公用函式（getHome/getAbout/getWork...）

  i18n/config.ts        語系清單、UI 微文案、路徑轉換（切換語系用）

  styles/
    tokens.css          顏色／字體／間距／動畫參數（唯一調整處）
    global.css          Reset、按鈕、tag、focus 樣式等共用樣式

  layouts/BaseLayout.astro   <html lang>、SEO meta、hreflang/canonical/OG、Header+Footer

  components/           可重用元件（VinylHero、SelectedWorkCard、CaseHero、
                        CaseSection、KeyDecision、SignalGrid、ImpactGrid、
                        ReflectionSection、NextCaseNavigation、SectionNavigation、
                        MediaPlaceholder、ResponsiveMedia、BeforeAfter、
                        Header、Footer、LanguageSwitch、Quote、CaseMetrics）

  pages/
    index.astro                 根目錄語系導向
    [lang]/index.astro          首頁
    [lang]/about.astro
    [lang]/contact.astro
    [lang]/work/[slug].astro    三個案例共用同一個模板
    404.astro

public/brand/           Logo、黑膠、閃電、背景網點、語系切換 icon（已從 source/ 複製）
docs/image-specs.md     正式圖片素材規格表（尺寸、比例、cover/contain、alt text 方向等）
```

## 內容如何維護

- 所有文案都來自 `Source/Portfolio_Docs_CH.docx` 與 `Source/Portfolio_Docs_EN.docx`，已整理進 `src/content/zh` 與 `src/content/en`，欄位結構完全對應，方便日後同步調整。
- 若要修改文案，直接改對應語系的 `.ts` 檔案，不要改元件檔案裡的文字。
- 新增圖片說明、caption、alt text 時，同樣在內容檔案裡加欄位，而不是寫死在元件裡。

## 圖片 Placeholder 如何替換成正式圖片

詳見 [`docs/image-specs.md`](./docs/image-specs.md)。簡要流程：

1. 圖片放到 `public/images/work/<case-slug>/`。
2. 找到呼叫 `MediaPlaceholder` 的地方，改成 `ResponsiveMedia` 並加上 `src`（可選 `srcset`/`sizes`/`width`/`height`）。
3. 沒有 `src` 時 `ResponsiveMedia` 會自動顯示灰階 Placeholder，所以可以一張一張慢慢換，不必一次到位。

## 履歷與聯絡資訊

`src/content/siteConfig.ts` 的 `resumeHref` 依語系分開設定：

```ts
resumeHref: {
  zh: "/Grant-resume-TC-2026.pdf",
  en: "/Grant-resume-EN-2026.pdf",
},
```

對應的 PDF 放在 `public/Grant-resume-TC-2026.pdf`／`public/Grant-resume-EN-2026.pdf`（Astro 的 `public/` 內容會直接對應到網站根目錄，所以連結不要加 `public/` 前綴）。中文介面（含 About／Contact／Footer／黑膠 Hero）會下載中文版履歷，英文介面下載英文版，切換語系時會自動對應正確版本。

`contactEmail` 已設定為真實聯絡信箱，Contact 頁與 Footer 的「聯絡我」按鈕都會使用同一個值。

## 尚待補充（非本階段範圍）

- 三個案例的正式圖片／截圖尚未加入，目前全部顯示灰階 Placeholder，規格見 `docs/image-specs.md`。
