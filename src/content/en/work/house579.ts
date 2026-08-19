import type { CaseStudyContent } from "../../types";

export const house579: CaseStudyContent = {
  slug: "house579",
  meta: {
    title: "House579",
    description:
      "Building a real estate listing platform from zero by lowering onboarding friction, proving value through real outcomes, and moving the product into paid operations.",
  },
  caseNumber: "01",
  kicker: "CASE STUDY 01 · HOUSE579",
  title: "Building a real estate listing platform from zero and taking it into paid operations",
  lead:
    "We first reduced the effort required to register, verify an account, and migrate existing listings. After building supply and usage habits, we used targeted promotion to help agents see real exposure and inquiry results, establish product credibility, and create the foundation for paid operations.",
  heroImageName: "House579 Case Hero",
  metrics: [
    { value: "50K+", label: "Paid listings" },
    { value: "3,000+", label: "Agents" },
    { value: "2", label: "Brokerage HQ partnerships" },
  ],
  facts: [
    { label: "Role", value: "Head of Product / Product Lead" },
    { label: "Period", value: "Mar 2025–Aug 2026" },
    {
      label: "Stage",
      value: "0-to-1, free onboarding, monetization, and ongoing operations",
    },
    {
      label: "Scope",
      value:
        "Product direction, UX/UI, front-end implementation, data workflows, QA, and cross-functional collaboration",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "Lower the cost of trying the product, then earn the right to charge",
    paragraphs: [
      "When I joined House579 in 2025, the brand positioning, product architecture, data sources, and agent experience all had to be defined from scratch. The team was small and could not rely on a large support operation. More importantly, agents already had established platforms and little reason to take on the extra work and risk of learning a new service and moving their listings.",
      "The first priority was therefore not to build every feature at once, but to help agents register and verify quickly, migrate existing listings with minimal effort, and manage large listing volumes on mobile. This low-friction onboarding strategy helped the platform build supply, usage habits, and basic product credibility.",
      "However, a large volume of free listings alone was not enough to support monetization. Agents ultimately cared about whether their listings could generate exposure, inquiries, and potential business. After reducing the operational burden on the product side, we worked with marketing to promote selected listings and help agents see tangible results, gradually building word of mouth and a stronger foundation for paid adoption.",
    ],
    coreChallengeLabel: "Core challenge",
    coreChallengeQuote:
      "Without an established brand or a large support team, how could we make onboarding nearly effortless, prove that the platform could deliver real results, and eventually give agents a reason to pay?",
  },
  whatWeSaw: {
    kicker: "WHAT WE SAW",
    heading: "What mattered to agents changed as the product moved from onboarding to paid use",
    signals: [
      {
        number: "1",
        heading: "The same information was requested again and again",
        body:
          "Agents had to re-enter contact details across registration, identity verification, and their first listing. The issue was not resistance; the data simply did not carry forward.",
      },
      {
        number: "2",
        heading: "Ease of use alone was not enough to support monetization",
        body:
          "Free onboarding reduced the barrier to trying the platform, but willingness to pay depended on whether the service could generate exposure, inquiries, and real business opportunities. The product had to prove that it was not only easy to use, but genuinely useful.",
      },
      {
        number: "3",
        heading: "Once the product charged, the value standard changed",
        body:
          "During the free phase, speed of migration mattered most. Once agents paid, field accuracy, update speed, regulatory risk, and mobile efficiency became matters of trust and retention.",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading:
        "Reduce activation friction before redesigning the entire registration flow",
      paragraphs: [
        "I kept the existing verification flow and data model, then added quick sign-in, data handoff, and prefill so contact details carried through verification, office setup, and the first listing. This avoided a high-risk rebuild and let us test whether repeated input was the true source of friction.",
        "Agents and sales staff reported a much smoother flow and fewer cases that required manual support. We did not have a complete registration funnel at the time, so I present the outcome through Clarity samples and frontline feedback.",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "Prove value before moving agents into paid usage",
      paragraphs: [
        "The goal of the free rollout was not simply to accumulate listing volume. It was to reduce the cost of joining the platform, then use actual outcomes to build product credibility. The product team simplified registration, verification, listing migration, and day-to-day management, while marketing concentrated resources on promoting selected listings.",
        "Once agents began receiving exposure and inquiries through the platform, House579 was no longer just another free listing channel. It became a tool that could support their business. This meant the move to paid usage was built on existing habits, visible results, and word of mouth rather than on a sudden increase in cost.",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "Prioritize data quality by risk once the product became paid",
      paragraphs: [
        "I mapped field differences across brokerage brands and source sites, then prioritized regulatory content, error-prone fields, and issues that directly affected listing outcomes. Rather than spread effort evenly or clean every field at once, we addressed the highest-cost errors first.",
        "Data accuracy moved from a back-office maintenance concern to part of the paid product's value proposition, supported by an ongoing cadence for monitoring source and schema changes.",
      ],
    },
    {
      kicker: "KEY DECISION 4",
      heading:
        "Improve the highest-frequency mobile work without waiting for a backend rebuild",
      paragraphs: [
        "The previous mobile admin interface relied heavily on text-based lists, making property identification dependent on titles alone. Frequently used batch actions were also placed at the top of the page, forcing agents to move back and forth between browsing and managing listings.",
        "Since a full backend rebuild was not feasible in the short term, I focused on restructuring the front-end information hierarchy and interaction flow. I added property thumbnails, surfaced key details such as location, price, and listing status, and moved common actions—including publishing, unpublishing, deleting, and sorting—to a fixed action bar at the bottom of the screen.",
        "After the redesign, agents could identify listings more quickly and complete management tasks without leaving their current browsing position. The inventory view continued to display roughly five listings per screen while improving both scannability and operational efficiency.",
      ],
    },
  ],
  execution: {
    kicker: "EXECUTION",
    heading:
      "In a small team, find the root cause before deciding how much engineering to invest",
    paragraphs: [
      "When sales or users surfaced a problem, I reproduced the situation first and clarified the underlying cause before turning it into Product Backlog items, acceptance criteria, and priorities. One Clarity pattern showed unusually long sessions; instead of reading that as high engagement, I retraced the flow and found a sorting defect. Behavioral data only becomes useful when read in context.",
      "For questions that could be tested in a controlled way, I used data processing, Python, or front-end prototypes to get an initial answer. When backend, database, or production-service logic was involved, I clarified product rules, interface behavior, data conditions, and test cases before handing the work to engineering for integration and deployment.",
      "After launch, I continued checking outcomes through Clarity, GA4, sample reviews, and frontline feedback. This helped a resource-constrained team reserve engineering effort for problems that truly affected users or business results.",
    ],
  },
  impact: {
    kicker: "IMPACT",
    heading:
      "From low-friction onboarding and proof of value to sustainable paid operations",
    blocks: [
      {
        heading: "Build supply and usage habits first",
        body:
          "Through faster registration, identity verification, data handoff, and listing migration, the free rollout peaked at nearly 200,000 listings and established a broad supply base, agent adoption, and day-to-day usage habits.",
      },
      {
        heading: "Use outcomes to build trust",
        body:
          "The team connected selected listings with targeted marketing support, helping agents receive real exposure and inquiries. The platform's value expanded from simply making listings easier to manage to creating business opportunities, gradually building word of mouth and product credibility.",
      },
      {
        heading: "Move into paid operations",
        body:
          "With an existing supply base, established usage habits, and visible outcome experience, the paid platform reached 50K+ paid listings, 3,000+ agents, 6,000+ members, and partnerships with two brokerage brand headquarters. These outcomes came from product, sales, marketing, data, and operations working together.",
      },
    ],
  },
  reflection: {
    kicker: "REFLECTION",
    heading:
      "Free lowers the cost of trying; results create the reason to pay",
    paragraphs: [
      "House579 showed me that low-friction registration, listing migration, and mobile management can persuade agents to start using a platform, but sustained willingness to pay still depends on whether the product can generate exposure, inquiries, and operational value. Once the platform became paid, accuracy, update speed, and ease of management also became part of the trust users were paying for.",
      "If I were starting again, I would instrument registration, verification, first listing, and downstream outcomes earlier, and establish data-quality, anomaly, and regulatory monitoring sooner. Each stage has a different product problem: lower the cost of trying, prove the outcome, then protect the trust that paid usage requires.",
    ],
  },
};