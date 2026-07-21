import type { CaseStudyContent } from "../../types";

export const house579: CaseStudyContent = {
  slug: "house579",
  meta: {
    title: "House579",
    description:
      "The platform started from zero. We first lowered the cost of trying a new service, then addressed the higher standards for data quality and day-to-day management that came with paid operations.",
  },
  caseNumber: "01",
  kicker: "CASE STUDY 01 · HOUSE579",
  title: "Building a real estate listing platform from zero and taking it into paid operations",
  lead: "The platform started from zero. We first lowered the cost of trying a new service, then addressed the higher standards for data quality and day-to-day management that came with paid operations.",
  heroImageName: "House579 Case Hero",
  metrics: [
    { value: "Nearly 200K", label: "Listings onboarded during free rollout" },
    { value: "50K+", label: "Paid listings" },
    { value: "3,000+", label: "Agents" },
    { value: "2", label: "Brokerage HQ partnerships" },
  ],
  facts: [
    { label: "Role", value: "Head of Product / Product Lead" },
    { label: "Period", value: "Mar 2025–Present" },
    { label: "Stage", value: "0-to-1, free onboarding, monetization, and ongoing operations" },
    {
      label: "Scope",
      value: "Product direction, UX/UI, front-end implementation, data workflows, QA, and cross-functional collaboration",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "When I joined, the platform did not exist",
    paragraphs: [
      "When I joined House579 in 2025, the brand positioning, product architecture, data sources, and agent experience all had to be defined from scratch. The team was small and could not rely on a large support operation. More importantly, agents already had established platforms and little reason to take on the extra work and risk of learning a new service and moving their listings.",
      "That made the first milestone clear: not to build every feature, but to help agents complete verification, migrate existing listings, and manage high listing volumes on mobile.",
    ],
    coreChallengeLabel: "Core challenge",
    coreChallengeQuote:
      "Without an established brand or a large support team, how could we get agents to move over, keep using the platform, and eventually pay for it?",
  },
  whatWeSaw: {
    kicker: "WHAT WE SAW",
    heading: "Three signals from real use changed our priorities",
    signals: [
      {
        number: "1",
        heading: "The same information was requested again and again",
        body: "Agents had to re-enter contact details across registration, identity verification, and their first listing. The issue was not resistance; the data simply did not carry forward.",
      },
      {
        number: "2",
        heading: "Long sessions were not always a good sign",
        body: "Clarity sessions showed agents repeatedly paging after editing a listing. Recreating the flow revealed a sorting defect. Behavioral data only becomes useful when read in context.",
      },
      {
        number: "3",
        heading: "Once the product charged, the value standard changed",
        body: "During the free phase, speed of migration mattered most. Once agents paid, field accuracy, update speed, regulatory risk, and mobile efficiency became matters of trust.",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "Reduce activation friction before redesigning the entire registration flow",
      paragraphs: [
        "I kept the existing verification flow and data model, then added quick sign-in, data handoff, and prefill so contact details carried through verification, office setup, and the first listing. This avoided a high-risk rebuild and let us test whether repeated input was the true source of friction.",
        "Agents and sales staff reported a much smoother flow and fewer cases that required manual support. We did not have a complete registration funnel at the time, so I present the outcome through Clarity samples and frontline feedback rather than claim a precise conversion lift.",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "Prioritize data quality by risk once the product became paid",
      paragraphs: [
        "I mapped field differences across brokerage brands and source sites, then prioritized regulatory content, error-prone fields, and issues that directly affected listing outcomes. Rather than spread effort evenly or clean every field at once, we addressed the highest-cost errors first.",
        "Data accuracy moved from a back-office maintenance concern to part of the paid product's value proposition, supported by an ongoing cadence for monitoring source and schema changes.",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "Improve the highest-frequency mobile work without waiting for a backend rebuild",
      paragraphs: [
        "On the old mobile admin, a screen showed only about 1.5 listings. There was excessive whitespace, no thumbnails, and common actions were scattered. With a backend overhaul not feasible in the short term, I redesigned the information hierarchy, card density, thumbnails, and fixed action area on the front end.",
        "After the change, the same screen could show about five listings, making large inventories faster to scan and manage. I treat this as evidence of an interface improvement, not as a company-level KPI.",
      ],
    },
  ],
  execution: {
    kicker: "EXECUTION",
    heading: "In a small team, I carried problems to the point where they could be tested and shipped",
    paragraphs: [
      "When sales or users surfaced a problem, I reproduced it first, then translated it into requirements, acceptance criteria, and priorities. I built and validated anything feasible through front-end work, Python, or static data workflows. When backend, database, or production-service logic was involved, I clarified the product rules, interface, and test cases before engineering integration and deployment.",
      "After launch, I continued validating issues through Clarity, GA4, sample checks, and frontline feedback. That let the team establish the root cause and test direction before committing scarce engineering capacity.",
    ],
  },
  impact: {
    kicker: "IMPACT",
    heading: "From free onboarding to sustainable paid operations",
    blocks: [
      {
        heading: "User experience",
        body: "Agents no longer had to re-enter the same information across registration, verification, and their first listing. On mobile, they could scan, identify, and manage more listings within the same screen.",
      },
      {
        heading: "Business and operations",
        body: "The free rollout supported nearly 200,000 listings. After monetization, the platform reached 50K+ paid listings, 3,000+ agents, 6,000+ members, and partnerships with two brokerage brand headquarters. These outcomes came from product, sales, marketing, data, and operations working together.",
      },
      {
        heading: "Team capability",
        body: "The team developed a repeatable method: use behavioral data to locate the context behind frontline complaints, then reproduce and classify the issue; prioritize data problems by regulatory risk, likelihood, and reach.",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "Problems tolerated in a free product become trust issues once users pay",
    paragraphs: [
      "House579 showed me how quickly the definition of value changes across product stages. In the free phase, agents mainly needed to migrate and use the product. Once they paid, accuracy, update speed, and operational efficiency became reasons to stay or leave.",
      "If I were starting again, I would instrument registration, verification, and first listing earlier, and establish data-quality, anomaly, and regulatory monitoring as foundational capabilities. A product lead cannot finish everything at once; the job is to identify the problem with the greatest user and business impact at each stage.",
    ],
  },
};
