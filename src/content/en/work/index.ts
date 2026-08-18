import { house579 } from "./house579";
import { rakuya } from "./rakuya";
import { designSystem } from "./design-system";
import { starMetric } from "./star-metric";
import type { CaseStudyContent } from "../../types";

export const workBySlug: Record<string, CaseStudyContent> = {
  house579,
  "rakuya-data-product": rakuya,
  "design-system": designSystem,
  "star-metric": starMetric,
};

export const workOrder = ["house579", "rakuya-data-product", "design-system", "star-metric"] as const;
