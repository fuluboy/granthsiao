import type { CaseStudyContent } from "../../types";

export const designSystem: CaseStudyContent = {
  slug: "design-system",
  meta: {
    title: "Design System",
    description:
      "我主動提出並推動公司首套 Design System，將三個產品團隊中重複、分裂的元件與操作邏輯，整理成共用 Token、Figma Library、前端元件庫與治理流程。",
  },
  caseNumber: "03",
  kicker: "CASE STUDY 03 · DESIGN SYSTEM",
  title: "從分散元件與體驗邏輯，建立跨產品共用的 Design System",
  lead: "我主動提出並推動公司首套 Design System，將三個產品團隊中重複、分裂的元件與操作邏輯，整理成共用 Token、Figma Library、前端元件庫與治理流程。",
  heroImageName: "Design System Case Hero",
  metrics: [
    { value: "3 個", label: "產品團隊導入" },
    { value: "2 週", label: "首批產品元件交付" },
  ],
  facts: [
    { label: "角色", value: "Chief of Experience／Design System 發起人與治理負責人" },
    { label: "期間", value: "2023–2025" },
    { label: "階段", value: "設計流程現代化、元件化與跨團隊治理" },
    {
      label: "團隊",
      value: "3 位 UI／UX；3 個產品團隊共 2 位前端，並與 PM 跨部門合作",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "同一種操作，在三個產品裡可能有三種答案",
    paragraphs: [
      "公司正從舊設計工具轉向 Figma，前端對 Vue 的使用也逐漸成熟。盤點既有產品後，我發現問題不只在視覺不一致：相同目的的按鈕、表單或 Modal，可能有多種外觀與互動；使用者要重新理解，前端也得維護重複程式與不同版本。",
      "我向總經理與產品副總提出推動方案，利用工具與技術轉型，把設計 Library、前端元件與決策流程一起建立，而不是只做一份新的 UI 規範。",
    ],
    coreChallengeLabel: "核心挑戰",
    coreChallengeQuote:
      "既有產品不能停下來全面重做，設計與前端又分屬不同組織。如何在不拖慢日常開發的情況下，建立三個團隊真正會使用的共同基礎？",
  },
  whatWeSaw: {
    kicker: "WHAT WE SAW",
    heading: "元件不一致只是表面，真正缺少的是共同決策方式",
    signals: [
      {
        number: "1",
        heading: "體驗分裂會一路變成工程技術債",
        body: "相同目的的元件出現不同互動，讓使用者反覆學習，也讓前端無法集中管理與重複使用。",
      },
      {
        number: "2",
        heading: "最大的爭議是何時可以新增或例外",
        body: "團隊大多認同共用，但新需求出現時，仍需要一套方法判斷要延伸既有元件、建立新元件，或保留產品特規。",
      },
      {
        number: "3",
        heading: "一次性全面重構並不實際",
        body: "三個產品仍持續開發，沒有條件停下所有工作重做。Design System 必須跟著真實產品需求逐步建立。",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "不做一次性大改，讓 Design System 進入每個 Sprint",
      paragraphs: [
        "團隊先用約一個月盤點三個產品的頁面與元件，建立色彩、字級與間距等底層 Token。之後不另開漫長的重構專案，而是在每次新需求中建立能涵蓋既有情境的標準元件，同步進 Figma Library 與前端元件庫。",
        "短期內新舊元件必須並存，但產品開發不必停下來。第一批可實際使用的產品元件，在下一個兩週 Sprint 中完成交付，後續再隨每輪開發持續替換。",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "用三個問題判斷：延伸、建立新元件，還是保留特規",
      paragraphs: [
        "團隊提出新元件或變化時，先確認三件事：是否仍在 Token 範圍內？是否有明確不同的產品目的？能否提出未來可重複使用的情境？符合條件的差異可以成立，所有正式元件也都必須入庫追蹤。",
        "Modal 是代表案例：標題、關閉、內容與捲軸被整理成可重複使用的結構；任意增加小標、特殊寬度或背景色，若沒有新的產品目的，就不另外建立規格。討論因此從個人偏好轉為可以檢查的產品決策。",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "把元件新增與修改，放進日常開發流程",
      paragraphs: [
        "UI／UX 團隊透過立會每天同步正在製作的頁面、元件變化與 Token 需求，提早辨識同類需求是否已在其他產品出現；每週的Design QA檢查跨產品影響，避免不同團隊為相似情境各自建立一套規格。提出調整時，設計師需說明使用情境、產品目的、既有元件無法涵蓋的原因與可能共用範圍；前端評估實作方式、可控參數、相容性及對既有頁面的影響；PM 則確認需求優先順序、例外條件與驗收範圍。",
        "遇到產品需求與共用規則衝突時，我會協助判斷應延伸既有元件、增加可控的 Variant／Props，或保留單一產品的特殊規格。相關決策會同步記錄適用產品、使用情境與限制，讓後續團隊能理解差異為何存在；當其他產品出現相似需求時，也能重新評估是否具備整併為共用元件的條件。",
        "這套協作方式讓元件問題能在設計與開發初期被發現，減少完稿後才重新修改規格或重複實作的成本，也降低 Figma Library、前端元件與正式產品逐漸分離的風險。特規仍可以存在，但不再是無法追溯的例外；共用元件也能隨真實使用情境逐步成熟，而不是為了表面一致而增加過多變數。",
      ],
      infoCard: {
        label: "治理節奏",
        rows: [
          { label: "DAILY STAND-UP", body: "同步當期頁面、元件變化與 Token 需求" },
          { label: "WEEKLY DESIGN QA", body: "檢查跨產品影響、共用範圍與相似規格" },
          {
            label: "DECISION",
            items: ["延伸既有元件", "增加可控 Variant／Props", "保留有明確用途的產品特規"],
          },
        ],
      },
    },
  ],
  execution: {
    kicker: "EXECUTION",
    heading: "有限的人力下，Design System 必須跟著產品一起交付",
    paragraphs: [
      "我以 Chief of Experience 身分帶領 3 位 UI／UX，三個產品團隊則共由 2 位前端支援。團隊若先投入數月建立一套完整元件庫，不只會延後產品需求，也可能在缺乏真實使用情境的情況下，做出難以適配後續需求的規格。因此，我們將 Design System 的建置整合進原本兩週一次的 Sprint，優先處理當期產品真正需要、同時具備共用價值的元件。",
      "在這段期間，我負責規劃導入與治理方式，主持每日立會與 Design QA，協助團隊提早發現跨產品的相似需求，並確認元件的共用範圍。當產品需求與既有規則發生衝突時，我會判斷應調整共用元件、增加可控的 Variant／Props，或保留具有明確用途的產品特規。這套做法讓元件庫能隨真實產品情境逐步成熟，也避免為了涵蓋每一項差異而持續增加變數，最後變得難以理解、實作與維護。",
    ],
    supportingMetrics: [
      { value: "1 個月", label: "完成盤點與 Token" },
      { value: "2 週", label: "首批元件交付" },
      { value: "2023–2025", label: "持續治理" },
    ],
    supportingMetricsCaption: "團隊導入時間軸",
    operatingContext: {
      label: "執行情境",
      stats: [
        { value: "3", label: "產品團隊" },
        { value: "3", label: "UI／UX 設計師" },
        { value: "2", label: "前端工程師" },
        { value: "2 週", label: "Sprint 週期" },
      ],
    },
    roleCard: {
      label: "我的責任",
      items: [
        "規劃 Design System 的導入與治理方式",
        "參與每日立會並主持 Design QA",
        "確認跨產品共用範圍與元件優先順序",
        "判斷調整共用元件、增加可控變數或保留特規",
      ],
      footnote: "讓元件庫透過真實產品使用逐步成熟，而不是脫離產品一次完成。",
    },
  },
  impact: {
    kicker: "IMPACT",
    heading: "Design System 從元件庫，變成三個產品團隊共同的工作方式",
    blocks: [
      {
        heading: "設計與產品",
        body: "設計師能直接使用 Figma 共用元件與 Token，Wireframe 進入 UI 與 Mockup 時，不必從字級、間距與常見版型重新開始。UI／UX 與 PM 的討論也能把時間放回操作流程、資訊層級與真正的產品問題。",
      },
      {
        heading: "工程與交付",
        body: "前端元件逐步集中到共用元件庫，新頁面可以沿用既有實作，減少相似程式被重複建立，也降低設計稿與正式產品出現不同版本的情況。",
      },
      {
        heading: "組織",
        body: "三個產品團隊最終採用共同 Token、Figma Library 與前端元件庫，也建立了處理新需求的方法：先確認既有元件能否支援，再決定更新共用元件、增加可控變數，或保留合理特規。",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "共用元件讓改善可以被系統性累積",
    paragraphs: [
      "Design System 導入三個產品團隊後，我更清楚感受到，共用元件不只提高交付效率，也讓使用者回饋能被更有系統地處理。當數據、測試或第一線回饋指出問題時，我們會先判斷它來自單一產品情境，還是共用元件本身；若是共通問題，就回到元件規格與互動方式一起改善，讓相關產品同步受益。",
      "如果重新進行，我會更早替 Figma 元件庫建立版本控制機制，記錄每次元件與 Token 的調整、適用情境、影響範圍與更新時間。這會讓多人維護、跨團隊使用與後續迭代更有依據，也降低設計端與產品端出現版本落差的風險。",
    ],
  },
};
