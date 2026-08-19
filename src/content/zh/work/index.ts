import { house579 } from "./house579";
import { rakuya } from "./rakuya";
import { designSystem } from "./design-system";
import { starMetric } from "./star-metric";
import { speedMeter } from "./speedmeter";
import type { CaseStudyContent } from "../../types";

export const workBySlug: Record<string, CaseStudyContent> = {
  house579,
  "star-metric": starMetric,
  "rakuya-data-product": rakuya,
  "design-system": designSystem,
  speedmeter: speedMeter,
};

export const workOrder = ["house579", "star-metric", "rakuya-data-product", "design-system", "speedmeter"] as const;
