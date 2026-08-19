import type { CaseStudyContent } from "../../types";

export const starMetric: CaseStudyContent = {
  slug: "star-metric",
  meta: {
    title: "Star Metric | From AI Experiment to Shipped Product",
    description:
      "A full 0-to-1 product experiment spanning product hypothesis, personalized data architecture, UI/UX, AI-assisted development, and Android release.",
  },
  caseNumber: "04",
  kicker: "CASE STUDY 04 · STAR METRIC",
  title: "From AI experiment to shipped product",
  lead:
    "Star Metric moved from product hypothesis, personalized data architecture, and UI/UX through AI-assisted development and an Android production release. After launch, real usage and platform review shifted the focus toward acquisition and positioning.",
  heroImageName: "Star Metric Case Hero",
  metrics: [
    { value: "27,648", label: "Pre-generated personality combinations" },
    { value: "Android", label: "Released on Google Play" },
    { value: "iOS", label: "Reached App Store review" },
  ],
  facts: [
    { label: "Role", value: "Independent Product Builder / Product & Design Lead" },
    { label: "Period", value: "2024–2026" },
    { label: "Stage", value: "Product Experiment · 0→1 · Release · Validation" },
    {
      label: "Scope",
      value: "Product strategy, UI/UX, AI data workflow, front-end refinement, AI-assisted development, and release",
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
        heading: "Make the first result worth trusting",
        body:
          "Personality analysis was the first moment users could decide whether the product understood them. If that first result did not feel personally relevant, there was little reason to keep using the daily experience.",
      },
      {
        number: "2",
        heading: "Keep complexity behind the experience",
        body:
          "Users did not need to understand Zi Wei, Western astrology, or the calculations behind them. Those systems worked as personalization signals underneath the product, while the interface surfaced only results users could understand and act on.",
      },
      {
        number: "3",
        heading: "Validate daily use, not a one-time test",
        body:
          "The real product question was whether users would keep returning to check their daily status and gradually treat it as part of their everyday reference routine.",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "Personality first, daily status next",
      paragraphs: [
        "The first-release flow moved from Google or Apple sign-in to personality questions, birth information confirmation, personality analysis, Zi Wei and zodiac charts, and then daily status. Birth information was not freely editable after confirmation, helping keep the personalized profile stable instead of encouraging repeated trial-and-error inputs.",
        "The MVP focused on two questions: was the first result worth trusting, and was there enough ongoing value to give users a reason to return?",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "Pre-generate 27,648 content combinations",
      paragraphs: [
        "12 zodiac signs × 12 palaces × 12 primary stars × 16 personality types created a finite set of 27,648 combinations. Because the product was still experimental, calling a model on every use would have added recurring cost before retention was proven. The finite solution space made pre-generation a better fit for the product stage.",
        "I built the content dataset upfront: Prompt A turned each combination into structured content factors, while Prompt B converted those factors into user-facing interpretation. The output was consolidated into JSON and imported through Firebase CLI, concentrating AI cost in the data-building stage instead of every product interaction.",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "Turn AI content quality into a testable workflow",
      paragraphs: [
        "At scale, different combinations began converging on similar wording and sentence structures, reducing the sense of personalization. The answer was not simply to switch models, but to revisit prompt design, output structure, and the quality rules around the dataset.",
        "I reworked the prompts and output structure, added semantic, vocabulary, and JSON-format checks, and introduced sampled review. When quality issues appeared, only affected records were regenerated instead of rerunning the entire dataset. That turned generative AI from a one-off content tool into a data workflow that could be inspected, diagnosed, and repaired over time.",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading: "Use AI to extend execution capacity while keeping product and UX decisions human-owned",
      paragraphs: [
        "I first defined the product flow and UI/UX in Figma, then used AI development tools to move implementation forward and relied on my front-end skills to review and refine the interface, interaction details, and technical feasibility.",
        "AI handled much of the initial implementation and technical checking, while I owned product direction, UX, prioritization, validation criteria, and final trade-offs. That expanded what one person could execute without handing over product judgment.",
      ],
    },
  ],
  execution: {
    kicker: "BUILD & SHIP",
    heading: "From Figma to production release",
    paragraphs: [
      "After defining the product flow and UI, I used AI-assisted development to move through implementation, Firebase integration, testing, and fixes, then completed the Android and iOS release process. Android was released on Google Play, while iOS reached App Store review.",
      "The experiment therefore moved through hypothesis → design → implementation → release instead of stopping at a prototype.",
    ],
    roleCard: {
      label: "MY ROLE",
      items: [
        "Product strategy & MVP scope",
        "User flow & UI/UX design in Figma",
        "AI data workflow & quality rules",
        "Front-end refinement & validation",
        "Release planning & store submission",
      ],
      footnote:
        "AI handled much of the initial code implementation; I owned product direction, UI/UX, requirements, validation criteria, and release.",
    },
  },
  impact: {
    kicker: "SHIP & LEARN",
    heading: "After launch, the risk shifted to the market",
    blocks: [
      {
        heading: "From prototype to a released product",
        body:
          "The product moved from concept, data, and UI/UX through to an Android production release, showing that the AI-assisted workflow could support a complete path from product hypothesis to a public release.",
      },
      {
        heading: "A repairable AI data workflow",
        body:
          "Prompt branching, format checks, sampling, and selective reruns made generated content diagnosable and locally repairable instead of requiring a full regeneration whenever quality issues appeared.",
      },
      {
        heading: "The next risk was acquisition and positioning",
        body:
          "Organic traffic after launch was too limited to give the original retention hypothesis enough data for a reliable answer. App Store review also exposed questions around differentiation and category positioning. I explored a broader daily-status direction, but chose not to invest further while acquisition and positioning remained unresolved.",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "Move the highest-risk validation earlier",
    paragraphs: [
      "The most important learning from Star Metric was that AI can dramatically reduce build cost, but it does not solve market entry, positioning, or acquisition. In later product experiments, I moved more validation ahead of full development, focusing first on the highest-risk assumption before deciding how much build effort was justified.",
    ],
  },
};