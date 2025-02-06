import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import en from "./locales/en.json";
import de from "./locales/de.json";

// force english to be default language
const deviceLanguage = "en" || Localization.getLocales.split("-")[0]; // e.g., 'en-US' -> 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      DictionaryPage: en.DictionaryPage,
      ProfilePage: en.ProfilePage,
    },
    de: {
      DictionaryPage: de.DictionaryPage,
      ProfilePage: de.ProfilePage,
    },
  },
  lng: deviceLanguage, // default language
  fallbackLng: "en",
  ns: ["DictionaryPage", "ProfilePage"],
  defaultNS: "DictionaryPage",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
