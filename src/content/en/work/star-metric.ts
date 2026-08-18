import type { CaseStudyContent } from "../../types";

export const starMetric: CaseStudyContent = {
  slug: "star-metric",
  meta: {
    title: "Star Metric | From AI Experiment to Shipped Product",
    description:
      "An independent AI product experiment combining zodiac, MBTI, and Zi Wei data into a 27,648-combination content pipeline, then taking the product through UI/UX, AI-assisted development, and Android release.",
  },
  caseNumber: "04",
  kicker: "CASE STUDY 04 · STAR METRIC",
  title: "From AI experiment to shipped product",
  lead:
    "I combined zodiac, MBTI, and Zi Wei signals into personalized content, then moved from product hypothesis and UI/UX through a 27,648-combination data pipeline, quality validation, and a production Android release. Shipping also exposed acquisition and positioning as the next risks to solve.",
  heroImageName: "Star Metric Case Hero",
  metrics: [
    { value: "27,648", label: "Pre-generated personality combinations" },
    { value: "2-stage", label: "AI content pipeline" },
    { value: "Android", label: "Released on Google Play" },
    { value: "iOS", label: "App Store submission completed" },
  ],
  facts: [
    { label: "Role", value: "Independent Product Builder / Product & Design Lead" },
    { label: "Period", value: "2024–2026" },
    { label: "Stage", value: "Product Experiment · 0→1 · Release · Learn" },
    {
      label: "Scope",
      value: "Product strategy, UI/UX, AI data pipeline, front-end refinement, AI-assisted development, and release",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "Starting with a product hypothesis",
    paragraphs: [
      "I am not naturally drawn to fortune-telling, but many people around me regularly use zodiac content, personality tests, and daily forecasts. As generative AI became capable of combining larger amounts of information, I wanted to test whether multiple systems could be turned into more personalized and scalable content.",
      "The emotional starting point came from my mother. She would occasionally call after seeing a horoscope or almanac and tell me to be a little more careful that day. After she passed away, I began wondering whether a product could offer a small version of that daily reminder and companionship.",
    ],
    coreChallengeLabel: "CORE HYPOTHESIS",
    coreChallengeQuote:
      "Could AI combine multiple personality and fortune signals into a product people would return to every day, rather than a one-time generated result?",
  },
  whatWeSaw: {
    kicker: "PRODUCT HYPOTHESIS",
    heading: "Build trust before retention",
    signals: [
      {
        number: "1",
        heading: "First, it had to feel like you",
        body:
          "Personality analysis was the first trust layer. If the initial interpretation did not feel personally relevant, users had little reason to trust the daily status or advice that followed.",
      },
      {
        number: "2",
        heading: "Relationship matching was not MVP",
        body:
          "Deeper relationship analysis would add little value before the first layer of trust was established, and the funnel did not justify prioritizing it early.",
      },
      {
        number: "3",
        heading: "Retention was the real goal",
        body:
          "Success was not completing a test once. The hypothesis was that users would return for a daily check-in, especially when a day felt off and they wanted another perspective.",
      },
      {
        number: "4",
        heading: "Zi Wei stayed under the hood",
        body:
          "The primary audience was already familiar with zodiac signs and MBTI. Zi Wei added another personalization signal without requiring users to understand the underlying system first.",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "Personality first, daily status next",
      paragraphs: [
        "The first-release flow moved from Google or Apple sign-in to personality questions, birth information confirmation, personality analysis, Zi Wei and zodiac charts, and then daily status. Birth information was not freely editable after confirmation to reduce repeated trial-and-error profiles and keep a stable personal identity in the product.",
        "I postponed relationship matching and focused limited effort on two questions: could the first analysis establish enough trust, and could a daily experience create a reason to return?",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "Pre-generate 27,648 combinations",
      paragraphs: [
        "12 zodiac signs × 12 palaces × 12 primary stars × 16 MBTI types created a finite set of 27,648 combinations. Because the product was still experimental, generating every result at runtime would have introduced recurring inference cost before value and retention were proven.",
        "Instead, Prompt A converted each combination into structured content factors, while Prompt B turned those factors into user-facing interpretation. The results were consolidated into JSON and imported through Firebase CLI, concentrating AI cost in the data-building stage instead of every product interaction.",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "Turn AI quality into a testable system",
      paragraphs: [
        "At scale, different combinations began converging on similar wording and sentence structures. The problem was not solved by simply switching models; I went back to prompt design, output structure, and the quality rules around the dataset.",
        "I iterated the prompts, split different chart characteristics into separate paths, and added semantic and vocabulary constraints, JSON validation, content-length checks, and sampled quality review. Repairs selectively regenerated only affected records, preserving roughly 55% that did not need to be rerun. Retry logic, rate-limit handling, and token/thread tuning helped manage quality, throughput, and cost together.",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "Let AI code; keep product judgment human",
      paragraphs: [
        "I defined the UI flow and designed the interface in Figma. At the time, AI-generated design was not at the quality bar I wanted, so I established the interaction and visual direction first, then used AI coding tools for implementation and refined the interface and behavior with my own front-end skills.",
        "Claude handled most implementation, while ChatGPT and Gemini were used for strategy discussion, technical validation, and second opinions. On the back end, I focused on product rules, risk, and security requirements and used multiple AI systems for cross-checking. AI expanded what one person could execute, while product direction, UX, validation criteria, and trade-offs remained mine.",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & SHIP",
    heading: "From Figma to production release",
    paragraphs: [
      "After defining the product flow and UI, I used AI-assisted development to move through implementation, Firebase integration, testing, and fixes, then handled interface refinement, the app icon, store screenshots, and release assets. AI helped generate source visual material, while I used Photoshop for art direction, composition, and final production.",
      "The Android version was released on Google Play, and the iOS version reached App Store submission. The experiment therefore moved through the full product lifecycle—from hypothesis, data, and UX to implementation, platform review, and public release—rather than stopping at a prototype.",
    ],
    operatingContext: {
      label: "OPERATING CONTEXT",
      stats: [
        { value: "1 person", label: "Independent product experiment" },
        { value: "3 AI", label: "Claude · ChatGPT · Gemini" },
        { value: "2 platforms", label: "Android release · iOS submission" },
      ],
    },
    roleCard: {
      label: "MY ROLE",
      items: [
        "Product strategy & MVP scope",
        "UI flow & UI/UX design in Figma",
        "AI data pipeline & quality rules",
        "Front-end refinement & validation",
        "Store assets, submission & release",
      ],
      footnote:
        "AI handled most initial code implementation; I owned product direction, UI/UX, requirements, validation criteria, and release.",
    },
  },
  impact: {
    kicker: "SHIP & LEARN",
    heading: "Shipping exposed the real bottleneck",
    blocks: [
      {
        heading: "End-to-end delivery",
        body:
          "Star Metric moved from concept to an Android production release, proving that an AI-assisted workflow could take a solo product experiment beyond ideas and prototypes into a public product.",
      },
      {
        heading: "A repairable data pipeline",
        body:
          "The 27,648 records were not treated as a one-time generation job. Prompt branching, structure validation, sampling, and selective reruns made the dataset diagnosable, repairable, and versionable.",
      },
      {
        heading: "Acquisition came first",
        body:
          "Organic usage was close to zero without paid promotion. That meant the retention hypothesis did not yet have enough traffic for a reliable answer—and exposed acquisition and marketing as a capability gap in the original experiment.",
      },
      {
        heading: "iOS forced a positioning rethink",
        body:
          "App Store review pushed me to reconsider differentiation and category positioning. I explored shifting the product toward a broader daily-status experience, but paused further investment while both positioning and acquisition remained unresolved.",
      },
    ],
    footnote:
      "The value of this case is completing a product experiment and gaining feasibility and market learning; release itself is not presented as market validation.",
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "Pause, then carry the learning forward",
    paragraphs: [
      "AI dramatically lowered the cost of building data and software, but it did not solve market entry, differentiation, or acquisition. The project reinforced that building faster matters most when the highest-risk assumption is identified early.",
      "I paused the next Star Metric iteration and carried what I learned about AI collaboration, data quality, cost control, release, and platform constraints into my next product experiment, SpeedMeter, with more validation moved ahead of full development.",
    ],
  },
};
