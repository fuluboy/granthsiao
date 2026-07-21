# 圖片素材規格表

本文件根據第二輪版型重構後的實際 CSS 容器寬度、斷點與 `MediaPlaceholder` variant 系統計算得出，作為正式圖片素材產出與置換的依據。

如果你只是要換圖，直接看「三、如何替換」一節即可，不需要每個欄位都讀完。

---

## 一、品牌素材（已是正式檔案，非 Placeholder）

以下檔案已放在 `public/brand/`，來自 `source/`，**不需要替換**，除非品牌視覺調整。

| 檔案 | 用途 | 尺寸 | 備註 |
| --- | --- | --- | --- |
| `logo.png` | Header／Footer Logo | 61×75 | 已含 alt="Grant Hsiao" |
| `bg-dot.png` | 首頁與 Contact CTA 區背景網點 | 18×18（repeat tile） | 以 `background-repeat` 平鋪，不可拉伸單張 |
| `vinyl.png` | 黑膠本體（旋轉層） | 1093×1093 | 唱片標籤區為佔位色，會被 `vinyl-tag.png` 完全覆蓋 |
| `vinyl-tag.png` | 黑膠中心標籤（固定不轉） | 576×568 | 寬度＝黑膠直徑的 52% |
| `thunder.png` | 閃電裝飾 | 452×631 | 透明背景 PNG |
| `icon-lang_switch.svg` | 語系切換 icon | 向量 | 已用 CSS filter 套用品牌色 |

---

## 二、Placeholder Variant 系統

`MediaPlaceholder`／`ResponsiveMedia` 現在依 `variant` 決定預設比例、裁切方式與視覺風格，未來也用同一組 variant 分類正式素材。

| Variant | 預設比例 | cover／contain | 視覺風格 | 用途 |
| --- | --- | --- | --- | --- |
| `hero` | 16:9 | cover | 斜線紋理、虛線框（照片感） | Case Hero、Selected Work 封面 |
| `ui` | 4:3 | contain | 淺灰網格、實線框、含安全區虛線 | 介面截圖 |
| `diagram` | 16:9 | contain | 淺灰網格、實線框、含安全區虛線 | 流程圖、資料圖 |
| `before-after` | 16:10 | contain | 同 ui／diagram | Before／After 對照 |
| `detail` | 1:1 | contain | 斜線紋理、虛線框（照片感） | 小型局部／情境圖 |
| `process` | 21:9 | contain | 同 ui／diagram | 寬版流程／時間軸 |

畫面上只顯示「素材名稱、Variant 類型、比例」；`caseName`／`purpose`／`format` 只保留在 `title` 屬性（滑鼠移入的原生 tooltip），完整用途仍在本文件中維護。

---

## 三、如何替換 Placeholder 為正式圖片

1. 把正式圖片放進 `public/images/work/<case-slug>/`（例如 `public/images/work/house579/cover.webp`）。
2. 找到對應元件呼叫處：
   - 首頁封面卡在 `src/pages/[lang]/index.astro`（`SelectedWorkCard`）
   - Case Hero／Execution／Key Decision 圖片在 `src/pages/[lang]/work/[slug].astro`、`src/components/CaseHero.astro`、`src/components/KeyDecision.astro` 的呼叫處
   - Before／After 在 `src/components/BeforeAfter.astro`
3. 目前這些位置呼叫的是沒有 `src` 的 `ResponsiveMedia`／`MediaPlaceholder`。要換成正式圖片，改用 `ResponsiveMedia` 並帶入 `src`（與需要的話 `srcset`／`sizes`／`width`／`height`），例如：

   ```astro
   <ResponsiveMedia
     name="House579 — Case Cover"
     variant="hero"
     caseName="House579"
     purpose="精選作品封面圖"
     src="/images/work/house579/cover.webp"
     alt="House579 手機版刊登管理介面"
     width={1200}
     height={900}
   />
   ```

   只要有 `src`，`ResponsiveMedia` 會自動改為輸出真正的 `<img>`；沒有 `src` 時則自動落回灰階 Placeholder，所以可以逐張慢慢替換，不必一次全部到位。
4. Hero 圖（Case Hero、首頁黑膠素材）建議設定 `loading="eager"`；其餘首屏以外的圖片維持預設 `lazy`。
5. 替換後重新執行 `npm run build` 確認沒有版面跳動（Layout Shift）與型別錯誤。

---

## 四、待補圖片素材（Placeholder → 正式圖片）

### A. Selected Work 封面（首頁，3 張）

- **用途**：讓讀者在進入案例前，直覺理解該案例的產品類型
- **Variant**：`hero`
- **桌機最大 CSS 顯示寬度**：約 526px（首頁 `.container` 1200px 雙欄各半，扣除 gap／padding；此區塊本輪未調整）
- **平板／手機**：切為單欄，寬度隨容器縮放（平板約 500–650px；手機約 320–360px）
- **比例／裁切**：4:3、cover
- **object-position**：`center`（若畫面重心偏上可改 `top`）
- **安全區**：中央 80%，勿把標題文字烤進圖片四角
- **建議輸出**：1200×900px（2x）、WebP（備援 JPG）
- **2x／透明背景／Lightbox**：需要 2x／不需透明／不需 Lightbox
- **清單**：
  1. House579 — 房仲手機後台或刊登流程情境圖，alt 例：「House579 手機版刊登管理介面」
  2. Rakuya Data Product — 每日日報列表或案源情報卡片畫面，alt 例：「樂屋案源情報每日日報畫面」
  3. Design System — Figma Library／Token 面板情境截圖，alt 例：「Design System Figma 元件庫總覽」

