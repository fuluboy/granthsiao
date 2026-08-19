import type { CaseStudyContent } from "../../types";

export const starMetric: CaseStudyContent = {
  slug: "star-metric",
  meta: {
    title: "Star Metric｜從 AI 實驗到上架產品",
    description:
      "從產品假設、個人化資料架構與 UI/UX，到 AI 輔助開發與 Android 上架，完整走過一輪 0→1 產品實驗。",
  },
  caseNumber: "04",
  kicker: "CASE STUDY 04 · STAR METRIC",
  title: "從 AI 實驗到上架產品",
  lead:
    "從產品假設、個人化資料架構與 UI/UX，一路做到 AI 輔助開發與 Android 正式上架。產品發布後，我再根據真實使用與平台審核結果，重新檢視獲客方式與產品定位。",
  heroImageName: "Star Metric Case Hero",
  metrics: [
    { value: "27,648", label: "預先生成的人格內容組合" },
    { value: "Android", label: "Google Play 正式上架" },
    { value: "iOS", label: "完成 App Store 送審" },
  ],
  facts: [
    { label: "角色", value: "Independent Product Builder／Product & Design Lead" },
    { label: "期間", value: "2024–2026" },
    { label: "階段", value: "產品實驗 · 0→1 · 上架 · 驗證" },
    {
      label: "責任",
      value: "產品策略、UI/UX、AI 資料流程、前端調整、AI 輔助開發與上架",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "從一個產品假設開始",
    paragraphs: [
      "我本身並不特別相信命理，但身邊很多人長期接觸星座、人格測驗與每日運勢。生成式 AI 開始具備整合大量資訊的能力後，我想驗證：它能否把不同系統的訊號整理成更個人化、可規模化的內容。",
      "產品最早的情感起點來自母親。她以前偶爾會因為星座運勢或農民曆提醒我「今天多注意一點」。她離開後，我開始想，能不能做一個每天提供類似提醒與陪伴的產品。",
    ],
    coreChallengeLabel: "核心假設",
    coreChallengeQuote:
      "AI 能否整合多種人格與命理訊號，做成使用者願意每天回來參考的產品，而不只是一次性的生成內容？",
  },
  whatWeSaw: {
    kicker: "PRODUCT HYPOTHESIS",
    heading: "先建立信任，再談留存",
    signals: [
      {
        number: "1",
        heading: "先讓結果值得相信",
        body:
          "人格分析是使用者第一次判斷產品是否「理解我」的時刻。只有第一層結果具備足夠的個人相關性，後續每日狀態才有被持續參考的理由。",
      },
      {
        number: "2",
        heading: "把複雜計算藏在體驗後面",
        body:
          "使用者不需要先理解紫微、西占或背後的計算方式。這些系統作為個人化訊號存在，前台只呈現能直接理解與使用的結果。",
      },
      {
        number: "3",
        heading: "驗證每日使用，而不是一次性測驗",
        body:
          "真正要驗證的產品價值，是使用者是否會持續回來查看每日狀態，逐漸把它變成日常參考。",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "先做人格，再延伸每日狀態",
      paragraphs: [
        "第一版流程從 Google／Apple 登入、人格題目、出生資料確認，進到人格特質分析，再延伸到紫微命盤、星座命盤與每日狀態。出生資料確認後不開放任意修改，避免使用者反覆嘗試不同資料，破壞個人化資料的穩定性。",
        "MVP 聚焦在兩個問題：第一次結果是否值得相信，以及之後是否有足夠理由讓使用者再回來。",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "預先生成 27,648 組內容",
      paragraphs: [
        "12 星座 × 12 命宮 × 12 主星 × 16 種人格類型，形成 27,648 種有限組合。產品仍在實驗階段，如果每次使用都即時呼叫模型，就會在留存還沒被驗證前持續增加成本；有限的組合空間，讓預先生成更適合當時的產品階段。",
        "因此我先把完整內容資料建好：Prompt A 將每種組合拆成結構化內容因子，Prompt B 再轉成使用者可讀的內容，最後整理為 JSON 並透過 Firebase CLI 匯入。AI 成本集中在資料建置階段，日常使用時不必每次重新推論。",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "把 AI 內容品質變成可以檢查的流程",
      paragraphs: [
        "大量生成後，我發現不同組合開始出現相似語詞與句型，個人化差異逐漸收斂。這個問題不能只靠換模型處理，必須回到 Prompt、輸出結構與資料品質本身。",
        "我重新拆分 Prompt 與輸出結構，加入語義、詞彙與 JSON 格式檢查，再搭配抽樣檢查。當某批內容出現問題時，只重新生成受影響的資料，不需要整批重跑。這讓生成式 AI 從一次性的內容產生工具，變成可以持續檢查、找出問題並修正的資料流程。",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "用 AI 擴大實作範圍，產品與 UX 決策仍由我負責",
      paragraphs: [
        "我先在 Figma 完成產品流程與 UI/UX，再用 AI 開發工具推進實作，並利用自己的前端能力檢查與調整介面、互動與技術可行性。",
        "AI 主要協助初始程式實作與技術檢查；產品方向、UX、需求優先順序、驗證標準與最終取捨仍由我負責。這讓一個人可以完成更多實作工作，同時保留產品與設計判斷。",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & SHIP",
    heading: "從 Figma 做到正式上架",
    paragraphs: [
      "完成產品流程與 UI 後，我透過 AI 輔助開發推進實作、Firebase 整合、測試與修正，並完成 Android 與 iOS 的上架流程。Android 最終正式上架 Google Play，iOS 則進入 App Store 審核。",
      "這個實驗因此真的走過產品假設、設計、開發到上架，而沒有停在 Prototype。",
    ],
    roleCard: {
      label: "我的責任",
      items: [
        "產品策略與 MVP 範圍",
        "User Flow 與 Figma UI/UX",
        "AI 資料流程與品質規則",
        "前端調整與驗證",
        "上架規劃與商店送審",
      ],
      footnote:
        "AI 協助多數初始程式實作；產品方向、UI/UX、需求、驗證標準與上架由我負責。",
    },
  },
  impact: {
    kicker: "SHIP & LEARN",
    heading: "上架之後，真正要解的問題轉向市場",
    blocks: [
      {
        heading: "從 Prototype 走到正式產品",
        body:
          "產品從概念、資料與 UI/UX 一路推進到 Android 正式上架，也讓我確認這套 AI 協作方式確實能把一個產品從假設一路推到可公開使用的版本。",
      },
      {
        heading: "建立可以持續修正的 AI 資料流程",
        body:
          "Prompt 分流、格式檢查、抽樣與局部重跑，讓生成內容出問題時可以找到原因並修正，不必每次都把整批資料重新產生。",
      },
      {
        heading: "下一個風險是獲客與定位",
        body:
          "上架後自然流量不足，原本設定的留存假設還沒有足夠樣本可以驗證；App Store 審核也讓產品差異化與類別定位的問題更明顯。我探索過「每日狀態」方向，但在獲客與定位都還沒解決前，選擇先停止追加投入。",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "把最重要的驗證往前移",
    paragraphs: [
      "Star Metric 最重要的學習，是 AI 能大幅降低開發成本，但不會替產品解決市場切入、定位與獲客問題。之後做新的產品實驗時，我會更早找出風險最高的假設，先取得足夠證據，再決定值得投入多少開發成本。",
    ],
  },
};