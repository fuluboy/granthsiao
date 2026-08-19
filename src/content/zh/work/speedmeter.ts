import type { CaseStudyContent } from "../../types";

export const speedMeter: CaseStudyContent = {
  slug: "speedmeter",
  meta: {
    title: "SpeedMeter｜透過 AI 快速驗證產品假設",
    description:
      "從測速警示、道路資料與車用介面出發，把 AI 用在需求釐清、原型、工作整理、開發與測試，更快把產品想法帶到實際驗證。",
  },
  caseNumber: "05",
  kicker: "CASE STUDY 05 · SPEEDMETER",
  title: "透過 AI 快速驗證產品假設",
  lead:
    "我想從自己長期使用測速 App 的經驗出發，重新處理警示干擾、資料準確度與車用介面的問題。這次也把 AI 放進產品探索、原型、開發與驗證流程，讓想法能更快進到真實裝置上測試；產品方向、資料是否可信，以及什麼情況才算通過，仍由我自己判斷。",
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
      "所以這次沒有先列一大串功能，而是先把問題縮小：警示體驗能不能更好、道路資料能不能信任，以及新的介面方向能不能盡快放到真實裝置上驗證。",
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
      heading: "先用 AI 訪談釐清，再整理成產品文件",
      paragraphs: [
        "我沒有一開始就叫 ChatGPT 幫我寫完整 PRD，而是讓它用訪談的方式，一題一題問我使用情境、痛點、目標族群、限制條件和成功標準。我回答、補充或修正後，再把確認過的內容整理成 Lean Canvas、Impact Mapping、User Flow 與 Product Backlog。",
        "這樣做可以避免 AI 根據一句模糊的需求自行補完。它先幫我把想法問清楚，再把討論整理成可以繼續檢查和修改的文件；最後要不要做、先做什麼，仍回到實際使用經驗、競品觀察和產品判斷。",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "先把參考畫面做成能跑的版本，再判斷值不值得做",
      paragraphs: [
        "看到可能適合車用儀表的介面方向時，我會把參考圖片交給 Codex，先產生結構相近、可以直接執行的 UI，再放到真實裝置上看資訊密度、字級、視覺層級和互動是否適合駕駛情境。",
        "這個做法不是要讓 AI 代替設計，而是提早回答一個更實際的問題：這個方向真的跑起來好不好用？原本只能看靜態 mockup 想像的東西，可以很快變成能看、能操作的版本，再決定要繼續調整、重做，或直接放棄。",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "資料先求可信，再求多",
      paragraphs: [
        "測速資料來自政府開放資料、地方來源與第三方資料，各自的更新頻率、欄位格式和可靠程度都不同。資料整合得越多，如果最後連座標或設備類型是從哪個來源來的都說不清楚，出錯時反而更難查。",
        "因此我把來源、轉換規則、資料合約和最後輸出串在一起，優先用官方資料建立基礎。第三方資料可以拿來找可能遺漏的地點，再回頭確認，但不直接拿來取代官方依據。重點不是資料最多，而是每一筆資料都知道為什麼可以放進產品。",
      ],
    },
    {
      kicker: "KEY DECISION 5",
      heading: "把討論結果直接整理進 Trello",
      paragraphs: [
        "SpeedMeter 同時有資料、警示規則、UI、Android、測試和上架準備等多條工作線。工作一多，討論過的內容很容易散落在不同地方。",
        "我透過 ChatGPT 與 Trello 的連結，把確認過的需求整理成 Product Backlog 和卡片，減少重新拆工作與搬運資訊的時間。優先順序、哪些需求先放著，以及一張卡片是否真的完成，仍依產品目標和驗收條件判斷。",
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
    heading: "目前知道什麼，還有哪些要上路才知道",
    blocks: [
      {
        heading: "目前做到哪裡",
        body:
          "Android 版本已經能實際操作，主要警示流程也能透過 GPS 模擬重現接近測速點、超速與通過等狀態，已具備進一步道路測試的基礎。",
      },
      {
        heading: "目前確認了什麼",
        body:
          "AI 確實能縮短需求整理、介面嘗試到可執行版本之間的時間；固定的資料規則與自動測試，也讓快速修改後的結果仍有一致的檢查方式。",
      },
      {
        heading: "還需要驗證什麼",
        body:
          "接下來要看真實道路上的漏報、誤報、提醒時機與駕駛干擾，以及這套介面和警示方式是否真的比現有使用經驗更好。長期使用意願則要等產品累積足夠實際使用後再判斷。",
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
