import type { CaseStudyContent } from "../../types";

export const starMetric: CaseStudyContent = {
  slug: "star-metric",
  meta: {
    title: "Star Metric｜從 AI 實驗到上架產品",
    description:
      "整合星座、MBTI 與紫微資料，建立 27,648 組兩階段 AI 內容管線，完成產品策略、UI/UX、AI 協作開發與 Android 上架。",
  },
  caseNumber: "04",
  kicker: "CASE STUDY 04 · STAR METRIC",
  title: "從 AI 實驗到上架產品",
  lead:
    "把星座、MBTI 與紫微訊號整合成個人化內容，從產品假設、UI/UX、27,648 組資料生成與品質驗證，一路推進到 Android 正式上架；真正發布後，也看見 acquisition 與產品定位仍待驗證。",
  heroImageName: "Star Metric Case Hero",
  metrics: [
    { value: "27,648", label: "預先生成的人格內容組合" },
    { value: "2-stage", label: "AI 內容生成管線" },
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
        heading: "先讓使用者覺得「像自己」",
        body:
          "人格特質是第一層信任。只有使用者先認為分析貼近自己，後續每日狀態與建議才有被參考的可能。",
      },
      {
        number: "2",
        heading: "合盤不是 MVP",
        body:
          "如果第一層信任還沒建立，更深的關係分析不會有足夠說服力；從使用漏斗來看，也不值得優先投入。",
      },
      {
        number: "3",
        heading: "真正想驗證的是留存",
        body:
          "成功條件不是完成一次測驗，而是使用者會每天查看狀態，甚至在不順時主動回來確認與調整自己的節奏。",
      },
      {
        number: "4",
        heading: "紫微是底層訊號，不是學習門檻",
        body:
          "主要使用者仍以熟悉星座與 MBTI 的族群為主；紫微被放在底層增加個人化差異，不要求使用者先理解命理系統。",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "先做人格，再延伸每日狀態",
      paragraphs: [
        "第一版流程從 Google／Apple 登入、人格題目、出生資料確認，進到人格特質分析，再延伸到紫微命盤、星座命盤與每日狀態。出生資料確認後不開放任意修改，避免使用者反覆嘗試不同資料，破壞個人化資料的穩定性。",
        "我把合盤延後，把有限資源先放在建立第一層可信度與每日使用理由。這讓 MVP 聚焦在兩件事：分析是否讓人覺得貼近自己，以及產品是否有機會形成持續回訪。",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "預先生成 27,648 組內容",
      paragraphs: [
        "12 星座 × 12 命宮 × 12 主星 × 16 MBTI，形成 27,648 種有限組合。產品仍在實驗階段，如果每次使用都即時呼叫高品質 LLM，推論成本會隨使用量持續增加，也會讓尚未驗證的產品先背上固定營運壓力。",
        "因此我選擇先建立完整內容資料：Prompt A 將組合拆成結構化內容因子，Prompt B 再依這些因子產出使用者可讀內容，最後整理為 JSON 並透過 Firebase CLI 匯入。把 AI 成本集中在資料建置階段，讓日常使用不必每次重新推論。",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "把 AI 品質變成可驗證流程",
      paragraphs: [
        "大量生成後，我發現不同組合開始出現相似語詞與句型，個人化差異逐漸收斂。問題不只靠換模型解決，而是回到 Prompt、輸出結構與資料品質本身。",
        "我持續迭代 Prompt，將不同命盤特質分流，加入語義與詞彙限制、JSON 結構檢查、內容長度與抽樣品質驗證；需要修復時只重跑受影響資料，保留約 55% 不需重新生成的內容。API 端也加入 retry、rate-limit handling 與 token／thread 調校，讓品質、速度與成本一起被管理。",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "AI 寫程式，我保留產品判斷",
      paragraphs: [
        "UI Flow 與介面由我規劃並在 Figma 完成。當時 AI 產出的設計品質仍無法直接使用，因此我先定義互動與視覺，再讓 AI coding tools 依設計實作，最後利用自己的前端能力微調介面與行為。",
        "Claude 是主要實作工具，ChatGPT 與 Gemini 用於策略討論、技術驗證與第二意見；後端部分我以產品規則、風險與安全要求為主，再透過不同 AI 交叉審核。AI 擴大了單人專案的執行範圍，但產品方向、UX、驗證標準與最終取捨仍由我決定。",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & SHIP",
    heading: "從 Figma 到正式上架",
    paragraphs: [
      "完成產品流程與 UI 後，我透過 AI-assisted development 推進前後端實作、整合 Firebase、測試與修正，再自行完成介面細節、App icon、Store screenshots 與發布素材。視覺素材部分由 AI 協助產生基礎素材，我再以 Photoshop 完成版面與成品控制。",
      "Android 版本最終正式上架 Google Play；iOS 也完成 App Store 送審。這讓實驗真正走完整個產品生命週期：從假設、資料、UX、實作，到平台審核與公開發布，而不是停在 prototype。",
    ],
    operatingContext: {
      label: "OPERATING CONTEXT",
      stats: [
        { value: "1 人", label: "Independent product experiment" },
        { value: "3 AI", label: "Claude · ChatGPT · Gemini" },
        { value: "2 平台", label: "Android 上架 · iOS 送審" },
      ],
    },
    roleCard: {
      label: "MY ROLE",
      items: [
        "Product strategy & MVP scope",
        "UI Flow & UI/UX design in Figma",
        "AI data pipeline & quality rules",
        "Front-end refinement & validation",
        "Store assets, submission & release",
      ],
      footnote:
        "AI 負責多數初始程式實作；產品方向、UI/UX、需求、驗證標準與上架由我負責。",
    },
  },
  impact: {
    kicker: "SHIP & LEARN",
    heading: "上架，才看到真正的瓶頸",
    blocks: [
      {
        heading: "真正完成交付",
        body:
          "Star Metric 從概念一路做到 Android production release，驗證 AI-assisted workflow 能把單人產品實驗推進到公開上架，而不只停在概念與 prototype。",
      },
      {
        heading: "資料管線可持續修正",
        body:
          "27,648 組內容不是一次性生成後就結束；Prompt 分流、結構驗證、品質抽樣與 selective rerun 讓資料可以被診斷、修正與版本化。",
      },
      {
        heading: "Acquisition 先卡住",
        body:
          "上架後，在沒有付費推廣的情況下幾乎沒有自然使用者。原本想驗證的 retention，因此還沒有足夠流量可以得到可靠答案；我也看見自己在 acquisition 與行銷上的能力缺口。",
      },
      {
        heading: "iOS 迫使定位重新思考",
        body:
          "App Store review 讓我重新檢視產品差異化與類別定位。我曾探索從命理內容轉向「每日狀態」的方向，但在定位與 acquisition 都尚未解決的情況下，決定先暫停投入。",
      },
    ],
    footnote:
      "本案例的成果重點是完成一輪產品實驗並取得可行性與市場學習；上架本身不等同於市場驗證成功。",
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "先暫停，把學習帶到下一個產品",
    paragraphs: [
      "AI 大幅降低了資料建置與產品實作門檻，但沒有替產品解決市場進入、差異化與 acquisition。這次經驗讓我更清楚：能快速 build 很重要，更要在投入前確認哪個風險最值得先驗證。",
      "因此我暫停 Star Metric 的後續轉型，把這次在 AI 協作、資料品質、成本控制、上架與平台限制上的經驗帶進下一個產品實驗 SpeedMeter，將更多驗證提前到完整開發之前。",
    ],
  },
};
