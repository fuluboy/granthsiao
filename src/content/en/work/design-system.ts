import type { CaseStudyContent } from "../../types";

export const designSystem: CaseStudyContent = {
  slug: "design-system",
  meta: {
    title: "Design System",
    description:
      "I proposed and led the company's first Design System, turning duplicated and inconsistent patterns across three product teams into shared tokens, a Figma Library, a front-end component library, and a governance process.",
  },
  caseNumber: "03",
  kicker: "CASE STUDY 03 · DESIGN SYSTEM",
  title: "Building a cross-product Design System from fragmented components and interaction patterns",
  lead: "I proposed and led the company's first Design System, turning duplicated and inconsistent patterns across three product teams into shared tokens, a Figma Library, a front-end component library, and a governance process.",
  heroImageName: "Design System Case Hero",
  metrics: [
    { value: "3", label: "Product teams adopted" },
    { value: "2 weeks", label: "First production components shipped" },
  ],
  facts: [
    { label: "Role", value: "Chief of Experience / Design System Initiator and Governance Lead" },
    { label: "Period", value: "2023–2025" },
    { label: "Stage", value: "Design workflow modernization, componentization, and cross-team governance" },
    {
      label: "Team",
      value: "3 UI/UX designers; 2 front-end engineers across 3 product teams, working cross-functionally with PMs",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "The same interaction could have three different answers across three products",
    paragraphs: [
      "The company was moving from legacy design tools to Figma, while front-end teams were becoming more proficient with Vue. An audit of existing products showed that the problem went beyond visual inconsistency: buttons, forms, and modals serving the same purpose could look and behave differently. Users had to relearn patterns, while engineers maintained duplicate code and multiple versions.",
      "I proposed the initiative to the general manager and VP of Product, using the tool and technology transition to build the design library, front-end components, and decision process together—not just a new UI guideline.",
    ],
    coreChallengeLabel: "Core challenge",
    coreChallengeQuote:
      "Existing products could not stop for a full rebuild, and design and front-end belonged to different organizations. How could we create a shared foundation that three teams would actually use without slowing everyday delivery?",
  },
  whatWeSaw: {
    kicker: "WHAT WE SAW",
    heading: "Inconsistent components were only the surface problem. The real gap was a shared decision method.",
    signals: [
      {
        number: "1",
        heading: "Experience fragmentation became engineering debt",
        body: "Components serving the same purpose behaved differently, forcing users to relearn patterns and preventing the front end from consolidating and reusing implementations.",
      },
      {
        number: "2",
        heading: "The hardest question was when to add a new component or allow an exception",
        body: "Teams agreed on reuse in principle, but new requests still needed a shared method for deciding whether to extend an existing component, create a new one, or keep a product-specific variation.",
      },
      {
        number: "3",
        heading: "A one-time full rebuild was not realistic",
        body: "All three products were still shipping. The Design System had to grow through real product work rather than pause delivery for a complete rewrite.",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "Put the Design System into every sprint instead of launching a one-time redesign",
      paragraphs: [
        "The team spent about a month auditing pages and components across the three products and establishing foundational tokens for color, type, and spacing. Rather than open a long standalone refactor, we built standard components through new product work and added them to both the Figma Library and front-end component library.",
        "Old and new components coexisted in the short term, but delivery did not stop. The first production-ready components shipped in the next two-week sprint, and later sprints gradually replaced legacy patterns.",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "Use three questions to decide whether to extend, create, or specialize",
      paragraphs: [
        "When a team proposed a new component or variation, we asked three questions: Does it stay within the token system? Does it serve a meaningfully different product purpose? Can we identify repeatable future use cases? Valid differences were allowed, but every production component entered the library for tracking.",
        "A modal became a representative case. Title, close control, content, and scrolling were defined as reusable structure. A subtitle, custom width, or background color did not become a new standard unless it served a distinct product purpose. The conversation shifted from personal preference to inspectable product reasoning.",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "Make component decisions part of everyday delivery",
      paragraphs: [
        "Once a new need entered a sprint, design, front-end, and PM worked through the use case, reuse potential, implementation approach, and acceptance criteria together. Daily stand-ups surfaced similar needs across products early, while weekly Design QA handled shared scope and exceptions.",
        "When a requirement conflicted with existing rules, I helped decide whether to extend a shared component, introduce controlled variants or props, or keep a clearly justified product-specific exception. We documented the use case and constraints so the decision could be revisited if another product later needed something similar.",
      ],
      infoCard: {
        label: "GOVERNANCE CADENCE",
        rows: [
          {
            label: "DAILY STAND-UP",
            body: "Align on active pages, component changes, and Token requirements",
          },
          {
            label: "WEEKLY DESIGN QA",
            body: "Review cross-product impact, reuse potential, and overlapping specifications",
          },
          {
            label: "DECISION",
            items: [
              "Extend an existing component",
              "Introduce controlled Variants or Props",
              "Retain a clearly defined product-specific exception",
            ],
          },
        ],
      },
    },
  ],
  execution: {
    kicker: "EXECUTION",
    heading: "With limited resources, the Design System had to ship with the product",
    paragraphs: [
      "As Chief of Experience, I led three UI/UX designers, while two front-end engineers supported three product teams. Spending several months building a complete component library upfront would have slowed product delivery and risked creating specifications without enough real use cases. We therefore integrated Design System work into the existing two-week sprint cycle and prioritized components that were needed immediately and had clear reuse value.",
      "My role was to keep design, front-end, and PM working from the same decision model: what should be shared, what should remain different, and how to keep the Figma Library, front-end components, and production UI aligned. That allowed the system to mature through real product use without stopping three teams for a one-time rebuild.",
    ],
    supportingMetrics: [
      { value: "1 month", label: "Audit and tokens completed" },
      { value: "2 weeks", label: "First components shipped" },
      { value: "2023–2025", label: "Ongoing governance" },
    ],
    supportingMetricsCaption: "Rollout timeline",
    operatingContext: {
      label: "OPERATING CONTEXT",
      stats: [
        { value: "3", label: "Product Teams" },
        { value: "3", label: "UI/UX Designers" },
        { value: "2", label: "Frontend Engineers" },
        { value: "2 Weeks", label: "Sprint Cycle" },
      ],
    },
    roleCard: {
      label: "MY ROLE",
      items: [
        "Defined the Design System adoption and governance approach",
        "Participated in daily stand-ups and led Design QA",
        "Set cross-product reuse boundaries and component priorities",
        "Decided when to revise a shared component, add controlled variables, or retain an exception",
      ],
      footnote: "Build the system through real product use, rather than completing it in isolation.",
    },
  },
  impact: {
    kicker: "IMPACT",
    heading: "The Design System became a shared way of working across three product teams",
    blocks: [
      {
        heading: "Design and product",
        body: "Designers could work directly from shared Figma components and tokens. Moving from wireframes to UI and mockups no longer meant redefining typography, spacing, and common layouts. UI/UX and PM discussions could focus on flows, information hierarchy, and the actual product problem.",
      },
      {
        heading: "Engineering and delivery",
        body: "Front-end components gradually consolidated into a shared library. New pages could reuse existing implementations, reducing duplicate code and mismatches between design files and production.",
      },
      {
        heading: "Organization",
        body: "All three product teams adopted the shared tokens, Figma Library, and front-end component library. They also adopted a common decision path: test whether an existing component can support the need, then decide whether to evolve the shared component, add controlled variables, or preserve a justified product-specific variation.",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "Shared components let improvements accumulate systematically",
    paragraphs: [
      "After adoption across three product teams, I saw that shared components did more than speed up delivery: they created a systematic way to respond to user feedback. When data, testing, or frontline feedback revealed a problem, we first identified whether it belonged to a single product context or the shared component itself. If it was common, the component specification and interaction could evolve once and benefit every related product.",
      "If I were doing it again, I would introduce version control for the Figma component library earlier, documenting each token and component change, its use cases, impact scope, and release date. That would give multi-owner maintenance, cross-team adoption, and future iteration a clearer foundation while reducing version drift between design and production.",
    ],
  },
};