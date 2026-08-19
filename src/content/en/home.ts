import type { HomeContent } from "../types";

export const home: HomeContent = {
  meta: {
    title: "Product & Design Lead",
    description:
      "Combining product strategy, UX, data, and technical thinking, using AI to accelerate research, validation, and execution from early ideas to working products.",
  },
  profile: {
    name: "Grant Hsiao / 蕭宏彬",
    role: "Product & Design Lead",
    location: "Taipei, Taiwan",
    primaryAction: "View selected work",
    secondaryAction: "Download resume",
  },
  hero: {
    kicker: "HOME",
    title: "From product strategy to launch, using AI to turn ideas into products faster.",
    lead: "Combining product strategy, UX, data, and technical thinking to move from problem discovery and product decisions through design, validation, and launch, while using AI to accelerate research, prototyping, small-scale front-end and back-end experiments, and testing before committing to full development.",
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
        metric: "50K+ paid listings · 3,000+ agents",
        imageSide: "left",
      },
      {
        slug: "star-metric",
        index: "02",
        eyebrow: "AI-assisted Product · 0-to-1 · Mobile App",
        name: "Star Metric",
        title: "From AI experiment to shipped product",
        description:
          "Combining zodiac, personality, and Zi Wei signals into 27,648 personalized content combinations, then taking the product through UI/UX, AI-assisted development, and Android release.",
        tags: ["AI-assisted Product", "0-to-1", "Mobile App"],
        metric: "27,648 combinations · Android released",
        imageSide: "right",
      },
      {
        slug: "rakuya-data-product",
        index: "03",
        eyebrow: "Product Strategy · B2B PropTech · Agent Intelligence",
        name: "Rakuya Agent Intelligence",
        title: "Turning fragmented market signals into actionable daily listing intelligence",
        description:
          "Starting with agents’ daily routine of tracking new listings, price changes, and property addresses across multiple platforms, I helped build an intelligence workflow that later expanded into brand trials, system integrations, and paid partnerships.",
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
    ],
  },
  aboutTeaser: {
    kicker: "ABOUT",
    heading: "Hi, I'm Grant.",
    paragraph:
      "I'm a Product & Design Lead working across product strategy, UX, technology, and cross-functional leadership. I turn complex problems into product direction and help move that direction through design, validation, and execution, while increasingly integrating AI into how I explore, test, and deliver products.",
    cta: "More about me",
  },
  contactCta: {
    kicker: "CONTACT",
    title: "Let's turn complex problems into products teams can move forward with.",
    lead: "I'm interested in product strategy, practical AI applications, 0-to-1 product development, and challenges that bring together UX, data, technology, and cross-functional collaboration.",
    cta: "Contact me",
  },
};