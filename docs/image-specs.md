# 圖片素材規格表

本文件根據實際完成的版型、CSS 容器寬度與斷點計算得出，作為正式圖片素材產出與置換的依據。

如果你只是要換圖，直接看「如何替換」一節即可，不需要每個欄位都讀完。

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

## 二、待補圖片素材（Placeholder → 正式圖片）

以下 11 個位置目前顯示灰階 Placeholder，正式拍攝／截圖完成後依此規格輸出並替換。

### 1. Selected Work／House579 封面

- **頁面／區塊**：首頁 → Selected Work 第 1 張案例卡
- **所屬案例**：House579
- **用途**：讓讀者在進入案例前，直覺理解「這是一個房仲刊登平台」
- **建議內容**：House579 手機後台或刊登流程的情境畫面（可為修飾過的產品截圖或情境合成圖，避免直接使用含真實客戶資料的原始截圖）
- **桌機最大 CSS 顯示寬度**：約 526px（container 1200px，雙欄各占一半，扣除 gap／padding）
- **平板顯示方式**：切為單欄，寬度隨容器縮放（約 500–650px）
- **手機顯示方式**：單欄全寬，約 320–360px
- **容器 aspect-ratio**：4 / 3
- **cover 或 contain**：cover
- **是否允許裁切**：允許（cover），主體需置於安全區內
- **object-position 建議**：`center`（若畫面重心偏上，如手機介面截圖，改用 `top`）
- **重要內容安全區**：中央 80% 範圍，勿把標題文字烤進圖片四角
- **建議正式輸出尺寸**：1200×900px（2x）
- **是否需要 2x**：是
- **建議格式**：WebP（備援 JPG）
- **是否需要透明背景**：否
- **是否需要桌機／手機兩版本**：否，同一張圖以 `object-position` 因應即可
- **是否需要 Lightbox**：否
- **建議 alt text 方向**：描述畫面內容而非重複標題，例如「House579 手機版刊登管理介面」

### 2. Selected Work／Rakuya Data Product 封面

- **所屬案例**：Rakuya Data Product
- **用途**：傳達「每日案源情報」的資訊聚合感
- **建議內容**：每日日報列表或案源情報卡片畫面
- **桌機最大 CSS 顯示寬度**：約 526px
- **平板／手機顯示方式**：同上，單欄全寬
- **容器 aspect-ratio**：4 / 3
- **cover 或 contain**：cover
- **是否允許裁切**：允許
- **object-position 建議**：`top`（若截圖上半部資訊密度較高）
- **重要內容安全區**：中央 80%
- **建議正式輸出尺寸**：1200×900px（2x）
- **是否需要 2x**：是
- **建議格式**：WebP（備援 JPG）
- **是否需要透明背景**：否
- **是否需要桌機／手機兩版本**：否
- **是否需要 Lightbox**：否
- **建議 alt text 方向**：「樂屋案源情報每日日報畫面」一類的具體描述

### 3. Selected Work／Design System 封面

- **所屬案例**：Design System
- **用途**：傳達「跨產品共用元件庫」的系統感
- **建議內容**：Figma Library／Token 面板或元件總覽的情境截圖
- **規格**：與上兩者相同（4:3、cover、桌機 ~526px、WebP、2x）
- **建議 alt text 方向**：「Design System Figma 元件庫總覽」

### 4. House579 Case Hero

- **頁面／區塊**：`/work/house579` 案例首頁主視覺
- **用途**：案例頁最上方的第一印象畫面
- **建議內容**：能同時傳達「房仲」「刊登平台」「行動裝置管理」的代表畫面
- **桌機最大 CSS 顯示寬度**：約 1104px（container 1200px 全寬，扣除左右 padding）
- **平板顯示方式**：全寬，隨容器縮放（約 700–900px）
- **手機顯示方式**：全寬，約 320–360px，高度依 16:9 等比縮小
- **容器 aspect-ratio**：16 / 9
- **cover 或 contain**：cover
- **是否允許裁切**：允許
- **object-position 建議**：`center`
- **重要內容安全區**：中央 70% 寬度、60% 高度（避免主體貼近上下裁切邊）
- **建議正式輸出尺寸**：2200×1238px（2x）
- **是否需要 2x**：是
- **建議格式**：WebP（備援 JPG）
- **是否需要透明背景**：否
- **是否需要桌機／手機兩版本**：否
- **是否需要 Lightbox**：否（此圖為情境主視覺，非需細看的資訊圖）
- **建議 alt text 方向**：留空（`alt=""`）視為裝飾性視覺即可；若圖片本身承載資訊（如實際畫面截圖），改為具體描述

### 5. Rakuya Data Product Case Hero

- 規格同上（16:9、cover、桌機 ~1104px、2200×1238px、WebP、2x）
- **建議內容**：每日日報總覽畫面，或房仲於地圖／社區頁瀏覽案源的情境圖

### 6. Design System Case Hero

- 規格同上
- **建議內容**：Token／Figma Library／前端元件庫並列的總覽視覺

