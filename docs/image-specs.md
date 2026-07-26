# 圖片素材規格表

本文件根據 Case Study 共用版型第四輪重構後的實際 CSS 容器寬度、斷點與 `MediaPlaceholder`／`ResponsiveMedia` variant 系統計算得出，並在第五輪圖片 import、第六輪比例稽核後更新為**與程式碼實際比例完全一致**的版本。

如果你只是要換圖，直接看「三、如何替換」一節即可，不需要每個欄位都讀完。

**Case Study 版型寬度（`src/styles/tokens.css` 的 `--case-*` 變數）：**

| 變數 | 數值 | 說明 |
| --- | --- | --- |
| `--case-sidebar-width` | 150px | 左側章節導航欄寬 |
| `--case-column-gap` | 40px | Sidebar 與 Main Column 間距 |
| `--case-main-width` | 930px | Main Column（Hero 媒體、Metrics、Key Decision 媒體、Execution 媒體、Impact）寬度上限 |
| `--case-reading-width` | 720px | Reading Column（正文、Key Decision 正文、Execution 文字、Reflection）寬度上限 |
| `--case-shell-width` | 1220px | 只用於 Sidebar 網格之外、需要獨立置中對齊的滿版元件（例如上／下一案例導覽列），**不是**桌機兩欄網格本身的寬度 |

桌機（≥1100px）兩欄網格（`.case-shell`）的實際寬度上限由 `calc(sidebar + gap + main)` 計算得出，即 150 + 40 + 930 = **1120px**，與上表的 `--case-shell-width` 各自獨立、不必相等。

斷點：桌機（Sidebar 顯示）≥1100px；平板 768–1099px（無 Sidebar，Main Column 隨視窗寬度縮放、上限 930px）；手機 ≤767px（單欄）。`aspect-ratio` 與 `display`（cover／contain）不隨斷點改變 —— 同一張圖在桌機／平板／手機使用同一個比例，只有容器寬度縮放，高度跟著等比例變化。

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

## 二、Placeholder Variant 系統與比例規則

`MediaPlaceholder`／`ResponsiveMedia` 依 `variant` 決定**預設**比例、裁切方式與視覺風格；`VARIANT_DEFAULTS` 這張表定義在 `src/components/MediaPlaceholder.astro` 並 export 出來，是 Placeholder 與正式圖片共用的唯一預設值來源。

| Variant | 預設比例 | cover／contain | 視覺風格 | 用途 |
| --- | --- | --- | --- | --- |
| `hero` | 16:9 | cover | 斜線紋理、虛線框（照片感） | Case Hero、Selected Work 封面 |
| `ui` | 4:3 | contain | 淺灰網格、實線框、含安全區虛線 | 介面截圖 |
| `diagram` | 16:9 | contain | 淺灰網格、實線框、含安全區虛線 | 流程圖、資料圖 |
| `before-after` | 16:10 | contain | 同 ui／diagram | Before／After 對照 |
| `detail` | 1:1 | contain | 斜線紋理、虛線框（照片感） | 小型局部／情境圖 |
| `process` | 21:9 | contain | 同 ui／diagram | 寬版流程／時間軸 |

**重要規則（第六輪稽核後新增）：** 上表只是 `variant` 沒有明確指定 `ratio`／`display` 時的 fallback。**每一個正式素材呼叫點都必須明確帶入 `ratio` 與 `display`**（見 `src/pages/[lang]/work/[slug].astro` 的 `decisionMediaBySlug`／`heroImageBySlug`／`executionImageBySlug`），不可只靠 `variant` 推測 —— 曾經發生過 Rakuya `decision-01.jpg`（實際 1920×823，21:9）因為呼叫端沒有明確帶 `ratio`，被 `ResponsiveMedia` 的正式圖片分支錯誤 fallback 成寫死的 `4 / 3` + `cover`，導致 21:9 的圖被裁成 4:3。根因是 `ResponsiveMedia.astro` 曾經有兩套互相獨立的預設值解析邏輯（Placeholder 分支正確查 `VARIANT_DEFAULTS`，正式圖片分支卻寫死 `ratio ?? "4 / 3"`）；現在兩個分支已改為共用同一張 `VARIANT_DEFAULTS` 表，且開發環境下若 `src` 存在但沒有明確 `ratio`，`ResponsiveMedia` 會印出 `console.warn` 提醒。

畫面上只顯示「素材名稱、Variant 類型、比例」；`caseName`／`purpose`／`format` 只保留在 `title` 屬性（滑鼠移入的原生 tooltip），完整用途仍在本文件中維護。

---

## 三、如何替換／新增正式圖片

1. 把正式圖片放進 `public/images/work/<case-slug>/`（例如 `public/images/work/house579/cover.jpg`）。
2. 找到對應的資料項目：
   - 首頁封面卡：`src/components/SelectedWorkCard.astro`（`src={`/images/work/${card.slug}/cover.jpg`}`，逐案例自動對應 slug）
   - Case Hero：`src/pages/[lang]/work/[slug].astro` 的 `heroImageBySlug`
   - Key Decision／Before-After：`decisionMediaBySlug`
   - Execution：`executionImageBySlug`
