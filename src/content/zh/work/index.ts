import { house579 } from "./house579";
import { rakuya } from "./rakuya";
import { designSystem } from "./design-system";
import { starMetric } from "./star-metric";
import { speedMeter } from "./speedmeter";
import type { CaseStudyContent } from "../../types";

export const workBySlug: Record<string, CaseStudyContent> = {
  house579,
  "rakuya-data-product": rakuya,
  "design-system": designSystem,
  "star-metric": starMetric,
  speedmeter: speedMeter,
};

export const workOrder = ["house579", "rakuya-data-product", "design-system", "star-metric", "speedmeter"] as const;
