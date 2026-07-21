import type { CaseStudyContent } from "../../types";

export const rakuya: CaseStudyContent = {
  slug: "rakuya-data-product",
  meta: {
    title: "Rakuya Market Intelligence",
    description:
      "Starting with the cross-platform market checks agents performed every morning, we built daily reports for genuinely new listings, price reductions, and removals, then expanded into brand trials, integrations, and paid partnerships.",
  },
  caseNumber: "02",
  kicker: "CASE STUDY 02 · RAKUYA DATA PRODUCT",
  title: "Turning fragmented market signals into daily prospecting intelligence for real estate agents",
  lead: "Starting with the cross-platform market checks agents performed every morning, we built daily reports for genuinely new listings, price reductions, and removals, then expanded into brand trials, integrations, and paid partnerships.",
  heroImageName: "Rakuya Data Product Case Hero",
  metrics: [
    { value: "3 months", label: "Technical MVP" },
    { value: "5–10 min", label: "Daily market scan" },
    { value: "~70%", label: "Search sessions opened a detail view" },
    { value: "2", label: "Paid brand renewals" },
  ],
  facts: [
    { label: "Role", value: "Chief of Experience / Product Lead" },
    { label: "Period", value: "Aug 2021–Mar 2025" },
    { label: "Stage", value: "Product discovery, MVP, data foundations, and brand partnerships" },
    {
      label: "Team",
      value: "1 PM, 3 UI/UX designers, and 3 front-end engineers; collaboration with backend, sales, and brand stakeholders",
    },
  ],
  context: {
    kicker: "CONTEXT",
    heading: "Market data was abundant. What agents lacked was a daily workflow for spotting change.",
    paragraphs: [
      "Established tools already handled one-off property and community analysis. Rakuya's opportunity was not another lookup product, but a daily market-intelligence workflow built from its listing platform, community data, and buyer activity.",
      "Every morning, agents checked multiple brokerage sites for new listings, price reductions, and removals, then compared addresses, pricing history, and community information. The work was repetitive but unavoidable, because a truly new opportunity is most valuable shortly after it appears.",
    ],
    coreChallengeLabel: "Core challenge",
    coreChallengeQuote:
      "How could we turn fragmented, noisy real estate data that required domain expertise into intelligence that was fast, reliable, and easy to act on?",
  },
  whatWeSaw: {
    kicker: "WHAT WE SAW",
    heading: "Three signals showed that the product could not stop at search",
    signals: [
      {
        number: "1",
        heading: "Finding new listings was a daily, non-negotiable task",
        body: "The challenge was not knowing how to search; it was fragmented and duplicated information, plus the time required to decide which changes deserved attention.",
      },
      {
        number: "2",
        heading: "A “new listing” was not always new to the market",
        body: "Expired mandates, co-brokering, and relisting could all create false new listings. If we relied only on platform timestamps, agents would quickly stop trusting the report.",
      },
      {
        number: "3",
        heading: "New-community data would become critical to address matching",
        body: "As new developments grew, buyers and listing platforms increasingly used communities as the entry point. The earlier a platform built stable community and building records, the better it could match listings, addresses, and transaction data.",
      },
    ],
  },
  keyDecisions: [
    {
      kicker: "KEY DECISION 1",
      heading: "Map the full workflow before choosing the MVP entry point",
      paragraphs: [
        "I mapped the agent journey from finding leads and prospecting to listing, selling, and managing buyers. We then chose an entry point that balanced user value, data feasibility, and implementation: territory, genuinely new listings, and address and market context. The first release needed to help an agent complete a real prospecting task, not just display isolated data.",
        "The team completed a technical MVP in about three months. We continued refining the data, entry points, and interpretation, released a usable agent product around ten months later, and then expanded into daily reports, street and community subscriptions, transaction history, and brand partnerships.",
      ],
    },
    {
      kicker: "KEY DECISION 2",
      heading: "Build future data foundations as communities became a primary search entry point",
      paragraphs: [
        "With new developments growing rapidly in Taiwan, buyers increasingly searched by community and agents increasingly prospected by community. When creating new community records, I chose to collect building registry data at the same time and automate the normalization workflow.",
        "That data supported more than community pages: it became a shared foundation for assigning listings to the correct community, resolving addresses, and matching transaction records. The work was less visible in a single release, but it reduced the need for manual fixes as the product expanded.",
      ],
    },
    {
      kicker: "KEY DECISION 3",
      heading: "Turn genuinely new listings into a daily prospecting task",
      paragraphs: [
        "The first release inferred an agent's primary territory from their existing listings, so they could see relevant first-time listings without completing a complex setup. Street and community subscriptions added personal control, and the product later expanded into daily reports for genuinely new listings, price reductions, and removals.",
        "Agents varied widely in age and digital habits. We intentionally gave up some configuration flexibility to reduce setup burden. Based on agent and field-team feedback, daily scanning dropped from roughly 1–2 hours to 5–10 minutes, and about 70% of search sessions opened a detail view.",
      ],
    },
  ],
  execution: {
    kicker: "EXECUTION",
    heading: "Translate agent judgment into rules that both data and product teams could execute",
    paragraphs: [
      "Market intelligence was not created by simply aggregating multiple websites. Agents used listing dates, pricing history, sales brands, addresses, and community context to judge whether a property was new, relisted, or worth pursuing. I clarified those working practices with agents and the field team, tested which signals were reliable through data samples, and converted the findings into product rules, edge cases, and acceptance scenarios.",
      "After launch, I used Redash to distinguish existing Rakuya agents, newly LINE-linked users, LINE queries, and the listing-intelligence funnel. Combined with brand trials and field feedback, those signals guided whether the next iteration should adjust data rules, the user flow, or the market signals we offered.",
    ],
  },
  impact: {
    kicker: "IMPACT",
    heading: "From a daily market scan to enterprise trials and paid renewals",
    blocks: [
      {
        heading: "User experience",
        body: "Daily reports consolidated changes across multiple sites into one entry point. Agents could review genuinely new listings, price reductions, and removals, then open details to assess price, address, community, and Street View before deciding whether to request records or contact an owner.",
      },
      {
        heading: "Business",
        body: "The product moved from demos and trials into the integrations brands needed, then to per-seat pricing. Of three partner brands, two renewed and became paying customers.",
      },
      {
        heading: "Product standard",
        body: "The team adopted a simple product test: every feature had to make the workflow faster, more accurate, and easier to use - not merely add more data or functionality.",
      },
    ],
    footnote:
      "Note: The reduction from 1–2 hours to 5–10 minutes came from agent and field-team feedback; the ~70% figure came from internal session analysis.",
  },
  reflection: {
    kicker: "REFLECTION",
    heading: "A useful product still has to become part of the user's existing workflow",
    paragraphs: [
      "This project reinforced that data products should not begin with “what data do we have?” They should begin with the user's most frequent and time-sensitive task. Data quality is also never finished; markets, communities, and listing practices continue to change, so the product must keep recalibrating.",
      "If I were doing it again, I would connect the intelligence product more directly to the listing, inventory-management, and buyer-contact workflows agents already used on Rakuya, rather than rely mainly on separate entry points, LINE linking, and external promotion. The product reduced prospecting time, but awareness and organic reach remained limited. Delivering relevant intelligence inside an existing workflow would have created a stronger path to habit and compounding growth.",
    ],
  },
};
