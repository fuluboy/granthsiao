import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://grant-hsiao.example.com",
  trailingSlash: "always",
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "zh",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
