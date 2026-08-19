import { house579 } from "./house579";
import { rakuya } from "./rakuya";
import { designSystem } from "./design-system";
import { starMetric } from "./star-metric";
import { speedMeter } from "./speedmeter";
import type { CaseStudyContent } from "../../types";

export const workBySlug: Record<string, CaseStudyContent> = {
  house579,
  speedmeter: speedMeter,
  "star-metric": starMetric,
  "rakuya-data-product": rakuya,
  "design-system": designSystem,
};

export const workOrder = ["house579", "speedmeter", "star-metric", "rakuya-data-product", "design-system"] as const;
