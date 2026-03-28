import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  pathnames: {
    "/": "/",
    "/nosotros": {
      es: "/nosotros",
      en: "/about",
    },
    "/servicios": {
      es: "/servicios",
      en: "/services",
    },
    "/servicios/[slug]": {
      es: "/servicios/[slug]",
      en: "/services/[slug]",
    },
    "/casos": {
      es: "/casos",
      en: "/cases",
    },
    "/casos/[slug]": {
      es: "/casos/[slug]",
      en: "/cases/[slug]",
    },
    "/academia": {
      es: "/academia",
      en: "/academy",
    },
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
    "/labs": "/labs",
  },
});
