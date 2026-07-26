import { UI_TEXT, type Locale } from "../i18n/config";

/**
 * Initializes exactly one PhotoSwipe lightbox per Case Study page, scoped to
 * `[data-pswp-gallery]` containers (see CaseStudyGallery.astro). Imported
 * only by CaseStudyLightbox.astro, which in turn is only included on
 * `src/pages/[lang]/work/[slug].astro` — no other page ships this module.
 *
 * This project has no client-side routing / View Transitions today (see
 * BaseLayout.astro), so this file only ever runs once per full page load.
 * The guard below is precautionary in case that changes later.
 */

declare global {
  interface Window {
    __caseStudyLightboxInitialized?: boolean;
  }
}

if (!window.__caseStudyLightboxInitialized) {
  window.__caseStudyLightboxInitialized = true;
  void initCaseStudyLightbox();
}

async function initCaseStudyLightbox() {
  const locale = (document.documentElement.dataset.lang as Locale | undefined) ?? "zh";
  const labels = UI_TEXT[locale].lightbox;

  const { default: PhotoSwipeLightbox } = await import("photoswipe/lightbox");

  const lightbox = new PhotoSwipeLightbox({
    gallery: "[data-pswp-gallery]",
    children: "a",
    pswpModule: () => import("photoswipe"),

    bgOpacity: 0.92,
    wheelToZoom: true,
    initialZoomLevel: "fit",
    secondaryZoomLevel: 1,
    maxZoomLevel: 3,

    closeTitle: labels.close,
    zoomTitle: labels.zoomIn,
    arrowPrevTitle: labels.previous,
    arrowNextTitle: labels.next,

    paddingFn: (viewportSize) => {
      const isMobile = viewportSize.x < 768;
      return isMobile
        ? { top: 56, bottom: 72, left: 16, right: 16 }
        : { top: 80, bottom: 96, left: 80, right: 80 };
    },
  });

  // The <a> trigger carries the visible caption (if any) via data-pswp-caption
  // — see ResponsiveMedia.astro. Read it here instead of scraping alt text,
  // so accessibility alt and the displayed caption stay independent.
  lightbox.addFilter("domItemData", (itemData, _element, linkEl) => {
    const caption = linkEl?.dataset.pswpCaption;
    if (caption) {
      itemData.caption = caption;
    }
    return itemData;
  });

  lightbox.on("uiRegister", () => {
    lightbox.pswp?.ui?.registerElement({
      name: "case-study-caption",
      order: 9,
      isButton: false,
      appendTo: "root",
      onInit: (el, pswp) => {
        el.classList.add("pswp__custom-caption");
        const update = () => {
          const caption = pswp.currSlide?.data?.caption as string | undefined;
          el.textContent = caption ?? "";
          el.classList.toggle("pswp__custom-caption--hidden", !caption);
        };
        pswp.on("change", update);
        update();
      },
    });
  });

  // The zoom button's icon toggles via CSS (.pswp--zoomed-in), but its
  // accessible label needs updating in script since PhotoSwipe only exposes
  // one static `zoomTitle` string for both zoom-in and zoom-out states.
  const updateZoomLabel = () => {
    const pswp = lightbox.pswp;
    const button = pswp?.element?.querySelector<HTMLElement>(".pswp__button--zoom");
    if (!pswp || !button) return;
    const zoomedIn = pswp.element?.classList.contains("pswp--zoomed-in");
    const label = zoomedIn ? labels.zoomOut : labels.zoomIn;
    button.setAttribute("aria-label", label);
    button.title = label;
  };
  lightbox.on("change", updateZoomLabel);
  lightbox.on("zoomPanUpdate", updateZoomLabel);

  lightbox.init();
}