3. 每個項目除了 `src`／`width`／`height`，**務必同時填寫 `ratio` 與 `display`**（型別為 `MediaRatio`／`MediaDisplay`，定義於 `src/components/MediaPlaceholder.astro`），不要只改 `src` 就以為完成。`ratio` 應根據圖片實際 `width`／`height` 換算，不可用猜測或沿用其他 variant 的預設值。
4. 只要有 `src`，`ResponsiveMedia` 會自動改為輸出真正的 `<img>`；沒有 `src` 時則自動落回 Placeholder（用**同一組** `ratio`／`display`，畫面高度不會因為換圖而跳動）。
5. Hero 圖建議設定 `loading="eager"`；其餘首屏以外的圖片維持預設 `lazy`。
6. 替換後重新執行 `npm run build`，並在瀏覽器實際確認 `img.naturalWidth`／`naturalHeight` 與容器 `aspect-ratio`／`object-fit` 是否符合預期（不要只看程式碼或 Build 結果）。

---

## 四、正式圖片稽核表（實際讀取檔案 metadata 得出）

以下 19 張圖片皆為正式素材（非 Placeholder），路徑、原始尺寸皆為實際讀取結果；「目前」欄位為第六輪修正後、瀏覽器實測的渲染結果。

### A. 首頁 Selected Work 封面（3 張）

| 檔案 | Route | Component | 原始尺寸 | 原始比例 | 目前 ratio | 目前 display | 是否裁切 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `house579/cover.jpg` | `/zh/`、`/en/` | `SelectedWorkCard.astro` | 1920×1440 | 4:3 | 4 / 3 | cover | 是（設計預期，重要內容需在安全區） |
| `rakuya-data-product/cover.jpg` | 同上 | 同上 | 1920×1440 | 4:3 | 4 / 3 | cover | 是（同上） |
| `design-system/cover.jpg` | 同上 | 同上 | 1920×1440 | 4:3 | 4 / 3 | cover | 是（同上） |

原始比例本身就是 4:3，`cover` 只在極少數視窗寬高比下裁切邊緣，非內容關鍵區。

### B. Case Hero（3 張）

| 檔案 | Route | Component | 原始尺寸 | 原始比例 | 目前 ratio | 目前 display | 是否裁切 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `house579/hero.jpg` | `/[lang]/work/house579/` | `CaseHero.astro` | 1920×1080 | 16:9 | 16 / 9 | cover | 否（原始比例＝容器比例，cover 與 contain 結果相同） |
| `rakuya-data-product/hero.jpg` | `/[lang]/work/rakuya-data-product/` | 同上 | 1920×1080 | 16:9 | 16 / 9 | cover | 否 |
| `design-system/hero.jpg` | `/[lang]/work/design-system/` | 同上 | 1920×1080 | 16:9 | 16 / 9 | cover | 否 |

> 三張 hero 來源檔目前 MD5 相同（同一張示意圖），使用者已確認這是暫時測試佔位、之後會替換正式素材，非本次稽核範圍的錯誤。

### C. Key Decision 圖片（9 張，含 Before/After）

| 案例 | Decision | 檔案 | 原始尺寸 | 原始比例 | Variant | 目前 ratio | 目前 display | 是否裁切 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| House579 | 01 | `decision-01.jpg` | 1920×1080 | 16:9 | `diagram` | 16 / 9 | contain | 否 |
| House579 | 02 | `decision-02.jpg` | 1920×823 | 21:9 | `process` | 21 / 9 | contain | 否 |
| House579 | 03 | `decision-03.jpg`（原 `decision-02.jpg`，因新增 Key Decision 2 而順延重新命名） | 1920×1440 | 4:3 | `ui` | 4 / 3 | contain | 否 |
| House579 | 04（Before） | `decision-04-before.jpg`（原 `decision-03-before.jpg`） | 1920×1200 | 16:10 | `before-after` | 16 / 10 | contain | 否 |
| House579 | 04（After） | `decision-04-after.jpg`（原 `decision-03-after.jpg`） | 1920×1200 | 16:10 | `before-after` | 16 / 10 | contain | 否 |
| Rakuya | 01 | `decision-01.jpg` | 1920×823 | 21:9 | `process` | 21 / 9 | contain | **修正前會被裁切，現已修正** |
| Rakuya | 02 | `decision-02.jpg` | 1920×1080 | 16:9 | `diagram` | 16 / 9 | contain | 否 |
| Rakuya | 03 | `decision-03.jpg` | 1920×1440 | 4:3 | `ui` | 4 / 3 | contain | 否 |
| Design System | 01 | `decision-01.jpg` | 1920×823 | 21:9 | `process` | 21 / 9 | contain | 修正前會被裁切，現已修正 |
| Design System | 02 | `decision-02.jpg` | 1920×1080 | 16:9 | `diagram` | 16 / 9 | contain | 否 |
| Design System | 03 | `decision-03.jpg` | 1920×1440 | 4:3 | `ui` | 4 / 3 | contain | 否 |

