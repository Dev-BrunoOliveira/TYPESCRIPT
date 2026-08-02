import { pt } from "./pt";
import { en } from "./en";

export type Language = "pt" | "en";

export type TranslationValue = any;

export const translations: Record<Language, TranslationValue> = {
  pt,
  en,
};
