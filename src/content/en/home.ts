import type { HomeContent } from "../types";

export const home: HomeContent = {
  meta: {
    title: "Senior Product Manager",
    description:
      "Grant Hsiao is a Senior Product Manager who built a real estate listing platform from zero. It drew nearly 200K free listings in three months, and paid listings later peaked at 50K.",
  },
  profile: {
    name: "Grant Hsiao / 蕭宏彬",
    role: "Senior Product Manager",
    location: "Taipei, Taiwan",
    primaryAction: "View featured work",
    secondaryAction: "Download resume",
  },
  hero: {
    kicker: "HOME",
    title: "Built from zero.\n50K paid listings at peak.",
    lead: "Nearly 200K free listings in the first three months; paid listings launched after a six-month free period.",
    eyebrow: "Product Strategy · UI/UX Leadership · AI-assisted Validation & Building",
  },
  selectedWork: {
    kicker: "SELECTED WORK",
    heading: "Selected case studies",
    cards: [
      {
        slug: "house579",
        index: "01",
        eyebrow: "0-to-1 Product · Commercialization · Product Operations",
        name: "House579",
        title: "Building a real estate listing platform from zero and taking it into paid operations",
        description:
          "With no established brand and limited support capacity, I helped build the journey from registration and listing migration to mobile management, moving the platform from free onboarding into paid operations.",
        tags: ["0-to-1 Product", "Commercialization", "Product Operations"],
        metric: "50K paid listings at peak · 3,000+ agents",
        imageSide: "left",
      },
      {
        slug: "rakuya-data-product",
        index: "02",
        eyebrow: "Product Strategy · B2B PropTech · Agent Intelligence",
        name: "Rakuya Agent Intelligence",
        title: "Matching the same property across platforms to reconstruct its history",
        description:
          "Weighted matching inferred addresses and property links, then connected sales records, title information, and land parcels; I sampled results each quarter to check accuracy.",
        tags: ["Product Strategy", "B2B PropTech", "Agent Intelligence"],
        metric: "Daily listing scan: 1–2 hours → 5–10 minutes · 2 paid brand renewals",
        imageSide: "right",
      },
      {
        slug: "design-system",
        index: "03",
        eyebrow: "Design Leadership · Design System · Team Transformation",
        name: "Design System",
        title: "Turning fragmented components and interaction patterns into a shared product foundation",
        description:
          "Using the shift to Figma and Vue, I helped establish shared tokens, design components, front-end components, and governance so three product teams could gradually work from the same foundation.",
        tags: ["Design Leadership", "Design System", "Team Transformation"],
        metric: "3 product teams adopted · First components shipped in 2 weeks",
        imageSide: "left",
      },
      {
        slug: "speedmeter",
        index: "04",
        eyebrow: "AI-assisted Product Workflow · Data Quality · Validation",
        name: "SpeedMeter",
        title: "Using AI to validate product ideas faster",
        description:
          "Starting with speed-camera alerts and road-data quality, I used AI across structured discovery, working prototypes, task organization, development, and testing to move ideas into real validation faster.",
        tags: ["AI-assisted Workflow", "Data Quality", "Product Validation"],
        metric: "Product idea → working prototype → GPS validation",
        imageSide: "right",
      },
      {
        slug: "star-metric",
        index: "05",
        eyebrow: "AI-assisted Product · 0-to-1 · Mobile App",
        name: "Star Metric",
        title: "From AI experiment to shipped product",
        description:
          "Combining zodiac, personality, and Zi Wei signals into 27,648 personalized content combinations, then taking the product through UI/UX, AI-assisted development, and Android release.",
        tags: ["AI-assisted Product", "0-to-1", "Mobile App"],
        metric: "27,648 combinations · Android released",
        imageSide: "left",
      },
    ],
  },
  aboutTeaser: {
    kicker: "ABOUT",
    heading: "Hi, I'm Grant.",
    paragraph:
      "I'm a Senior Product Manager with a background in UX, front-end development, and team leadership. I've built a platform from zero through paid operations and worked on data products for real estate agents. I start by understanding how people work, then decide with the team what is worth building.",
    cta: "More about me",
  },
  contactCta: {
    kicker: "CONTACT",
    title: "Let's turn complex problems into products teams can move forward with.",
    lead: "I'm interested in product strategy, practical AI applications, 0-to-1 product development, and challenges that bring together UX, data, technology, and cross-functional collaboration.",
    cta: "Contact me",
  },
};
