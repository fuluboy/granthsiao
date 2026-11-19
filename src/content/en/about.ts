import type { AboutContent } from "../types";
import { siteConfig } from "../siteConfig";

export const about: AboutContent = {
  meta: {
    title: "About",
    description:
      "Grant Hsiao is an AI Product Manager / Designer who has led product, UX and front-end teams, and now focuses on how AI actually fits into the way teams work.",
  },
  name: "Grant Hsiao",
  role: "AI Product Manager / Designer · Taipei",
  availability: "Open to work",
  photoAlt: "Photo of Grant Hsiao",
  paragraphs: [
    "I started in web design back in the prehistoric days of the web, rode through Flash, DIV/CSS and gulp, moved into UI/UX and Vue front-end, and eventually landed in product, where I led a seven-person team of PMs, designers and front-end engineers. Every switch has been about figuring out how all of this actually works, so the product has a better chance of hitting its goals.",
    "These days I get a lot of my work done with AI. Early in a project, it helps me collect data systematically with Python, push fuzzy ideas until they become clear requirements and scenarios, and work out where the value is. Later, it writes automated tests and builds simulated content, so the edge cases that usually slip through all get a run.",
    "While chasing better products, I also love discovering independent music. Indie music live forever 🤘",
  ],
  links: [
    { label: "Email", href: `mailto:${siteConfig.contactEmail}`, external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/grant-hsiao-b3143682/", external: true },
    { label: "SoundCloud", href: "https://soundcloud.com/grant-hsiao", external: true },
  ],
  writingLabel: "Recent writing",
};
