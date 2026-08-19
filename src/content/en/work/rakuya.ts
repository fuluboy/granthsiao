import type { CaseStudyContent } from "../../types";

export const rakuya: CaseStudyContent = {
  slug: "rakuya-data-product",
  meta: {
    title: "Rakuya Agent Intelligence",
    description:
      "Turning fragmented market signals into actionable daily listing intelligence for real estate agents, then expanding the product into brand trials, system integrations, and paid partnerships.",
  },
  caseNumber: "02",
  kicker: "CASE STUDY 02 · RAKUYA AGENT INTELLIGENCE",
  title:
    "Turning fragmented market signals into actionable daily listing intelligence",
  lead:
    "Starting with agents’ daily routine of checking multiple platforms for new listings, price changes, and delistings, I led the development of a workflow that turned those signals into intelligence agents could assess and act on—then expanded it into brand trials, system integrations, and paid partnerships.",
  heroImageName: "Rakuya Agent Intelligence Case Hero",
  metrics: [
    { value: "3 months", label: "Technical MVP completed" },
    { value: "5–10 min", label: "Daily listing scan" },
    { value: "~70%", label: "Search sessions opened listing details" },
    { value: "2", label: "Paid brand renewals" },
  ],
  facts: [
    { label: "Role", value: "Chief of Experience / Product Lead" },
    { label: "Period", value: "Aug 2021–Mar 2025" },
    {
      label: "Stage",
      value:
        "Product discovery, MVP, data foundations, workflow integration, and commercialization",
    },
    {
      label: "Team",
      value:
        "1 PM, 3 UI/UX designers, and 3 front-end engineers; collaboration with backend, sales, field teams, and brand stakeholders",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading:
      "The market had plenty of data. Agents lacked a workflow for turning change into action.",
    paragraphs: [
      "Established tools already supported one-off property and community analysis. Rakuya’s opportunity was to use signals from its listing platform, community records, transaction data, and buyer activity to create a daily prospecting workflow for real estate agents.",
      "Every morning, agents checked multiple brokerage websites for new listings, price reductions, and delistings, then compared addresses, pricing history, and community information. The work was repetitive but difficult to skip, because a promising new listing was often most valuable shortly after entering the market.",
    ],
    coreChallengeLabel: "Core challenge",
    coreChallengeQuote:
      "How could we turn fragmented, noisy market signals that required industry expertise into listing intelligence agents could quickly trust, assess, and act on?",
  },
  whatWeSaw: {
    kicker: "WHAT WE SAW",
    heading:
      "Three observations showed that the product needed to go beyond search",
    signals: [
      {
        number: "1",
        heading:
          "Finding new opportunities was a daily, non-negotiable task",
        body:
          "Agents already knew how to search. The real problem was fragmented and duplicated information, along with the time required to decide which market changes deserved attention.",
      },
      {
        number: "2",
        heading:
          "A platform’s “new listing” was not always new to the market",
        body:
          "Expired mandates, co-brokering, relisting, and repeated listing-status changes could all create false positives. If the product relied only on a single platform timestamp, agents would quickly lose trust in the report.",
      },
      {
        number: "3",
        heading:
          "Community data was becoming essential to address resolution",
        body:
          "As new developments increased, buyers and listing platforms increasingly used communities as an entry point. Building stable community and property records early would improve listing assignment, address resolution, and transaction matching.",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading:
        "Map the full workflow before choosing the first MVP task",
      paragraphs: [
        "I mapped the agent workflow from finding opportunities and prospecting to listing, selling, and managing buyer relationships. We then selected an entry point that balanced user value, data feasibility, and implementation constraints: territory, new-to-market listings, and the address and market context needed to assess them. The first release needed to help an agent complete a genuine prospecting task, rather than present isolated search results.",
        "The team completed a technical MVP in about three months. We continued refining the data rules, product entry points, and interpretation logic, released a version agents could use in practice around ten months later, and then expanded into daily reports, street and community subscriptions, transaction history, and brand partnerships.",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading:
        "Build the data foundation as communities became a primary search entry point",
      paragraphs: [
        "As new developments grew rapidly in Taiwan, buyers increasingly searched by community and agents increasingly focused their prospecting on specific communities. While creating new community records, I chose to collect foundational building-registry information and automate the normalization process.",
        "The resulting data supported more than community pages. It became a shared foundation for assigning listings to the correct property, resolving addresses, matching transaction records, and interpreting new opportunities. This infrastructure was less visible within any single release, but reduced the need for recurring manual fixes as the product expanded.",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading:
        "Turn new-to-market listings into a daily prospecting task",
      paragraphs: [
        "The first release inferred an agent’s primary territory from their existing listings, allowing them to see relevant new-to-market opportunities without completing a complex setup process. Street and community subscriptions added personal control, and the product later expanded into daily reports covering new listings, price reductions, and delistings.",
        "Agents varied widely in age and digital habits. We intentionally reduced configuration flexibility to lower the learning and setup burden, helping users reach the daily listing-scan task more quickly. Based on feedback from agents and field teams, the process fell from roughly 1–2 hours to 5–10 minutes. Internal behavioral analysis also showed that around 70% of listing-search sessions continued into a detail view.",
      ],
    },
  ],
  execution: {
    kicker: "EXECUTION",
    heading:
      "Translate agent judgment into executable product rules and data logic",
    paragraphs: [
      "Listing intelligence could not be created by simply aggregating data from multiple websites. Agents combined listing dates, pricing history, brokerage brands, addresses, and community context to determine whether a property was entering the market for the first time, being relisted, or worth pursuing.",
      "I worked with agents and field teams to clarify how those judgments were made, then used data samples to identify which signals were reliable and which situations frequently caused misclassification. I translated the findings into product rules, edge cases, acceptance criteria, and test scenarios so that data processing, interface presentation, and user interpretation remained aligned.",
      "After launch, I used Redash to analyze existing Rakuya agents, newly LINE-linked users, LINE queries, and the listing-intelligence funnel. Combined with brand trials and field feedback, these signals helped determine whether the next iteration should refine data rules, improve the product flow, or introduce additional market signals.",
    ],
  },
  impact: {
    kicker: "IMPACT",
    heading:
      "From saving time every morning to enterprise adoption and paid renewals",
    blocks: [
      {
        heading: "User efficiency",
        body:
          "Based on feedback from agents and field teams, the daily listing scan fell from roughly 1–2 hours to 5–10 minutes. Agents could review new-to-market listings, price reductions, and delistings in one place before assessing address, price, community, and Street View details.",
      },
      {
        heading: "Product behavior",
        body:
          "Internal behavioral analysis showed that around 70% of listing-search sessions continued into a detail view, suggesting that users were not only scanning the list but actively evaluating whether an opportunity was worth pursuing.",
      },
      {
        heading: "Business adoption",
        body:
          "The product progressed from demos and brand trials to the integrations required for real-world adoption, followed by a per-seat pricing model. Of the three partner brands, two renewed and became paying customers.",
      },
    ],
    footnote:
      "Note: The reduction from 1–2 hours to 5–10 minutes was based on feedback from agents and field teams. The ~70% figure came from internal session-behavior analysis.",
  },
  reflection: {
    kicker: "REFLECTION",
    heading:
      "A useful product still needs to fit the agent’s existing workflow",
    paragraphs: [
      "This project reinforced that a PropTech product should begin with the user’s most frequent and time-sensitive task. Data quality and interpretation are essential foundations, but the product’s value ultimately depends on whether agents can use it naturally in daily work and reach the next action more quickly.",
      "If I were approaching the project again, I would connect the intelligence more directly to Rakuya’s existing listing, inventory-management, and buyer-contact workflows, reducing the need to enter a separate product or rely on external promotion. The product had already reduced prospecting time; the next challenge was to surface that value at the right moment in the workflow so repeated use could become a habit.",
    ],
  },
};