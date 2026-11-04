import type { CaseStudyContent } from "../../types";

export const shunfeng: CaseStudyContent = {
  slug: "shunfeng",
  meta: {
    title: "Shunfeng | Listening to airport announcements for deaf travelers",
    description:
      "Built solo in 10 days for the Meta Global AI Developer Hackathon: journey research, a deaf-first design system, motion specs, AI-directed development, and on-device validation of an iPhone app that buzzes only for your flight.",
  },
  caseNumber: "04",
  kicker: "CASE STUDY 04 · SHUNFENG",
  title: "Listening to airport announcements for deaf travelers, buzzing only for your flight",
  lead:
    "Gate changes, delays and final calls at airports are still mostly announced out loud. Travelers who can't hear them end up watching the people around them and guessing whether it was their flight. I built Shunfeng for the Meta Global AI Developer Hackathon, alone, in 10 days: research, design, AI-directed development, on-device testing and the demo. I made the product calls, the design principles and every trade-off; AI wrote most of the code, and I verified it with tests and a real iPhone.",
  heroImageName: "Shunfeng Case Hero",
  metrics: [
    { value: "10 days", label: "App, design system and demo, built solo" },
    { value: "47/47", label: "alert decisions right on test announcements" },
    { value: "12/12", label: "announcements caught live by the iPhone mic" },
  ],
  facts: [
    { label: "Role", value: "Solo Builder / Product & Design Lead" },
    { label: "Timeline", value: "Oct 27 – Nov 4, 2026 · 10 days" },
    { label: "Stage", value: "Hackathon entry · Working prototype on iPhone" },
    {
      label: "Scope",
      value: "Problem framing, journey research, design system, motion spec, AI-directed development, evaluation and on-device testing, demo video",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "If you can't hear the announcement, you watch strangers stand up",
    paragraphs: [
      "Most important information at an airport is spoken: gate changes, delays, boarding, final calls. People who hear it get up and go. People who can't often notice only when the passengers around them suddenly stand, then go looking for a board. Boards help, but nobody watches one every minute, and in Taiwan the announcement often comes in Mandarin first.",
      "The hackathon theme was “Build for Your World”: use Meta's models on a real problem you understand. I chose this moment for deaf and hard-of-hearing travelers waiting at the gate. The goal wasn't to caption every announcement, but to alert you only when one is about you.",
    ],
    coreChallengeLabel: "Core challenge",
    coreChallengeQuote:
      "Can a phone listen to announcements for a deaf traveler and buzz only when one is about their flight, and say “maybe” honestly when it isn't sure, instead of pretending?",
  },
  whatWeSaw: {
    kicker: "WHAT WE SAW",
    heading: "Finding the moments travelers actually miss",
    signals: [
      {
        number: "1",
        heading: "The news is spoken, and boards lag",
        body:
          "I mapped a deaf traveler's trip from arrival to boarding as ten stops. The riskiest one is waiting at the gate: gate changes and final calls arrive suddenly, and boards don't always update as fast as the announcement.",
      },
      {
        number: "2",
        heading: "Too many alerts is the same as none",
        body:
          "An airport makes dozens of announcements an hour, and most aren't yours. If every one buzzed, people would switch the app off. Not disturbing you mattered as much as not missing anything.",
      },
      {
        number: "3",
        heading: "AI mishears, so the product must be honest",
        body:
          "In a noisy terminal, speech recognition will make mistakes: airline names and gate numbers get misheard. The product can't present an error as certain; it has to show what is confirmed and what needs checking.",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "Map the journey before deciding what to build",
      paragraphs: [
        "Before any code, I broke a deaf traveler's trip from the car park to the gate into ten stops, marking what could be missed at each, what a phone could help with, and where the app itself could fail: no signal, a phone call, a locked screen.",
        "The map narrowed the scope quickly: the first version handles only announcements while waiting at the gate, the riskiest moment; check-in and security came later. The risks on the map later became the checklist for on-device testing.",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "Buzz only for your flight. Say “maybe” when unsure.",
      paragraphs: [
        "I designed the alerts as a vibration language: one buzz means maybe, please check; two means something changed; three means go now; one long buzz means cancelled. You know how urgent it is from your pocket, before looking at the screen. Final calls repeat every 30 seconds until you tap “I'm at the gate”.",
        "More important was not pretending. If it hears your flight number but not the news, or the destination doesn't match, it buzzes once and says “maybe”, with a large Chinese/English card you can show to airport staff. Announcements for other flights are logged but never buzzed.",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "Hints off: let the evaluation decide",
      paragraphs: [
        "The speech service accepts keyword hints. Intuitively, giving it the user's flight number should make it more accurate. Tested against our announcements, it did the opposite: it heard another flight's CI110 as the user's CI100, a false alarm.",
        "So the app sends plain audio, lets the recognizer write what it hears, and then simple, testable rules on the phone pick out the flight, event, gate and destination. The decision came from comparing both on 47 test announcements, not from intuition: plain audio plus rules got all 47 alert decisions right.",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "A deaf-first design system",
      paragraphs: [
        "Every element assumes the user can't hear. Semantic colors only mean one thing: green for confirmed, orange for maybe, red for go now, all checked for contrast. The status bar always says whether it is listening, paused for a call, or offline, because users can't tell by sound whether the app is still working.",
        "In Figma I built the foundations, a component library and a 14-screen UI flow, covering alert cards, lock-screen notifications, the ask-staff card, and failure states such as a phone call, no signal, or an unreachable service. Design and code share the same color and size rules, so the screens stayed consistent once built.",
      ],
    },
    {
      kicker: "KEY DECISION 5",
      heading: "Haptics, visuals and notifications in sync",
      paragraphs: [
        "For deaf users, motion isn't decoration; it carries information. I wrote 12 motion specs (M01–M12). The most important one lights a dot on the alert card with every buzz, so you can count the buzzes with your eyes too.",
        "Every spec accounts for accessibility: with Reduce Motion on, it falls back to a fade or a static state; information always comes as text, icon and vibration together, never motion alone; and nothing flashes more than three times a second.",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & VALIDATE",
    heading: "AI wrote the code. I made the calls and checked the results.",
    paragraphs: [
      "The app is built in SwiftUI, with most of the code written by AI (Claude). I broke down the requirements, defined the behavior rules, reviewed the output, and turned each judgment into a repeatable test: 61 automated tests for the announcement rules, plus 47 test announcements and a held-out set of 10 to evaluate every change.",
      "Real quality came from testing on the device. I played demo announcements from a speaker to an iPhone and checked that it buzzed while locked, paused during calls, and reconnected past the one-hour session limit. On the day I filmed the demo, the app's logs led to five fixes, including Mandarin “更换” being read as “maybe”, missed audio when the phone was locked right after pressing start, and duplicate reminders when the same announcement played in Mandarin and then English.",
      "Each of the three Meta models does what it's best at: Muse Voice Transcribe listens live, Muse Spark reads the boarding pass (including a time staff changed by hand), and the open-weight Muse Spark Open translates via Baseten. Translation only helps you read; whether an announcement is yours is always decided by testable rules.",
    ],
    operatingContext: {
      label: "RESOURCE CONDITIONS",
      stats: [
        { value: "1", label: "person for research, design, build and filming" },
        { value: "10 days", label: "hackathon window" },
        { value: "69", label: "commits" },
        { value: "61", label: "automated tests" },
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
        "AI did most of the coding, asset generation and log analysis. I owned the product direction, design principles, trade-offs and acceptance criteria.",
    },
  },
  showcase: {
    navLabel: "Design & demo",
    kicker: "DESIGN & DEMO",
    heading: "Design system, motion specs and the demo",
    intro: "All of this was designed in 10 days and built into the app. Click an image to enlarge it. Design labels are in Traditional Chinese.",
    video: {
      youtubeId: "yWcVkrgqqIE",
      title: "Shunfeng demo (3 min)",
      caption:
        "The hackathon demo. App scenes were recorded at home and replayed in the departure hall at Taipei Songshan Airport; demo announcements and narration are voiced with Kokoro (Apache 2.0).",
    },
    items: [
      {
        src: "/images/work/shunfeng/showcase-foundations.png",
        width: 1400,
        height: 1484,
        alt: "Shunfeng design system foundations",
        caption: "Foundations: brand and semantic colors (with contrast), type scale, spacing and radius",
      },
      {
        src: "/images/work/shunfeng/showcase-components.png",
        width: 1600,
        height: 3567,
        alt: "Shunfeng component library",
        caption: "Components: buttons, status bar, alert cards, lock-screen notifications and the ask-staff card",
      },
      {
        src: "/images/work/shunfeng/showcase-uiflow.png",
        width: 2830,
        height: 4000,
        alt: "Shunfeng UI flow",
        caption: "UI flow: 14 screens, with the 12 places that need motion marked",
      },
      {
        src: "/images/work/shunfeng/showcase-motion.png",
        width: 1806,
        height: 1935,
        alt: "Shunfeng motion tokens",
        caption: "Motion tokens: durations, curves and accessibility rules",
      },
      {
        src: "/images/work/shunfeng/showcase-brand.png",
        width: 3264,
        height: 1704,
        alt: "Shunfeng brand and logo exploration",
        caption: "Brand: three logo directions, and the chosen ear-plus-F mark",
      },
      {
        src: "/images/work/shunfeng/showcase-journey.png",
        width: 2560,
        height: 4800,
        alt: "Deaf traveler journey map",
        caption: "Journey map: ten stops from the car park to the gate, with risks",
      },
    ],
  },
  impact: {
    kicker: "RESULTS SO FAR",
    heading: "What is validated, and what isn't yet",
    blocks: [
      {
        heading: "Where it stands",
        body:
          "The app runs on a real iPhone: set your flight from a boarding pass photo, keep listening while locked, buzz only for your flight, translate, show the ask-staff card, and handle calls, lost signal and sessions past an hour. It was submitted to the hackathon in November 2026, and the code is public on GitHub under the MIT license.",
      },
      {
        heading: "Test results",
        body:
          "All 47 alert decisions right on test announcements after speech recognition, and 10 of 10 on a held-out set; 12 of 12 announcements caught live by the iPhone mic 1–2 m from a speaker; all 8 fields read correctly on 12 of 12 real boarding passes, about 5 s each; about 5% battery per hour with the screen off, and roughly US$0.50 of API cost per trip.",
      },
      {
        heading: "Still to validate",
        body:
          "Tests so far used synthetic demo announcements and a speaker at home, not a real terminal or deaf travelers over time. Next is putting it in the hands of deaf travelers: is the vibration language easy to learn, is the timing right, and does it hear clearly at a noisy gate?",
      },
    ],
    footnote: "Results come from synthetic test announcements and tests at home, not from a live airport.",
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "AI let one person build a whole product. The judgment stayed with me.",
    paragraphs: [
      "The biggest lesson: AI made it possible for one person to research, design, build and film a product in 10 days. But the key decisions weren't AI's: focusing on the wait at the gate, saying “maybe” when unsure, turning off hints that looked smarter, and replacing macOS system voices with an openly licensed model once I found they couldn't be used publicly. To me, being AI-native isn't letting AI decide; it's seeing real results sooner and letting evidence decide the next step.",
    ],
  },
};
