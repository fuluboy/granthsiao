import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://fuluboy.github.io",
  base: "/granthsiao",
  trailingSlash: "always",
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "zh",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
