import type { CaseStudyContent } from "../../types";

export const starMetric: CaseStudyContent = {
  slug: "star-metric",
  meta: {
    title: "Star Metric｜從 AI 實驗到上架產品",
    description:
      "從產品假設、個人化資料架構與 UI/UX，到 AI 協作開發與 Android 上架，完整走過一輪 0→1 產品實驗。",
  },
  caseNumber: "04",
  kicker: "CASE STUDY 04 · STAR METRIC",
  title: "從 AI 實驗到上架產品",
  lead:
    "從產品假設、個人化資料架構與 UI/UX，到 AI-assisted development 與 Android 正式上架；產品發布後，再根據真實使用與平台審核重新檢視 acquisition 與定位。",
  heroImageName: "Star Metric Case Hero",
  metrics: [
    { value: "27,648", label: "預先生成的人格內容組合" },
    { value: "Android", label: "Google Play 正式上架" },
    { value: "iOS", label: "完成 App Store 送審" },
  ],
  facts: [
    { label: "角色", value: "Independent Product Builder／Product & Design Lead" },
    { label: "期間", value: "2024–2026" },
    { label: "階段", value: "Product Experiment · 0→1 · Release · Learn" },
    {
      label: "責任",
      value: "產品策略、UI/UX、AI 資料管線、前端調整、AI 協作開發與上架",
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
        "12 星座 × 12 命宮 × 12 主星 × 16 MBTI，形成 27,648 種有限組合。產品仍在實驗階段，如果每次使用都即時呼叫 LLM，就會在 retention 尚未被驗證前持續產生 inference cost；有限的組合空間讓預先生成成為更適合當時階段的選擇。",
        "因此我先建立完整內容資料：Prompt A 將組合拆成結構化內容因子，Prompt B 再依這些因子產出使用者可讀內容，最後整理為 JSON 並透過 Firebase CLI 匯入。把 AI 成本集中在資料建置階段，讓日常使用不必每次重新推論。",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "把 AI 品質變成可驗證流程",
      paragraphs: [
        "大量生成後，我發現不同組合開始出現相似語詞與句型，個人化差異逐漸收斂。問題不只靠換模型解決，而是回到 Prompt、輸出結構與資料品質本身。",
        "我重新拆分 Prompt 與輸出結構，加入語義、詞彙與 JSON validation，並建立抽樣檢查與 selective rerun。當內容出現品質問題時，只重新生成受影響的資料，而不是整批重跑。這讓生成式 AI 從一次性的內容產生工具，變成可以被檢查、定位問題與持續修正的資料流程。",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "用 AI 擴大執行範圍，保留產品與 UX 決策權",
      paragraphs: [
        "我先在 Figma 完成產品流程與 UI/UX，再讓 AI coding tools 依設計推進實作，並利用自己的前端能力檢查與調整介面、互動與技術可行性。",
        "Claude 主要負責程式實作，ChatGPT 與 Gemini 用於技術驗證與第二意見。AI 擴大了一個人能完成的範圍；產品方向、UX、需求優先順序、驗證標準與最終取捨仍由我負責。",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & SHIP",
    heading: "從 Figma 到正式上架",
    paragraphs: [
      "完成產品流程與 UI 後，我透過 AI-assisted development 推進實作、Firebase 整合、測試與修正，並完成 Android 與 iOS 的 release pipeline。Android 最終正式上架 Google Play，iOS 則進入 App Store review。",
      "這讓產品真正走過 hypothesis → design → implementation → release，而不是停留在 prototype。",
    ],
    roleCard: {
      label: "MY ROLE",
      items: [
        "Product strategy & MVP scope",
        "UI Flow & UI/UX design in Figma",
        "AI data pipeline & quality rules",
        "Front-end refinement & validation",
        "Release planning & store submission",
      ],
      footnote:
        "AI 負責多數初始程式實作；產品方向、UI/UX、需求、驗證標準與上架由我負責。",
    },
  },
  impact: {
    kicker: "SHIP & LEARN",
    heading: "上架後，風險轉向市場驗證",
    blocks: [
      {
        heading: "從 Prototype 到 Production",
        body:
          "產品從概念、資料與 UI/UX 一路推進到 Android production release，證明這套 AI-assisted workflow 能支撐完整的 0→1 delivery。",
      },
      {
        heading: "建立可修正的 AI Data Pipeline",
        body:
          "Prompt 分流、validation、抽樣與 selective rerun，讓生成內容可以被診斷與局部修復，而不是每次品質出問題就全部重做。",
      },
      {
        heading: "下一個風險是 Acquisition 與定位",
        body:
          "上架後自然流量不足，使原本設定的 retention hypothesis 還沒有足夠樣本可驗證；App Store review 也暴露了產品差異化與類別定位的問題。我探索過「每日狀態」方向，但在 acquisition 與定位都尚未解決前，選擇停止追加投入。",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "把驗證順序往前移",
    paragraphs: [
      "Star Metric 最重要的學習，是 AI 可以大幅降低 build cost，卻不會替產品解決 acquisition、positioning 與 product-market risk。之後的產品實驗，我開始把更多驗證放到完整開發之前，優先確認最高風險的假設，再決定值得投入多少 build effort。",
    ],
  },
};
