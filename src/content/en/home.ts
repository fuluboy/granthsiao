import type { HomeContent } from "../types";

export const home: HomeContent = {
  meta: {
    title: "Product & Design Lead",
    description:
      "I trace problems across the full user journey, then turn insight into practical, sustainable product solutions within real business, data, and technical constraints.",
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
    title: "Uncovering real user needs to build products that work for people and the business.",
    lead: "I trace problems across the full user journey, then turn insight into practical, sustainable product solutions within real business, data, and technical constraints.",
    eyebrow: "0-to-1 Product · Data Product · Design Leadership",
  },
  selectedWork: {
    kicker: "SELECTED WORK",
    heading: "Three case studies. Three kinds of product challenge.",
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
        slug: "rakuya-data-product",
        index: "02",
        eyebrow: "Product Strategy · B2B PropTech · Agent Intelligence",
        name: "Rakuya Agent Intelligence",
        title: "Turning fragmented market signals into actionable daily listing intelligence",
        description:
          "Starting with agents’ daily routine of tracking new listings, price changes, and property addresses across multiple platforms, I helped build an intelligence workflow that later expanded into brand trials, system integrations, and paid partnerships.",
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
    ],
  },
  aboutTeaser: {
    kicker: "ABOUT",
    heading: "Hi, I'm Grant.",
    paragraph:
      "I began in web design and front-end development, then moved into product design, strategy, and team leadership. Working across design and code taught me that an interface can look right in a design file and still fail when it meets real data, engineering constraints, operations, and users who behave differently than expected.",
    cta: "More about me",
  },
  contactCta: {
    kicker: "CONTACT",
    title: "Let's turn complex problems into products teams can move forward with.",
    lead: "I am interested in product and design leadership, data products, 0-to-1 builds, and challenges that require close collaboration across design, engineering, and operations.",
    cta: "Contact me",
  },
};
