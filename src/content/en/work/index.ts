import { house579 } from "./house579";
import { rakuya } from "./rakuya";
import { designSystem } from "./design-system";
import type { CaseStudyContent } from "../../types";

export const workBySlug: Record<string, CaseStudyContent> = {
  house579,
  "rakuya-data-product": rakuya,
  "design-system": designSystem,
};

export const workOrder = ["house579", "rakuya-data-product", "design-system"] as const;
