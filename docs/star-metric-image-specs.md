# Star Metric 圖片素材規格

Case slug：`star-metric`

素材根目錄：

`public/images/work/star-metric/`

目前 Case Study 先以 Placeholder 顯示，避免缺圖時出現 broken image。素材完成後再把圖片路徑接入 `src/pages/[lang]/work/[slug].astro`；首頁封面完成後，也會移除 `SelectedWorkCard.astro` 目前針對 Star Metric 的暫時 Placeholder 判斷。

## 必要素材

| 優先 | 檔名 | 路徑 | 尺寸 | 比例 | 用途 | 建議內容 |
| --- | --- | --- | --- | --- | --- | --- |
| P0 | `cover.jpg` | `public/images/work/star-metric/cover.jpg` | 1920×1440 | 4:3 | 首頁 Selected Work 封面 | 以 iOS 完成版 UI 為主，1–2 支手機即可；文字越少越好 |
| P0 | `hero.jpg` | `public/images/work/star-metric/hero.jpg` | 1920×1080 | 16:9 | Case Hero | 建議以 `ios-app-01.png` 的每日狀態畫面為主視覺，可搭配 1 張人格分析畫面 |
| P0 | `decision-01.jpg` | `public/images/work/star-metric/decision-01.jpg` | 1920×823 | 21:9 | Key Decision 1：核心 User Flow | Google/Apple 登入 → 題目 → 出生資料 → 確認 → 特質分析 → 每日狀態；保持節點少、字大 |
| P0 | `decision-02.jpg` | `public/images/work/star-metric/decision-02.jpg` | 1920×1080 | 16:9 | Key Decision 2：AI Data Pipeline | 27,648 combinations → Prompt A → Prompt B → Validation → JSON → Firebase |
| P0 | `decision-03.jpg` | `public/images/work/star-metric/decision-03.jpg` | 1920×1080 | 16:9 | Key Decision 3：品質優化 | 大量生成 → 重複語詞/句型 → Prompt 分流 → Validation → Selective rerun；避免貼大量程式碼 |
| P1 | `decision-04.jpg` | `public/images/work/star-metric/decision-04.jpg` | 1920×1080 | 16:9 | Key Decision 4：AI-assisted Build | Product/UX/Figma → Claude implementation → ChatGPT/Gemini validation → Front-end refinement → Release |
| P1 | `execution.jpg` | `public/images/work/star-metric/execution.jpg` | 1920×1080 | 16:9 | Build & Ship 證據 | Google Play 已上架畫面 + iOS submission/review 證據；不要把下載量當主視覺 |

## 英文版素材

若圖片內含大量中文標題／流程文字，請另外製作同尺寸英文版，以 `-EN` 結尾：

- `decision-01-EN.jpg`
- `decision-02-EN.jpg`
- `decision-03-EN.jpg`
- `decision-04-EN.jpg`
- `execution-EN.jpg`

`cover.jpg` 與 `hero.jpg` 如果主要內容是 App UI，本階段可先共用中文產品畫面，不必為了英文站額外重做。

## 已提供的 iOS 原始素材

目前提供的 Store screenshots 均為 `1242×2688`（直式），建議保留原檔作為合成來源，不直接塞進 16:9 / 4:3 容器：

- `ios-app-01.png`：每日狀態，優先作 Hero / Cover 素材
- `ios-app-02.png`：可作每日／月份狀態 supporting visual
- `ios-app-03.png`：社交／好友功能，非主故事
- `ios-app-04.png`：寵物功能，暫不放入主故事
- `ios-app-05.png`：人格分析／多系統整合，適合作 Data Pipeline 的產品端結果

如要一併存入 repo，可放：

`public/images/work/star-metric/source/ios-app-01.png` ～ `ios-app-05.png`

這些 `source/` 原始圖不直接由頁面引用。

## 排版原則

1. Case 是給主管與 HR 快速掃描，不把圖片做成需要放大才能理解的技術圖。
2. 每張圖只回答一個問題；主標題在 3–8 個字內，流程節點控制在 5–7 個。
3. 重要內容放在中央約 84% 安全區，避免 RWD 與卡片裁切影響辨識。
4. 流程圖以「決策與結果」為主，不列完整 Prompt、API 參數或程式碼。
5. Google Play 是正式 Shipping Evidence；iOS 圖應標示為 submission / product iteration，不暗示已正式上架。
