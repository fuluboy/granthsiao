import { house579 } from "./house579";
import { rakuya } from "./rakuya";
import { designSystem } from "./design-system";
import { starMetric } from "./star-metric";
import { speedMeter } from "./speedmeter";
import { shunfeng } from "./shunfeng";
import type { CaseStudyContent } from "../../types";

export const workBySlug: Record<string, CaseStudyContent> = {
  house579,
  shunfeng,
  speedmeter: speedMeter,
  "star-metric": starMetric,
  "rakuya-data-product": rakuya,
  "design-system": designSystem,
};

// Same order as the home page cards: previous/next case navigation looks up
// cards by this order, so the two lists must stay aligned.
export const workOrder = [
  "shunfeng",
  "house579",
  "rakuya-data-product",
  "design-system",
  "speedmeter",
  "star-metric",
] as const;
