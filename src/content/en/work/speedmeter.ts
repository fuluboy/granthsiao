import type { CaseStudyContent } from "../../types";

export const speedMeter: CaseStudyContent = {
  slug: "speedmeter",
  meta: {
    title: "SpeedMeter | Using AI to validate product ideas faster",
    description:
      "A driving-assistance product experiment focused on alert timing, road-data quality, and in-car usability, using AI to speed up discovery, prototyping, planning, development, and validation.",
  },
  caseNumber: "05",
  kicker: "CASE STUDY 05 · SPEEDMETER",
  title: "Using AI to validate product ideas faster",
  lead:
    "I started with problems I had repeatedly noticed while using speed-camera apps: distracting alerts, questionable data, and interfaces that were not always easy to read while driving. I also used the project to bring AI into discovery, prototyping, development, and validation so ideas could reach a real device sooner. Product direction, data trust, and acceptance criteria still remained human decisions.",
  heroImageName: "SpeedMeter Case Hero",
  metrics: [
    { value: "0→1", label: "From idea to a testable build" },
    { value: "AI", label: "Discovery, prototyping, development, and planning" },
    { value: "GPS", label: "Simulation completed before road testing" },
  ],
  facts: [
    { label: "Role", value: "Independent Product Builder / Product & Design Lead" },
    { label: "Period", value: "2026 · In Progress" },
    { label: "Stage", value: "Product Experiment · Validation" },
    {
      label: "Responsibility",
      value: "Product planning, user flows, UI/UX, data quality, AI-assisted development, testing, and validation",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "Starting with problems I kept noticing on the road",
    paragraphs: [
      "I regularly use speed-camera apps when I drive. What matters most to me is whether an alert is accurate, whether it comes at the right moment, and whether it keeps interrupting music or adding unnecessary distraction. Existing products already cover the basic need, but I saw room to improve the alert behavior, information hierarchy, and data quality.",
      "Instead of beginning with a long feature list, I narrowed the first questions down to three things: can the alert experience be better, can the road data be trusted, and can a new interface direction get onto a real device quickly enough to test?",
    ],
    coreChallengeLabel: "CORE QUESTION",
    coreChallengeQuote:
      "Can I create a more accurate, better-timed speed-camera experience without adding more driving distraction — and use AI to move product ideas into real testing faster?",
  },
  whatWeSaw: {
    kicker: "PRODUCT HYPOTHESIS",
    heading: "Get the few things that matter most right first",
    signals: [
      {
        number: "1",
        heading: "Alert quality matters more than feature count",
        body:
          "Missing a fixed camera, showing the wrong location, or alerting too often can quickly break trust. The first version therefore focused on whether alerts were reliable, rather than trying to ship every possible feature.",
      },
      {
        number: "2",
        heading: "Alert behavior should follow the driving state",
        body:
          "Approaching a camera, already slowing down, still speeding, and passing the point do not need the same level of interruption. Highway traffic information does not always need voice either. Timing, frequency, and whether an alert uses sound or visuals are all part of the experience.",
      },
      {
        number: "3",
        heading: "The experience is only as good as the underlying data",
        body:
          "A polished dashboard cannot make up for a wrong camera location or device type. Data sources, updates, and validation rules therefore had to be treated as part of the product from the beginning.",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "Define the alert behavior before adding more features",
      paragraphs: [
        "I broke one alert into several states — approaching, near range, passing, and continued speeding — then defined the visual, audio, and repeat-alert behavior for each. If the driver has already slowed down, the product keeps only the necessary reminder; if the driver is still speeding, it can alert again based on distance.",
        "I used the same principle for highway traffic information. Congestion, debris, or lane incidents can appear on the dashboard without turning every event into another spoken interruption. The first step is deciding what the driver actually needs at that moment, then choosing how the feature should appear.",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "Trust the data before trying to maximize coverage",
      paragraphs: [
        "Speed-camera data came from government open data, local sources, and third-party references. They differed in update frequency, field structure, and reliability. Adding more records was not useful if I could no longer tell where a coordinate or device type had come from when something looked wrong.",
        "I therefore linked source records, transformation rules, data contracts, and final output into one traceable process, with official data as the primary foundation. Third-party data could help reveal possible gaps, but it did not replace official evidence. The goal was to know why each record was allowed into the product, not simply to collect the largest dataset.",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "Use AI to clarify the problem before asking it to write product documents",
      paragraphs: [
        "I did not start by asking ChatGPT to generate a complete PRD. Instead, I used it as an interviewer, answering questions about driving behavior, pain points, target users, constraints, and success criteria. After I had corrected or clarified the assumptions, the discussion was organized into a Lean Canvas, Impact Mapping, User Flow, and Product Backlog.",
        "That reduced the amount of context AI had to invent on its own. It first helped me make the thinking explicit, then turned the discussion into documents I could review and revise. What to build, what to postpone, and which assumptions were worth testing still came back to real usage, competitor observations, and product judgment.",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "Turn a visual reference into a working build before investing in polish",
      paragraphs: [
        "When I found an interface direction that might work for an in-car dashboard, I gave the reference image to Codex and used it to produce a structurally similar UI that could actually run. I then checked information density, type size, visual hierarchy, and interaction on a real device rather than judging everything from a static mockup.",
        "The point was not to let AI replace design. It was to answer a practical question earlier: does this direction still work when it is running in the real context? A visual idea could quickly become something I could see and use, making it easier to refine, rework, or drop before spending more time on polish.",
      ],
    },
    {
      kicker: "KEY DECISION 5",
      heading: "Move confirmed decisions directly into Trello",
      paragraphs: [
        "SpeedMeter quickly split into several workstreams: data, alert rules, UI, Android implementation, testing, and release preparation. As the work expanded, decisions from product discussions could easily end up scattered across different places.",
        "I connected ChatGPT with Trello so confirmed requirements could be turned into backlog items and cards without repeating the same organization work. AI reduced the manual handoff, while priority, what should wait, and whether a card was truly complete still depended on product goals and acceptance criteria.",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & VALIDATE",
    heading: "Use AI to move faster, then test against the same standards",
    paragraphs: [
      "Once the product rules were clear, I used AI-assisted development to move the Android implementation forward. Every change still had to pass the same checks: unit and integration tests, lint, build validation, data-format checks, and schema validation. It did not matter whether the code came from me or AI; the acceptance standard stayed the same.",
      "I also used GPS simulation to reproduce approaching a camera, speeding, and passing the point before moving into road testing. The project reached a testable stage quickly, but speed was not the goal by itself. The important part was keeping problem framing, data judgment, and validation intact while the execution loop became shorter.",
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
        "AI accelerated research organization and much of the initial implementation. I remained responsible for product direction, data trust, UX, prioritization, and acceptance criteria.",
    },
  },
  impact: {
    kicker: "CURRENT VALIDATION",
    heading: "What I know so far — and what still needs the road",
    blocks: [
      {
        heading: "Where the product is now",
        body:
          "The Android build is already usable, and GPS simulation can reproduce the main alert states including approach, speeding, and passing. The product is ready for the next level of real-road validation.",
      },
      {
        heading: "What this workflow has already shown",
        body:
          "AI can shorten the path from requirement clarification and interface exploration to a working build. Fixed data rules and automated tests also give rapid changes a consistent way to be checked rather than relying on visual inspection alone.",
      },
      {
        heading: "What still needs validation",
        body:
          "The next questions are real-world false positives and misses, alert timing, driving distraction, and whether the interface and alert behavior are genuinely better than my current experience with existing products. Longer-term usage will need more real-world data before I can make that claim.",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "AI can make validation faster, but it cannot replace the thinking",
    paragraphs: [
      "The biggest lesson from SpeedMeter is that AI can compress work that normally takes several rounds — interview synthesis, product documents, prototypes, implementation, and testing. What cannot be skipped is clarifying the problem before building and validating the result afterward. For me, the value of AI is not generating an entire product in one shot; it is seeing a real result sooner, then deciding whether the next step is worth taking.",
    ],
  },
};
