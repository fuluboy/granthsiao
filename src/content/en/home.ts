import type { HomeContent } from "../types";

export const home: HomeContent = {
  meta: {
    title: "Product & Design Lead",
    description:
      "Grant Hsiao is a Product & Design Lead. His latest work, Shunfeng, went from research and design to on-device validation in 10 days, solo. Before that, he built a real estate platform from zero to 50K paid listings at peak.",
  },
  profile: {
    name: "Grant Hsiao / 蕭宏彬",
    role: "Product & Design Lead",
    location: "Taipei, Taiwan",
    primaryAction: "View featured work",
    secondaryAction: "Download resume",
  },
  hero: {
    kicker: "HOME",
    title: "Built from zero.\nNow faster with AI.",
    lead: "My latest work, Shunfeng, went from research and design to on-device validation in 10 days, solo. Before that, I built a real estate platform from zero to 50K paid listings at peak.",
    eyebrow: "AI-native Product · Product Strategy · UI/UX Leadership",
  },
  selectedWork: {
    kicker: "SELECTED WORK",
    heading: "Selected case studies",
    cards: [
      {
        slug: "shunfeng",
        index: "01",
        eyebrow: "AI-native Product · Accessibility · Design System",
        name: "Shunfeng",
        title: "Listening to airport announcements for deaf travelers, buzzing only for your flight",
        description:
          "Built solo in 10 days for the Meta Global AI Developer Hackathon: journey research, a design system, motion specs, AI-directed development, and on-device validation on iPhone.",
        tags: ["AI-native Product", "Accessibility", "Design System"],
        metric: "47/47 alert decisions right · Built solo in 10 days",
        imageSide: "left",
      },
      {
        slug: "house579",
        index: "02",
        eyebrow: "0-to-1 Product · Commercialization · Product Operations",
        name: "House579",
        title: "Lowering agents’ listing effort before earning the right to charge",
        description:
          "With no established brand and limited support capacity, I helped build the journey from registration and listing migration to mobile management, moving the platform from free onboarding into paid operations.",
        tags: ["0-to-1 Product", "Commercialization", "Product Operations"],
        metric: "Nearly 200K free listings in 3 months · 50K paid listings at peak",
        imageSide: "right",
      },
      {
        slug: "rakuya-data-product",
        index: "03",
        eyebrow: "Product Strategy · B2B PropTech · Agent Intelligence",
        name: "Rakuya Agent Intelligence",
        title: "Matching the same property across platforms to reconstruct its history",
        description:
          "Weighted matching inferred addresses and property links, then connected sales records, title information, and land parcels; I sampled results each quarter to check accuracy.",
        tags: ["Product Strategy", "B2B PropTech", "Agent Intelligence"],
        metric: "Daily listing scan: 1–2 hours → 5–10 minutes · 2 paid brand renewals",
        imageSide: "left",
      },
      {
        slug: "design-system",
        index: "04",
        eyebrow: "Design Leadership · Design System · Team Transformation",
        name: "Design System",
        title: "Turning fragmented components and interaction patterns into a shared product foundation",
        description:
          "Using the shift to Figma and Vue, I helped establish shared tokens, design components, front-end components, and governance so three product teams could gradually work from the same foundation.",
        tags: ["Design Leadership", "Design System", "Team Transformation"],
        metric: "3 product teams adopted · First components shipped in 2 weeks",
        imageSide: "right",
      },
      {
        slug: "speedmeter",
        index: "05",
        eyebrow: "AI-assisted Product Workflow · Data Quality · Validation",
        name: "SpeedMeter",
        title: "Using AI to validate product ideas faster",
        description:
          "Starting with speed-camera alerts and road-data quality, I used AI across structured discovery, working prototypes, task organization, development, and testing to move ideas into real validation faster.",
        tags: ["AI-assisted Workflow", "Data Quality", "Product Validation"],
        metric: "Product idea → working prototype → GPS validation",
        imageSide: "left",
      },
      {
        slug: "star-metric",
        index: "06",
        eyebrow: "AI-assisted Product · 0-to-1 · Mobile App",
        name: "Star Metric",
        title: "From AI experiment to shipped product",
        description:
          "Combining zodiac, personality, and Zi Wei signals into 27,648 personalized content combinations, then taking the product through UI/UX, AI-assisted development, and Android release.",
        tags: ["AI-assisted Product", "0-to-1", "Mobile App"],
        metric: "27,648 combinations · Android released",
        imageSide: "right",
      },
    ],
  },
  aiWorkflow: {
    kicker: "HOW I WORK WITH AI",
    heading: "AI writes. I define, decide and verify.",
    lead: "From SpeedMeter and Star Metric to Shunfeng, I work with AI the same way: it gets me to real results sooner, but what to build, what counts as right, and when it's ready stay my call.",
    steps: [
      {
        number: "1",
        heading: "Define the problem and the bar",
        body: "Before any code, I map the journey and write down what success means. For Shunfeng: “buzz only for your flight, and say ‘maybe’ when unsure.” AI gets behavior rules and acceptance criteria, not vague requests.",
      },
      {
        number: "2",
        heading: "AI builds, I break down and review",
        body: "AI (Claude) writes most of the code, assets and log analysis. I break down requirements, set the rules and review the output, and I make the trade-offs, such as which voices are licensed for public use.",
      },
      {
        number: "3",
        heading: "Let evaluation replace intuition",
        body: "Every judgment becomes a test I can rerun: 61 automated tests, 47 test announcements and a held-out set of 10 for Shunfeng. The keyword hints that looked smarter were turned off because the evaluation said so.",
      },
      {
        number: "4",
        heading: "Validate on device, report honestly",
        body: "I test on real devices in real conditions: locked screens, phone calls, lost signal, GPS simulation. Logs from filming day led to five fixes. Then I state what is validated and what isn't, and let real users shape the next step.",
      },
    ],
    evidenceLabel: "Cases built this way",
    evidence: [
      { name: "Shunfeng", label: "Solo in 10 days, 47/47 alerts right", slug: "shunfeng" },
      { name: "SpeedMeter", label: "Hypothesis to prototype, checked with GPS simulation", slug: "speedmeter" },
      { name: "Star Metric", label: "From AI experiment to Android release", slug: "star-metric" },
    ],
  },
  aboutTeaser: {
    kicker: "ABOUT",
    heading: "Hi, I'm Grant.",
    paragraph:
      "I'm a product and design lead with a background in UX, front-end development, and team leadership. I've built a platform from zero through paid operations and worked on data products for real estate agents. Now, with AI, I can take a product from research to on-device validation on my own. What hasn't changed: I start by understanding how people work, then decide what is worth building.",
    cta: "More about me",
  },
  contactCta: {
    kicker: "CONTACT",
    title: "Let's turn complex problems into products teams can move forward with.",
    lead: "I'm interested in product strategy, practical AI applications, 0-to-1 product development, and challenges that bring together UX, data, technology, and cross-functional collaboration.",
    cta: "Contact me",
  },
};