Before／After 兩張圖片（House579 Decision 04）使用相同 `ratio`（16 / 10）與 `display`（contain），瀏覽器實測兩側渲染尺寸一致（369×231，桌機 1344px 視窗下）。

#### 中英文圖片切換（`-EN` 命名慣例）

每個案例上表列出的 Key Decision 圖片，現在都是 `LocalizedImageSource`（`{ zh, en }`，定義於 `src/content/media.ts`），由 `decisionMediaBySlug`（`src/pages/[lang]/work/[slug].astro`）用 `localizedSrc()` 建立，並在渲染時依 `lang` 用 `resolveLocalizedSrc()` 解析成單一路徑——正文縮圖與 PhotoSwipe 大圖都吃同一個解析結果，兩者不會用到兩套不同的圖檔邏輯。命名慣例：中文沿用原檔名，英文在副檔名前加上 `-EN`（例如 `decision-02.jpg` → `decision-02-EN.jpg`）。

| 檔案 | 狀態 |
| --- | --- |
| `house579/decision-01-EN.jpg` | 正式英文圖片（非 `-EN` 慣例的暫存複製，內容與中文版不同） |
| `house579/decision-02-EN.jpg` | **暫存複製**（`decision-02.jpg` 的原檔複製），等正式英文圖完成後直接覆蓋同路徑，不需改程式 |
| `house579/decision-03-EN.jpg` | 暫存複製，同上 |
| `house579/decision-04-before-EN.jpg` / `decision-04-after-EN.jpg` | 暫存複製，同上 |
| `rakuya-data-product/decision-0{1,2,3}-EN.jpg` | 暫存複製，同上 |
| `design-system/decision-0{1,2,3}-EN.jpg` | 暫存複製，同上 |

Execution 圖片（見 D 節）也含有圖片內文字，已套用同一套機制（`executionImageBySlug` 改用 `LocalizedCaseImage`／`localizedSrc()`／`resolveLocalizedSrc()`）：

| 檔案 | 狀態 |
| --- | --- |
| `house579/execution-EN.jpg` | 暫存複製（非本次任務建立，早已存在，未覆蓋） |
| `rakuya-data-product/execution-EN.jpg` | 暫存複製 |
| `design-system/execution-EN.jpg` | 暫存複製 |

Hero（`hero.jpg`）、首頁封面（`cover.jpg`）目前維持單一路徑，未套用雙語機制——這兩者不是「圖片內含文字」的流程圖，且不在正式驗收範圍內；未來若需要雙語版本，`heroImageBySlug` 的 `CaseImage` 型別可以用同樣方式改成 `LocalizedImageSource`。

### D. Execution 圖片（3 張）

| 案例 | 檔案 | 原始尺寸 | 原始比例 | 目前 ratio | 目前 display | 是否裁切 |
| --- | --- | --- | --- | --- | --- | --- |
| House579 | `execution.jpg` | 1920×1080 | 16:9 | 16 / 9 | contain | 修正前會被裁切成 4:3，現已修正 |
| Rakuya | `execution.jpg` | 1920×1080 | 16:9 | 16 / 9 | contain | 同上 |
| Design System | `execution.jpg` | 1920×1080 | 16:9 | 16 / 9 | contain | 同上 |

### 比例／裁切方式彙總

| 分類 | 使用 4:3 | 使用 16:9 | 使用 16:10 | 使用 21:9 |
| --- | --- | --- | --- | --- |
| 圖片數量 | 4（3 封面 + 3 個 `ui` decision，扣除重複計算） | 9（3 hero + 3 diagram decision + 3 execution） | 2（House579 before/after） | 2（Rakuya／Design System 的 process decision） |

| 分類 | 使用 cover | 使用 contain |
| --- | --- | --- |
| 圖片數量 | 6（3 封面 + 3 hero） | 13（其餘全部：diagram／ui／process／before-after／execution） |

**目前沒有任何正式圖片缺少明確 `ratio`／`display`**——`decisionMediaBySlug`、`heroImageBySlug`、`executionImageBySlug`、`SelectedWorkCard.astro` 的呼叫點都已逐一明確帶入。

---

## 五、統一製作尺寸建議

| 比例 | 建議尺寸 |
| --- | --- |
| 4:3 | 1920 × 1440 |
| 16:9 | 1920 × 1080 |
| 16:10 | 1920 × 1200 |
| 21:9 | 1920 × 823 |

需要放大閱讀細節時才提高到約 2400px 寬等比例放大。以上尺寸與目前已 import 的正式素材實際尺寸完全一致。
