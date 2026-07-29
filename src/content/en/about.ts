import type { AboutContent } from "../types";

export const about: AboutContent = {
  meta: {
    title: "About",
    description:
      "I started in visual design and front-end development, then moved into product design, strategy, and team management.",
  },
  kicker: "ABOUT",
  heading: "Hi, I'm Grant.",
  photoAlt: "Photo of Grant Hsiao",
  paragraphs: [
    "I started in visual design and front-end development, then moved into product design, product strategy, and team management. Over the years I've worked on portals, job platforms, real estate platforms, and real estate data products, and have led cross-functional teams of PMs, UI/UX designers, and front-end engineers.",
    "I like working on problems that look messy on the surface but actually have a logic underneath. Rather than jumping straight to a solution, I usually start by understanding what users are really experiencing, then lay out the problem, the business goals, and the technical constraints before finding a direction forward with the team.",
    "To me, product work isn't just about shipping features — it's about helping the team understand what problem they're actually solving, and gradually turning that direction into a product that people actually use and that stays maintainable.",
    "Outside of work, I enjoy independent music and make some of my own. The visual design and illustration experience I built up early on still shapes how I think about layout, information hierarchy, and product craft today. I also believe good collaboration doesn't need one person to have all the answers — it's about different disciplines covering for each other to make the product better.",
    "I'd love to find a team like that.",
  ],
  quote: {
    text: "Listen up — in volleyball, everyone on this side of the net is an ally!",
    source: "Haikyuu!!",
  },
  stats: [
    { value: "20 years", label: "Product & design experience" },
    { value: "7 people", label: "Cross-functional team led" },
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