### B. Case Hero（案例首頁主視覺，3 張）

- **頁面／區塊**：各案例頁最上方
- **Variant**：`hero`
- **桌機最大 CSS 顯示寬度**：約 1144px（`.case-wide` 上限 1240px，扣除左右 padding 各 48px）
- **平板**：全寬，隨容器縮放（約 700–900px）
- **手機**：全寬，約 320–360px，高度依 16:9 等比縮小
- **比例／裁切**：16:9、cover
- **object-position**：`center`
- **安全區**：中央 70% 寬度、60% 高度
- **建議輸出**：2300×1294px（2x）、WebP（備援 JPG）
- **2x／透明背景／Lightbox**：需要 2x／不需透明／不需 Lightbox（情境主視覺，非資訊圖）
- **清單**：
  1. House579 Case Hero — 房仲、刊登平台、行動裝置管理的代表畫面
  2. Rakuya Data Product Case Hero — 每日日報總覽或地圖／社區頁情境圖
  3. Design System Case Hero — Token／Figma Library／前端元件庫並列總覽視覺

### C. Key Decision 對應圖片（每案例 3 張，共 9 張）

每個 Key Decision 現在都有自己專屬的媒體位置，使用 `.case-split` 雙欄（桌機／平板≥1024px 圖文並排，交錯左右；<1024px 改單欄、文字先於圖片）。

- **桌機最大 CSS 顯示寬度**：媒體欄約 633px（`.case-split__media` 佔 12 欄中的 7 欄，扣除 gap 與 `.case-wide` padding）
- **平板（768–1023px）**：改單欄全寬，隨容器縮放
- **手機**：單欄全寬，文字在上、圖片在下
- **安全區**：`ui`／`diagram`／`process` 為 contain，全圖皆重要，不可裁切關鍵資訊

| 案例 | Decision | Variant | 比例 | 建議內容 |
| --- | --- | --- | --- | --- |
| House579 | 01 先降低啟用阻力 | `diagram` | 16:9 | 註冊、身分認證與首次刊登的資料流程示意 |
| House579 | 02 依風險建立資料品質優先順序 | `ui` | 4:3 | 依風險排序的欄位品質檢查介面 |
| House579 | 03 手機資訊密度改版 | `before-after` | 16:10 | 見下方 D 節（Before／After） |
| Rakuya | 01 完整工作旅程與 MVP 範圍 | `process` | 21:9 | 房仲完整工作旅程，以及 MVP 範圍選擇示意 |
| Rakuya | 02 社區資料底層 | `diagram` | 16:9 | 社區與建物基礎資料的整合流程 |
| Rakuya | 03 初次上架日報 | `ui` | 4:3 | 每日初次上架、降價與下架日報介面 |
| Design System | 01 Sprint 導入時間軸 | `process` | 21:9 | Token 盤點到首批元件交付的時間軸 |
| Design System | 02 元件決策流程 | `diagram` | 16:9 | 延伸、新增或保留特規的判斷流程 |
| Design System | 03 治理協作流程 | `ui` | 4:3 | 元件新增與治理的日常協作介面 |

建議輸出：`diagram`／`ui` 約 1270×715px（16:9，2x）或 1270×953px（4:3，2x）；`process` 約 1270×544px（21:9，2x）。格式 PNG／WebP（介面截圖需保持文字清晰）；流程圖若為向量內容可用 SVG。

### D. House579｜Mobile Admin Before / After

- **頁面／區塊**：House579 → Key Decision 03（媒體直接內嵌在該決策區塊內，非獨立章節）
- **Variant**：`before-after`
- **用途**：對比改版前後的手機後台資訊密度與物件管理效率
- **建議內容**：
  - Before：舊版手機後台，畫面約僅顯示 1.5 筆物件、留白多、無縮圖
  - After：新版手機後台，同畫面可顯示約 5 筆物件、含縮圖與固定操作區
- **桌機最大 CSS 顯示寬度**：每張約 556px（`.before-after` 於 `.case-wide` 內雙欄，扣除 gap）
- **平板**：雙欄，寬度隨容器縮小
- **手機**：改為單欄堆疊，每張全寬，「改版前／改版後」標籤在圖片上方
- **比例／裁切**：16:10、contain
- **建議輸出**：1112×695px（2x）、PNG（或無損 WebP）
- **Lightbox**：建議提供
- **alt text**：「House579 手機後台改版前：畫面僅顯示約 1.5 筆物件」／「改版後：同畫面可瀏覽約 5 筆物件」

### E. Execution Diagram（每案例 1 張，共 3 張）

- **頁面／區塊**：各案例 Execution 區塊，`.case-split` 雙欄（文字約 5 欄／圖片約 7 欄）
- **Variant**：`diagram`
- **桌機最大 CSS 顯示寬度**：約 633px
- **平板／手機**：改單欄，全寬
- **比例／裁切**：16:9、contain
- **建議輸出**：1270×715px（2x）、PNG／WebP
- **清單**：
  1. House579 — 問題重現到工程交付的驗證流程圖
  2. Rakuya Data Product — Redash 漏斗分析示意，或案源判斷規則圖
  3. Design System — 元件決策流程或治理關係圖
