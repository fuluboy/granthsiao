import type { AboutContent } from "../types";

export const about: AboutContent = {
  meta: {
    title: "About",
    description:
      "Working across product strategy, UX, technology, and team leadership, while integrating AI into product discovery, validation, execution, and delivery.",
  },
  kicker: "ABOUT",
  heading: "Hi, I'm Grant.",
  photoAlt: "Photo of Grant Hsiao",
  paragraphs: [
    "I'm a Product & Design Lead working across product strategy, UX, technology, and team leadership. I enjoy turning complex user and business problems into clear product direction, then helping move that direction through design, development, validation, and launch. I've worked across portals, job platforms, real estate products, and data products, and have led cross-functional teams of PMs, UI/UX designers, and front-end engineers.",
    "When approaching a new product problem, I prefer to build enough evidence before making a major investment. Alongside user research, product data, and market signals, I often use prototypes or small-scale front-end and back-end experiments to test workflows, data assumptions, and technical feasibility before committing to full development.",
    "In recent years, I've increasingly integrated AI into my product workflow—from research and problem framing to data processing, product planning, rapid implementation, and testing. I use different tools depending on the problem, expanding how quickly I can explore and execute while grounding decisions in real evidence, user context, and product goals.",
    "This way of working comes from experience across design, front-end development, product, and management. I can discuss experience and design systems with designers, data flows and implementation constraints with engineers, and help cross-functional teams align around the product problem, decision criteria, and priorities.",
    "I see AI as a collaborator within the product workflow. It can accelerate exploration, generate early solutions, and help create testable implementations and automation. My role is to define the problem, evaluate the evidence, set the constraints, and decide what is worth pursuing further.",
    "Outside of work, I'm into independent music and make some of my own. My early background in visual design and illustration still shapes how I think about layout, information hierarchy, and product craft. I also enjoy experimenting with new technologies and ways of working to see what they can make possible.",
  ],
  quote: {
    text: "Listen up — in volleyball, everyone on this side of the net is an ally!",
    source: "Haikyuu!!",
  },
  stats: [
    { value: "0→1 → Launch", label: "Product strategy through launch" },
    { value: "7 people", label: "PM · UI/UX · Front-end team led" },
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
