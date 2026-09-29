import type { AboutContent } from "../types";

export const about: AboutContent = {
  meta: {
    title: "About",
    description:
      "Grant Hsiao is a Senior Product Manager who led cross-functional teams, built a real estate platform through paid operations, and developed data products for agents.",
  },
  kicker: "ABOUT",
  heading: "Hi, I'm Grant.",
  photoAlt: "Photo of Grant Hsiao",
  paragraphs: [
    "I've led a seven-person team across product, UX, and front-end. At House579, I built a listing platform from zero through paid operations. At Rakuya, my team and I turned agents' daily search for new listings and price drops into a data product.",
    "I start by seeing how people actually work and what the data can tell us, then decide which problem to solve first. When a workflow or technical assumption is uncertain, I use prototypes, small implementations, and tests to check it early.",
    "My UX and front-end background helps me work directly with designers and engineers on workflows, data, and implementation constraints. As a team lead, I make the problem, evidence, and priorities clear. I also use AI for research synthesis, prototypes, and testing, then let the results guide the next decision.",
    "Outside of work, I'm into independent music and make some of my own. My early background in visual design and illustration still shapes how I think about layout, information hierarchy, and product craft. I also enjoy experimenting with new technologies and ways of working to see what they can make possible.",
  ],
  featuredCases: [
    { name: "House579", label: "From zero to paid listings", slug: "house579" },
    { name: "Rakuya Agent Intelligence", label: "A daily data product for agents", slug: "rakuya-data-product" },
  ],
  quote: {
    text: "Listen up — in volleyball, everyone on this side of the net is an ally!",
    source: "Haikyuu!!",
  },
  stats: [
    { value: "50K at peak", label: "House579 paid listings" },
    { value: "5–10 min", label: "Rakuya daily listing scan, down from 1–2 hours (feedback)" },
    { value: "3 product teams", label: "Design System rollout" },
  ],
  links: [
    { label: "SoundCloud", href: "https://soundcloud.com/grant-hsiao", external: true, icon: "soundcloud" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/grant-hsiao-b3143682/",
      external: true,
      icon: "linkedin",
    },
  ],
  resumeLabel: "Download resume",
  contactLabel: "Get in touch",
};
