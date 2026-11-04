import type { CaseStudyContent } from "../../types";

export const shunfeng: CaseStudyContent = {
  slug: "shunfeng",
  meta: {
    title: "Shunfeng｜為聽障旅客聽機場廣播",
    description:
      "Meta 全球 AI 開發者黑客松作品。一個人在 10 天內，從聽障旅客的真實困境出發，完成旅程研究、設計系統、動態規格、AI 協作開發與 iPhone 實機驗證，做出只為你的航班震動的 App。",
  },
  caseNumber: "04",
  kicker: "CASE STUDY 04 · SHUNFENG",
  title: "為聽障旅客聽機場廣播：只為你的航班震動",
  lead:
    "機場的換登機門、延誤和最後登機，大多還是用廣播說的。聽不到的旅客，只能看身邊的人起身，猜是不是自己的班機。這是我參加 Meta 全球 AI 開發者黑客松的作品：10 天內一個人完成研究、設計、AI 協作開發、實機測試和 Demo。產品方向、設計原則和每一次取捨由我決定；程式主要由 AI 撰寫，再由我用測試和實機驗收。",
  heroImageName: "Shunfeng Case Hero",
  metrics: [
    { value: "10 天", label: "一人完成 App、設計系統與 Demo" },
    { value: "47/47", label: "測試廣播的通知判斷全對" },
    { value: "12/12", label: "iPhone 麥克風實測收到" },
  ],
  facts: [
    { label: "角色", value: "Solo Builder／Product & Design Lead" },
    { label: "期間", value: "2026.10.27–11.04 · 10 天" },
    { label: "階段", value: "黑客松作品 · iPhone 實機可運作原型" },
    {
      label: "責任",
      value: "問題定義、旅程研究、設計系統、動態規格、AI 協作開發、評估與實機驗證、Demo 影片",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "聽不到廣播的人，只能看別人站起來",
    paragraphs: [
      "機場的重要訊息大多是用說的：換登機門、延誤、開始登機、最後登機。聽得到的人一聽到就起身；聽不到的人，常常是看到身邊的人突然站起來，才知道好像有事發生，再去找看板確認。看板有幫助，但沒有人能每分鐘盯著，而且在台灣，廣播常常先用中文播。",
      "黑客松的主題是「Build for Your World」：用 Meta 的模型解決一個你了解的真實問題。我選擇聽障旅客在機場候機的這個時刻，目標不是把每一則廣播都轉成文字，而是只在跟你有關的時候提醒你。",
    ],
    coreChallengeLabel: "核心問題",
    coreChallengeQuote:
      "能不能讓手機替聽障旅客聽廣播，只在跟他的航班有關時才震動？而且在不確定的時候，誠實地說「可能」，而不是假裝確定。",
  },
  whatWeSaw: {
    kicker: "WHAT WE SAW",
    heading: "從旅程裡找出真正會錯過的時刻",
    signals: [
      {
        number: "1",
        heading: "訊息是用說的，看板常常慢一步",
        body:
          "我把一位聽障旅客從抵達機場到登機的過程畫成十個站點的旅程地圖。風險最高的是候機時：換登機門和最後登機都來得很突然，看板更新也不一定跟廣播同步。",
      },
      {
        number: "2",
        heading: "通知太多，等於沒有通知",
        body:
          "機場一小時會有幾十則廣播，大部分跟你無關。如果每一則都震動，使用者很快就會把它關掉。所以「不打擾」和「不漏掉」一樣重要。",
      },
      {
        number: "3",
        heading: "AI 會聽錯，產品必須誠實",
        body:
          "在吵雜的機場，語音辨識一定會出錯，航空公司名稱、登機門號碼都可能被聽錯。產品不能把錯誤包裝成確定，而要讓使用者知道哪些是確定的、哪些需要再確認。",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "先畫旅程，再決定要做什麼",
      paragraphs: [
        "開始寫程式之前，我先把聽障旅客從停車場到登機門的整段旅程拆成十個站點，標出每一站可能錯過什麼、手機能幫上什麼，以及 App 自己可能出問題的地方，例如沒有網路、通話中、手機鎖屏。",
        "這張地圖讓範圍很快收斂：第一版只處理候機時的廣播這個風險最高的時刻，報到、安檢等需求先放著。地圖裡列出的風險，後來也直接變成實機測試的檢查清單。",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "只為你的航班震動；不確定，就說「可能」",
      paragraphs: [
        "我把提醒設計成一套「震動語言」：震一下是可能有關、請確認；震兩下是有變動；震三下是馬上行動；一長震是取消。使用者不用先看螢幕，從口袋裡的震動就知道事情有多急。最後登機會每 30 秒再提醒一次，直到使用者按下「我已經在登機門了」。",
        "更重要的是不假裝確定。聽到你的班號但聽不清楚消息，或目的地對不上時，App 只震一下並標示「可能」，再提供一張中英文大字卡，讓使用者直接拿給地勤人員問。別班的廣播會記錄下來，但不會震動。",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "關掉提示，讓評估資料做決定",
      paragraphs: [
        "語音辨識服務可以接受「關鍵字提示」。直覺上，把使用者的班號當提示，應該會聽得更準。但用測試廣播驗證後，結果正好相反：它把別班的 CI110 聽成使用者的 CI100，變成誤報。",
        "所以我決定不給提示，讓辨識器照實寫下聽到的內容，再由手機上簡單、可測試的規則判斷班號、事件、登機門和目的地。這個決定是用 47 則測試廣播比較出來的，不是憑感覺：純音訊加規則的做法，47 則的通知判斷全對。",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "以聽障者為優先的設計系統",
      paragraphs: [
        "介面的每一個元素都假設使用者聽不到聲音。語意色只用在對應的意思：綠色代表確定、橘色代表可能、紅色代表馬上行動，並檢查對比度。狀態列明確顯示「正在聽」「通話中暫停」「沒有網路」，因為使用者沒辦法靠聲音知道 App 還在不在工作。",
        "我在 Figma 建立了基礎規範、元件庫和 14 個畫面的 UI Flow，涵蓋提醒卡、鎖屏通知、問地勤的大字卡，以及通話中、沒網路、連不上服務等異常狀態。設計與程式使用同一組色彩與尺寸規範，畫面在 App 裡實作出來時保持一致。",
      ],
    },
    {
      kicker: "KEY DECISION 5",
      heading: "震動、畫面、通知同一拍",
      paragraphs: [
        "對聽障使用者來說，動態不是裝飾，而是資訊的一部分。我整理了 12 項動態規格（M01–M12），其中最重要的是讓提醒卡上的圓點跟每一下震動同時亮起，眼睛也能數到震了幾下。",
        "每一項規格都考慮無障礙：開啟「減少動態效果」時改為淡入或靜態；資訊永遠同時有文字、圖示和震動，不只靠動態傳達；也避免每秒閃爍超過三次的效果。",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & VALIDATE",
    heading: "AI 負責寫程式，我負責判斷和驗收",
    paragraphs: [
      "App 用 SwiftUI 開發，程式主要由 AI（Claude）撰寫。我負責拆解需求、決定行為規則、審查結果，並把每一個判斷變成可以重跑的測試：判讀規則有 61 個自動測試，另外用 47 則測試廣播和 10 則保留集評估每一次修改。",
      "真正的品質來自實機測試。我在 iPhone 上用喇叭播放示範廣播，檢查鎖屏時會不會震動、通話中會不會暫停、超過一小時能不能自動重連。光是拍 Demo 的那天，就從 App 的紀錄檔找出並修好 5 個問題，包括中文「更換」被判成「可能」、按下開始後太快鎖屏會沒有收音，以及同一則廣播中英文各播一次時提醒重複兩份。",
      "三個 Meta 模型各用在最適合的地方：Muse Voice Transcribe 即時聽廣播，Muse Spark 讀登機證（連地勤手寫改的時間也讀得到），開放權重的 Muse Spark Open 透過 Baseten 翻譯。翻譯只幫忙閱讀，「是不是你的航班」永遠由可測試的規則決定。",
    ],
    operatingContext: {
      label: "RESOURCE CONDITIONS",
      stats: [
        { value: "1 人", label: "研究、設計、開發、拍攝" },
        { value: "10 天", label: "黑客松期間" },
        { value: "69", label: "commits" },
        { value: "61", label: "自動測試" },
      ],
    },
    roleCard: {
      label: "MY ROLE",
      items: [
        "Problem framing & journey research",
        "Deaf-first design system & motion spec",
        "AI-directed development & code review",
        "Evaluation design & on-device testing",
        "Demo script, filming & editing direction",
      ],
      footnote:
        "程式、素材與紀錄分析主要由 AI 協助完成；產品方向、設計原則、取捨與驗收標準由我負責。",
    },
  },
  showcase: {
    navLabel: "設計與 Demo",
    kicker: "DESIGN & DEMO",
    heading: "設計系統、動態規格與 Demo 影片",
    intro: "以下的設計都在 10 天內完成，並實作在 App 裡。點圖片可以放大。",
    video: {
      youtubeId: "yWcVkrgqqIE",
      title: "Shunfeng Demo（3 分鐘）",
      caption:
        "黑客松提交的 Demo。App 畫面在家錄製，再到松山機場出境大廳拍攝；示範廣播與旁白由 Kokoro 語音模型（Apache 2.0）產生。",
    },
    items: [
      {
        src: "/images/work/shunfeng/showcase-foundations.png",
        width: 1400,
        height: 1484,
        alt: "Shunfeng 設計系統基礎規範",
        caption: "設計系統：品牌色、語意色（附對比度）、字級、間距與圓角",
      },
      {
        src: "/images/work/shunfeng/showcase-components.png",
        width: 1600,
        height: 3567,
        alt: "Shunfeng 元件庫",
        caption: "元件庫：按鈕、狀態列、提醒卡、鎖屏通知與問地勤大字卡",
      },
      {
        src: "/images/work/shunfeng/showcase-uiflow.png",
        width: 2830,
        height: 4000,
        alt: "Shunfeng UI Flow",
        caption: "UI Flow：14 個畫面，標出 12 個需要動態的位置",
      },
      {
        src: "/images/work/shunfeng/showcase-motion.png",
        width: 1806,
        height: 1935,
        alt: "Shunfeng 動態規範",
        caption: "動態規範：時長、曲線與無障礙原則",
      },
      {
        src: "/images/work/shunfeng/showcase-brand.png",
        width: 3264,
        height: 1704,
        alt: "Shunfeng 品牌與 Logo 探索",
        caption: "品牌：Logo 三個方向的探索，選定耳朵加上 F 的設計",
      },
      {
        src: "/images/work/shunfeng/showcase-journey.png",
        width: 2560,
        height: 4800,
        alt: "聽障旅客旅程地圖",
        caption: "旅程地圖：從停車場到登機門的十個站點與風險",
      },
    ],
  },
  impact: {
    kicker: "RESULTS SO FAR",
    heading: "目前驗證了什麼，還有什麼沒驗證",
    blocks: [
      {
        heading: "目前做到哪裡",
        body:
          "App 已能在 iPhone 實機上運作：拍登機證設定航班、鎖屏時持續聆聽、只為你的航班震動、翻譯、問地勤大字卡，以及通話、斷網、超過一小時的自動處理。作品已在 2026 年 11 月提交黑客松，程式碼以 MIT 授權公開在 GitHub。",
      },
      {
        heading: "測試數字",
        body:
          "47 則測試廣播經語音辨識後，通知判斷全對；10 則保留集全對；iPhone 麥克風在喇叭 1–2 公尺外實測 12/12；12 張真實登機證的 8 個欄位全部讀對，每張約 5 秒；螢幕關閉時每小時約耗電 5%，每趟 API 成本約 0.5 美元。",
      },
      {
        heading: "還需要驗證什麼",
        body:
          "目前的測試使用合成的示範廣播和家中喇叭，還沒有在真實機場、真實聽障使用者身上長時間驗證。下一步是請聽障旅客實際使用，確認震動語言好不好學、提醒時機對不對，以及在嘈雜的登機門旁能不能聽得清楚。",
      },
    ],
    footnote: "測試數字來自合成測試廣播與家中實測，不代表真實機場的表現。",
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "AI 讓一個人能做完整個產品，判斷不能交給它",
    paragraphs: [
      "這次最大的體會是，AI 讓一個人在 10 天內完成研究、設計、開發和 Demo 變得可能。但最關鍵的幾個決定都不是 AI 做的：只處理候機這個時刻、不確定就說「可能」、關掉看起來更聰明的提示、發現 macOS 系統語音不能公開使用就換成授權明確的語音模型。對我來說，AI Native 不是讓 AI 替我做決定，而是讓我更快看到真實結果，再用證據決定下一步。",
    ],
  },
};
