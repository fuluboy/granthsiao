import type { CaseStudyContent } from "../../types";

export const speedMeter: CaseStudyContent = {
  slug: "speedmeter",
  meta: {
    title: "SpeedMeter｜透過 AI 快速驗證產品假設",
    description:
      "從測速警示體驗與道路資料品質出發，把 AI 用在訪談整理、產品規劃、原型、工作管理、開發與測試，快速把想法做成可以實際驗證的版本。",
  },
  caseNumber: "05",
  kicker: "CASE STUDY 05 · SPEEDMETER",
  title: "透過 AI 快速驗證產品假設",
  lead:
    "這次我想驗證的不只是一個測速 App，也包括一套新的產品工作方式：先把問題想清楚，再用 AI 協助訪談整理、原型、工作拆解與開發，最後透過資料規則、測試與 GPS 模擬確認結果。AI 讓每一輪嘗試更快，產品方向、資料是否可信，以及什麼情況才算通過，仍由我自己判斷。",
  heroImageName: "SpeedMeter Case Hero",
  metrics: [
    { value: "0→1", label: "從想法做到可驗證版本" },
    { value: "AI", label: "訪談、原型、開發與工作整理" },
    { value: "GPS", label: "完成模擬測試，準備道路驗證" },
  ],
  facts: [
    { label: "角色", value: "Independent Product Builder／Product & Design Lead" },
    { label: "期間", value: "2026 · In Progress" },
    { label: "階段", value: "產品實驗 · 驗證中" },
    {
      label: "責任",
      value: "產品規劃、User Flow、UI/UX、資料品質、AI 輔助開發、測試與驗證",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "從自己每天開車遇到的問題開始",
    paragraphs: [
      "我本來就是測速 App 的固定使用者。實際開車時，我最在意的是警示準不準、出現的時間對不對，以及提醒會不會一直打斷音樂和駕駛節奏。現有產品已經能解決基本需求，但在提醒方式、介面資訊層級和資料品質上，我一直覺得還有改善空間。",
      "所以這次我沒有先列一大串功能，而是先把問題縮小：警示體驗是否真的比較好、道路資料能不能信任，以及一個新的介面想法能不能盡快做到真實裝置上驗證。",
    ],
    coreChallengeLabel: "核心問題",
    coreChallengeQuote:
      "能不能在不增加駕駛負擔的情況下，做出更準確、提醒更剛好的測速體驗？同時，也用這個專案驗證 AI 是否能幫我更快把產品想法帶到實際測試。",
  },
  whatWeSaw: {
    kicker: "PRODUCT HYPOTHESIS",
    heading: "先把幾件最重要的事做好",
    signals: [
      {
        number: "1",
        heading: "警示準不準，比功能多不多重要",
        body:
          "固定測速漏報、位置錯誤或提醒太頻繁，都會很快失去使用者信任。第一階段我先處理警示是否可靠，不急著把所有功能一次做完。",
      },
      {
        number: "2",
        heading: "提醒方式要跟著當下狀態變化",
        body:
          "接近測速點、已經降速、仍然超速，以及通過之後，需要的提醒強度都不同。像國道路況這類資訊，也不一定每次都要用語音。什麼時候提醒、提醒幾次、用聲音還是畫面，本身就是體驗的一部分。",
      },
      {
        number: "3",
        heading: "資料準確，才有後面的體驗",
        body:
          "如果測速位置或設備類型本身就有錯，再漂亮的儀表也沒有意義。因此資料來源、更新方式和驗證規則，從一開始就和介面體驗一起處理。",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "先把警示流程想清楚，再加功能",
      paragraphs: [
        "我先把一次警示拆成接近、近距離、通過與持續超速幾個狀態，再分別定義畫面、聲音和再次提醒的規則。已經降速時仍保留必要提示，但不要持續打擾；如果還在超速，才依距離再次提醒。",
        "國道路況也採用同樣做法。壅塞、掉落物或車道事件可以顯示在 dashboard 上，但不需要全部轉成語音。先把駕駛當下真正需要知道什麼想清楚，再決定功能怎麼呈現。",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "資料先求可信，再求多",
      paragraphs: [
        "測速資料來自政府開放資料、地方來源與第三方資料，各自的更新頻率、欄位格式和可靠程度都不同。資料整合得越多，如果最後連座標或設備類型是從哪個來源來的都說不清楚，出錯時反而更難查。",
        "因此我把來源、轉換規則、資料合約和最後輸出串在一起，優先用官方資料建立基礎。第三方資料可以拿來找可能遺漏的地點，再回頭確認，但不直接拿來取代官方依據。重點不是資料最多，而是每一筆資料都知道為什麼可以放進產品。",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "先用 AI 訪談釐清，再整理成產品文件",
      paragraphs: [
        "我沒有一開始就叫 ChatGPT 幫我寫完整 PRD，而是讓它用訪談的方式，一題一題問我使用情境、痛點、目標族群、限制條件和成功標準。我回答、補充或修正後，再把確認過的內容整理成 Lean Canvas、Impact Mapping、User Flow 與 Product Backlog。",
        "這樣做的好處是，AI 不會只根據一句模糊的需求自行補完。它先幫我把想法問清楚，再把討論整理成可以繼續檢查和修改的文件；最後要不要做、先做什麼，還是回到實際使用經驗、競品觀察和產品判斷。",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "先把參考畫面做成能跑的版本，再判斷值不值得做",
      paragraphs: [
        "看到可能適合車用儀表的介面方向時，我會把參考圖片交給 Codex，先產生結構相近、可以直接執行的 UI，再放到真實裝置上看資訊密度、字級、視覺層級和互動是否適合駕駛情境。",
        "這不是要讓 AI 代替設計，而是先回答一個更實際的問題：這個方向真的跑起來好不好用？原本只能看靜態 mockup 想像的東西，可以很快變成能看、能操作的版本，再決定要繼續調整、重做，或直接放棄。",
      ],
    },
    {
      kicker: "KEY DECISION 5",
      heading: "把討論結果直接整理進 Trello",
      paragraphs: [
        "SpeedMeter 同時有資料、警示規則、UI、Android、測試和上架準備等多條工作線。工作一多，最容易發生的問題就是討論完了，真正要做的事散落在不同地方。",
        "我透過 ChatGPT 與 Trello 的連結，把已經確認的需求拆成 Product Backlog 和卡片，再整理優先順序、進度與後續驗證項目。AI 幫我減少整理和搬運資訊的時間，但哪些工作先做、哪些先放著，以及一張卡片是否真的完成，仍依產品目標和驗收條件判斷。",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & VALIDATE",
    heading: "AI 幫我加快開發，測試負責守住品質",
    paragraphs: [
      "產品方向和規則確認後，我用 AI 輔助 Android 開發；每次調整後，仍要跑單元／整合測試、lint、build、資料格式和 schema 檢查。這些條件固定下來後，不論程式是我改的還是 AI 產生的，都用同一套標準驗收。",
      "警示流程也透過 GPS 模擬，重現接近測速點、超速、通過等狀態，再準備進入實際道路測試。這套做法讓專案很快就進到可驗證階段；我更在意的是，速度變快的同時，問題釐清、資料判斷和驗收都沒有被省略。",
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
        "AI 用來加快研究整理與初始實作；產品方向、資料是否可信、UX、優先順序與驗收標準由我負責。",
    },
  },
  impact: {
    kicker: "CURRENT VALIDATION",
    heading: "已經能測，接下來看上路後是否真的好用",
    blocks: [
      {
        heading: "從想法走到能實際操作",
        body:
          "訪談和 User Flow 沒有停在文件裡，已經進一步變成可執行 UI、警示邏輯與 GPS 模擬。原本抽象的產品假設，現在可以直接觀察、操作，再根據結果調整。",
      },
      {
        heading: "AI 產出的內容也要有驗收標準",
        body:
          "道路資料有來源與資料合約可追查，程式修改也必須通過固定的測試和 build 檢查。AI 可以幫忙做得更快，但什麼叫做正確，必須先有明確標準。",
      },
      {
        heading: "接下來上路驗證",
        body:
          "下一步會看固定式警示的涵蓋率、誤報與漏報、提醒時機是否造成干擾，以及這套介面和警示方式在真實駕駛時是否真的比現有使用經驗更好。",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "AI 讓驗證變快，思考不能省",
    paragraphs: [
      "這次最重要的體會，是 AI 能把很多原本要來回幾輪的工作壓縮得很短：訪談整理、產品文件、原型、開發和測試都可以更快。但真正不能省的是前面的問題釐清，以及後面的驗證。對我來說，AI 的價值不是一次做完整個產品，而是讓我更快看到真實結果，再決定下一步值不值得做。",
    ],
  },
};