### 7–8. House579｜Mobile Admin Before / After

- **頁面／區塊**：`/work/house579` → Key Decisions（對應 Key Decision 3：手機資訊密度改版）
- **所屬案例**：House579
- **用途**：對比改版前後的手機後台資訊密度與物件管理效率
- **建議內容**：
  - Before：舊版手機後台，畫面約僅顯示 1.5 筆物件、留白多、無縮圖
  - After：新版手機後台，同畫面可顯示約 5 筆物件、含縮圖與固定操作區
- **桌機最大 CSS 顯示寬度**：每張約 536px（container 1200px 雙欄，扣除 gap／padding）
- **平板顯示方式**：雙欄，寬度隨容器縮小（約 320–400px／張）
- **手機顯示方式**：改為單欄堆疊，每張全寬
- **容器 aspect-ratio**：16 / 10
- **cover 或 contain**：contain（UI 截圖，不可裁切關鍵資訊）
- **是否允許裁切**：否
- **object-position 建議**：不適用（contain 模式置中顯示）
- **重要內容安全區**：全圖皆為重要資訊，四周預留 4–6% 留白即可，不需特別安全區
- **建議正式輸出尺寸**：1100×688px（2x，實際依手機截圖原生比例微調容器）
- **是否需要 2x**：是
- **建議格式**：PNG（介面截圖，文字需保持清晰銳利；亦可用無損 WebP）
- **是否需要透明背景**：否
- **是否需要桌機／手機兩版本**：否
- **是否需要 Lightbox**：建議提供（使用者可能想放大看清楚介面差異）
- **建議 alt text 方向**：「House579 手機後台改版前：畫面僅顯示約 1.5 筆物件」／「改版後：同畫面可瀏覽約 5 筆物件」

### 9. House579｜Execution Detail

- **頁面／區塊**：`/work/house579` → Execution
- **用途**：呈現驗證與交付的實際方法（例如 Clarity／GA4／抽樣檢查的資料流程示意）
- **建議內容**：問題重現 → 需求與驗收條件 → 前端／Python 可驗證版本 → 工程串接的流程圖；或匿名化的分析工具截圖
- **桌機最大 CSS 顯示寬度**：約 624px（此區塊使用 `container-narrow`，最大 720px 扣除 padding）
- **平板顯示方式**：隨容器縮小，約 500–600px
- **手機顯示方式**：全寬，約 320–360px
- **容器 aspect-ratio**：16 / 10
- **cover 或 contain**：contain
- **是否允許裁切**：否
- **object-position 建議**：不適用
- **重要內容安全區**：全圖
- **建議正式輸出尺寸**：1250×781px（2x）
- **是否需要 2x**：是
- **建議格式**：PNG／WebP（流程圖若為向量內容可考慮 SVG）
- **是否需要透明背景**：可選（若為獨立圖示型流程圖，透明背景更容易融入版面）
- **是否需要桌機／手機兩版本**：否
- **是否需要 Lightbox**：建議提供
- **建議 alt text 方向**：描述流程本身，例如「從問題重現到工程交付的驗證流程圖」

### 10. Rakuya Data Product｜Execution Detail

- 規格同上（16:10、contain、桌機 ~624px、1250×781px、建議 Lightbox）
- **建議內容**：Redash 漏斗分析示意，或「新案／重新上架／值得開發」的判斷規則圖

### 11. Design System｜Execution Detail

- 規格同上
- **建議內容**：三個問題判斷延伸／新增／特規的決策流程圖，或 Token／Figma Library／前端元件庫的治理關係圖

---

## 三、如何替換 Placeholder 為正式圖片

1. 把正式圖片放進 `public/images/work/<case-slug>/`（例如 `public/images/work/house579/cover.webp`）。
2. 找到對應元件呼叫處（多半在 `src/pages/[lang]/index.astro` 的 `SelectedWorkCard`、或 `src/pages/[lang]/work/[slug].astro` 內的 `ResponsiveMedia`／`BeforeAfter`）。
3. 目前這些位置呼叫的是 `MediaPlaceholder`（無 `src`）。要換成正式圖片，改用 `ResponsiveMedia` 並帶入 `src`（與需要的話 `srcset`／`sizes`／`width`／`height`），例如：

   ```astro
   <ResponsiveMedia
     name="House579 — Case Cover"
     caseName="House579"
     purpose="精選作品封面圖"
     ratio="4 / 3"
     display="cover"
     src="/images/work/house579/cover.webp"
     alt="House579 手機版刊登管理介面"
     width={1200}
     height={900}
   />
   ```

   只要有 `src`，`ResponsiveMedia` 會自動改為輸出真正的 `<img>`；沒有 `src` 時則自動落回灰階 Placeholder，所以可以逐張慢慢替換，不必一次全部到位。
4. Hero 圖（Case Hero、首頁黑膠素材）建議設定 `loading="eager"`；其餘首屏以外的圖片維持預設 `lazy`。
5. 替換後重新執行 `npm run build` 確認沒有版面跳動（Layout Shift）與型別錯誤。
