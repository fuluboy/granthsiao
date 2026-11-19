import type { AboutContent } from "../types";
import { siteConfig } from "../siteConfig";

export const about: AboutContent = {
  meta: {
    title: "About",
    description:
      "Grant Hsiao is an AI Product Designer / PM who has led product, UX and front-end teams, and now focuses on how AI actually fits into the way teams work.",
  },
  name: "Grant Hsiao",
  role: "AI Product Designer / PM · Taipei",
  availability: "Open to new roles",
  photoAlt: "Photo of Grant Hsiao",
  timeline: [
    { label: "Now", text: "Exploring how AI fits into team workflows, and writing about it" },
    { label: "Before", text: "Director of Product & Design at Rakuya · Built House579 from zero" },
  ],
  paragraphs: [
    "I've worked in product and design for over ten years and led a seven-person team across product, UX and front-end. I start by seeing how people actually work, then decide what's worth building. My UX and front-end background lets me talk implementation directly with engineers.",
    "Now I bring the way I lead teams to working with AI: be clear about what we want and what done looks like, then judge whether the result is good. Outside of work, I make some music of my own.",
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/grant-hsiao-b3143682/", external: true },
    { label: "Email", href: `mailto:${siteConfig.contactEmail}`, external: true },
    { label: "Resume", href: siteConfig.resumeHref.en },
    { label: "SoundCloud", href: "https://soundcloud.com/grant-hsiao", external: true },
  ],
  writingLabel: "Recent writing",
};
