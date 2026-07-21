export interface SiteMeta {
  siteName: string;
  titleSuffix: string;
  defaultDescription: string;
}

export interface ProfileCard {
  name: string;
  role: string;
  location: string;
  primaryAction: string;
  secondaryAction: string;
}

export interface FooterContent {
  name: string;
  role: string;
  location: string;
  actionsLabel: string;
  resumeLabel: string;
  contactLabel: string;
  rights: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface WorkCardSummary {
  slug: string;
  index: string; // "01" | "02" | "03"
  eyebrow: string; // e.g. "0-to-1 Product · Commercialization · Product Operations"
  title: string; // "House579 | Building a real estate listing platform..."
  name: string; // "House579"
  description: string;
  tags: string[];
  metric: string;
  imageSide: "left" | "right";
}

export interface HomeContent {
  meta: { title: string; description: string };
  profile: ProfileCard;
  hero: {
    kicker: string;
    title: string;
    lead: string;
    eyebrow: string;
  };
  selectedWork: {
    kicker: string;
    heading: string;
    cards: WorkCardSummary[];
  };
  aboutTeaser: {
    kicker: string;
    heading: string;
    paragraph: string;
    cta: string;
  };
  contactCta: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
  };
}

export interface AboutContent {
  meta: { title: string; description: string };
  kicker: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  quoteAttribution: string;
  profile: ProfileCard;
}

export interface ContactContent {
  meta: { title: string; description: string };
  kicker: string;
  title: string;
  lead: string;
  resumeLabel: string;
  contactLabel: string;
  contactEmail: string;
}

export interface Signal {
  number: string;
  heading: string;
  body: string;
}

export interface KeyDecision {
  kicker: string;
  heading: string;
  paragraphs: string[];
}

export interface ImpactBlock {
  heading: string;
  body: string;
}

export interface FactRow {
  label: string;
  value: string;
}

export interface CaseStudyContent {
  slug: string;
  meta: { title: string; description: string };
  caseNumber: string;
  kicker: string;
  title: string;
  lead: string;
  heroImageName: string;
  metrics: Metric[];
  facts: FactRow[];
  context: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    coreChallengeLabel: string;
    coreChallengeQuote: string;
  };
  whatWeSaw: {
    kicker: string;
    heading: string;
    signals: Signal[];
  };
  keyDecisions: KeyDecision[];
  execution: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    supportingMetrics?: Metric[];
    supportingMetricsCaption?: string;
  };
  impact: {
    kicker: string;
    heading: string;
    blocks: ImpactBlock[];
    footnote?: string;
  };
  reflection: {
    kicker: string;
    heading: string;
    paragraphs: string[];
  };
}
