import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(resourcesToBackend((namespace: string) => import(`../data/locale/${namespace}.json`)))
  .use(initReactI18next)
  .init({
    initImmediate: true,
    fallbackLng: (localStorage.getItem("language") || "es_cl"),
    lng: (localStorage.getItem("language") || "es_cl"),
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
