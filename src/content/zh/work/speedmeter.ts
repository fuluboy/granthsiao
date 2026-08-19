import type { CaseStudyContent } from "../../types";

export const speedMeter: CaseStudyContent = {
  slug: "speedmeter",
  meta: {
    title: "SpeedMeter｜用 AI 縮短從不確定到證據的距離",
    description:
      "從駕駛警示體驗與道路資料可信度出發，把生成式 AI 納入產品探索、規劃、原型、工作管理、開發與驗證，建立可進行道路測試的產品實驗。",
  },
  caseNumber: "05",
  kicker: "CASE STUDY 05 · SPEEDMETER",
  title: "用 AI 縮短從不確定到證據的距離",
  lead:
    "從測速資料可信度與駕駛警示體驗出發，我把生成式 AI 納入產品訪談、Lean Canvas／Impact Mapping、User Flow、可操作原型、工作管理與開發驗證。AI 用來縮短探索與實作迴圈，產品方向、資料判斷與驗收標準仍由明確的使用情境與規則決定。",
  heroImageName: "SpeedMeter Case Hero",
  metrics: [
    { value: "0→1", label: "從產品假設推進到可驗證版本" },
    { value: "AI-assisted", label: "Discovery → Build → Validation" },
    { value: "Road-testable", label: "GPS 模擬完成，進入道路驗證準備" },
  ],
  facts: [
    { label: "角色", value: "Independent Product Builder／Product & Design Lead" },
    { label: "期間", value: "2026 · In Progress" },
    { label: "階段", value: "Product Experiment · Validation-ready" },
    {
      label: "責任",
      value: "產品策略、User Flow、UI/UX、資料治理、AI 協作開發、測試與驗證",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "從日常駕駛裡反覆出現的摩擦開始",
    paragraphs: [
      "我本來就是測速 App 的固定使用者。實際開車時，我在意的並不是功能越多越好，而是警示能不能在對的時間出現、資料是否可信，以及提醒會不會反覆打斷音樂與駕駛節奏。現有產品雖然已能解決基本需求，但警示干擾、介面資訊層級與資料品質仍有改善空間。",
      "這次我沒有先從完整功能清單開始，而是把最高風險的問題往前移：警示體驗是否成立、道路資料能否被信任，以及能不能更快把產品假設變成真實裝置上的可驗證證據。",
    ],
    coreChallengeLabel: "核心問題",
    coreChallengeQuote:
      "能否在不增加駕駛干擾的前提下，提供更可信、更及時的道路警示，並讓每一輪產品假設更快進入真實驗證？",
  },
  whatWeSaw: {
    kicker: "PRODUCT HYPOTHESIS",
    heading: "先確認信任與干擾，再擴充功能",
    signals: [
      {
        number: "1",
        heading: "警示品質比功能數量重要",
        body:
          "固定測速漏報、錯誤位置或過度提醒，都會直接破壞使用者對產品的信任。第一階段優先處理的是警示是否可靠，而不是把功能清單做滿。",
      },
      {
        number: "2",
        heading: "資訊必須跟著駕駛狀態出現",
        body:
          "接近、已降速、持續超速與通過後需要不同的提醒方式；國道路況等資訊也未必需要語音。提醒的時機、頻率與媒介，本身就是產品體驗。",
      },
      {
        number: "3",
        heading: "資料可信度本身就是 UX",
        body:
          "如果底層測速資料來源不可追溯，再漂亮的儀表與動畫也無法補救錯誤警示。資料來源、轉換與驗證因此被視為產品體驗的一部分。",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "先定義駕駛警示體驗，再決定功能",
      paragraphs: [
        "我先把一次警示拆成接近、近距離、通過與持續超速等狀態，再分別定義畫面、聲音與再次提醒規則。使用者已經降速時仍保留必要提示，但避免持續干擾；若仍超速，才依距離再次提醒。",
        "同樣的原則也套用到國道路況資訊：壅塞、掉落物或車道事件可以出現在 dashboard，但不需要全部轉成語音。先把駕駛當下真正需要的資訊層級定清楚，再決定功能怎麼長出來。",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "先解決資料可信度，再追求資料量",
      paragraphs: [
        "測速資料來自政府開放資料、地方來源與第三方資料，不同來源在更新頻率、欄位結構與可信度上並不一致。整合越多資料，如果無法知道某個座標或類型最後來自哪裡，錯誤只會更難追。",
        "因此我把來源、轉換、資料合約與輸出納入同一條可追溯流程，優先以官方來源建立可驗證的基礎；第三方資料可以協助發現 coverage gap，但不直接取代官方證據。目標不是得到最多資料，而是知道每一筆資料為什麼可以進入產品。",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "先讓 AI 問對問題，再生成產品文件",
      paragraphs: [
        "我沒有直接要求 ChatGPT 產生一份完整產品規格，而是讓它以訪談方式逐步追問使用情境、痛點、目標族群、限制條件與成功標準。我回答並修正假設後，再把已確認的 context 整理成 Lean Canvas、Impact Mapping、User Flow 與 Product Backlog。",
        "這讓 AI 更像 facilitator 與 analyst：先協助把模糊想法拆開，再把對話轉成可檢查的產品 artifacts。內容是否成立仍回到我的實際使用經驗、競品觀察與產品判斷，而不是把第一個生成結果直接當答案。",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "把視覺假設直接變成可操作的可行性證據",
      paragraphs: [
        "遇到可能適合車用儀表的介面方向時，我會把 reference image 交給 Codex，快速產生結構相近、可以直接執行的 UI，再放到真實裝置上檢查資訊密度、字級、視覺層級與互動是否成立。",
        "這個 prototype 的目的不是取代設計，而是提早回答「這個方向實際跑起來是否可用」。原本只能靠靜態 mockup 或想像判斷的問題，可以更早轉成看得到、操作得到的 evidence，再決定要 refine、重做或放棄。",
      ],
    },
    {
      kicker: "KEY DECISION 5",
      heading: "讓已確認的決策直接進入可追蹤的執行系統",
      paragraphs: [
        "SpeedMeter 同時有資料、警示規則、UI、Android、測試與 release 等多條工作線。當討論與決策越來越多，我透過 ChatGPT 與 Trello 的連結，把已確認的需求拆成 Product Backlog 與卡片，整理優先順序、工作狀態與後續驗證項目。",
        "AI 協助降低從對話到執行系統之間的資訊損耗；哪些工作值得先做、哪些需求應該延後，以及卡片是否真的完成，仍由產品目標與驗收條件決定。",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & VALIDATE",
    heading: "讓 AI 加速執行，把驗收標準留在流程裡",
    paragraphs: [
      "產品方向與規則確認後，我透過 AI 輔助開發推進 Android 實作，再用 unit／integration tests、lint、build validation、資料合約與 schema 檢查形成固定的品質 Gate。每次 AI 或人工修改程式後，都必須重新通過同一套條件，避免快速迭代逐步破壞既有行為。",
      "警示流程也透過 GPS 模擬重現接近、超速、通過等狀態，再進入實際道路驗證準備。從產品定義到第一個可驗證 build 集中在數個工作日內完成，但速度本身不是目標；真正重要的是沒有省略問題釐清、資料判斷與驗收機制。",
    ],
    roleCard: {
      label: "MY ROLE",
      items: [
        "Product framing & validation strategy",
        "AI-assisted structured discovery",
        "User Flow & UI/UX direction",
        "Data source & quality rules",
        "Implementation review & validation",
      ],
      footnote:
        "AI 用於加速研究、結構化整理與多數初始實作；產品方向、資料可信度、UX、優先順序與驗收標準由我負責。",
    },
  },
  impact: {
    kicker: "CURRENT VALIDATION",
    heading: "已進入可驗證階段，下一步看真實道路表現",
    blocks: [
      {
        heading: "把模糊假設轉成可操作版本",
        body:
          "產品探索不只留下文件。從訪談與 User Flow 到可執行 UI、警示邏輯與 GPS 模擬，核心假設已經可以在接近真實的使用狀態下被觀察與修正。",
      },
      {
        heading: "資料與程式都有驗收邊界",
        body:
          "道路資料透過來源與資料合約建立可追溯性；程式修改則透過自動測試與 build gate 反覆驗證。AI 可以加速產出，但不能自行決定什麼叫做正確。",
      },
      {
        heading: "下一個證據來自道路",
        body:
          "接下來要驗證的是固定式警示 coverage、誤報與漏報、提醒時機是否造成干擾，以及使用者是否真的願意因為更可信的資料與更好的車內體驗持續開啟產品。",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "縮短 learning cycle，而不是追求一個 Prompt 做完產品",
    paragraphs: [
      "SpeedMeter 讓我更明確看到，AI 的價值不在於一次生成多少程式或文件，而是在不省略問題釐清、產品判斷與驗證的前提下，縮短從不確定到取得證據的距離。當 Discovery、Planning、Prototype、Execution 與 Quality Gate 可以接在同一條 workflow 上，速度才真正轉化成更快的學習。",
    ],
  },
};
