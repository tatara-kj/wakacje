import type { Collection, TinaField } from "tinacms";

export const offerFilename = (title: string) => title
  .trim().toLowerCase().replace(/ł/g, "l").normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

export const validOfferDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
};

const dateField = (name: "start" | "end", label: string): TinaField => ({
  type: "string", name, label, required: true,
  description: "Wpisz datę jako RRRR-MM-DD, np. 2027-01-16.",
  ui: { validate: (value) => validOfferDate(value) ? undefined : "Wpisz prawidłową datę, np. 2027-01-16." },
});

export const offerCollection: Collection = {
  name: "offer",
  label: "2. OFERTY — obozy i terminy",
  path: "content/offers",
  format: "json",
  defaultItem: () => ({
    title: "", featured: false, order: 10, departureCity: "Częstochowa",
    terms: [], pl: { included: [], highlights: [] }, en: {},
  }),
  ui: {
    allowedActions: { create: true, delete: true, createFolder: false, createNestedFolder: false },
    filename: {
      slugify: (values) => offerFilename(String(values.title || "")),
      readonly: true,
      description: "Nazwa pliku powstaje automatycznie z nazwy oferty. Nowa oferta musi mieć inną nazwę niż istniejące oferty.",
    },
    beforeSubmit: async ({ values }) => {
      const pl = (values.pl || {}) as Record<string, unknown>;
      const terms = (values.terms || []) as Array<{ label: string; start: string; end: string }>;
      if (values.featured && terms.length === 0) throw new Error("Dodaj przynajmniej jeden termin przed opublikowaniem oferty.");
      for (const term of terms) {
        if (!validOfferDate(term.start) || !validOfferDate(term.end) || term.end < term.start) {
          throw new Error("Sprawdź terminy: daty muszą być prawidłowe, a koniec nie może wypadać przed początkiem.");
        }
      }
      return { ...values, title: String(values.title || pl.title || "").trim(), pl: { ...pl, title: String(values.title || pl.title || "").trim() } };
    },
  },
  fields: [
    {
      type: "string", name: "title", label: "Nazwa oferty", isTitle: true, required: true,
      description: "Pełna nazwa widoczna na stronie i liście ofert, np. PORONIN 2027 START.",
      ui: { validate: (value) => offerFilename(value || "") ? undefined : "Wpisz nazwę oferty zawierającą litery lub cyfry." },
    },
    { type: "string", name: "slug", ui: { component: "hidden" } },
    { type: "image", name: "image", label: "Zdjęcie główne oferty", required: true },
    {
      type: "boolean", name: "featured", label: "Pokazuj ofertę na stronie",
      description: "Włącz po uzupełnieniu oferty. Wyłączenie ukrywa ją na stronie głównej, w ofercie i w zapisach. Po Save publikacja trwa zwykle kilka minut.",
    },
    {
      type: "number", name: "order", label: "Kolejność na stronie",
      description: "Mniejsza liczba oznacza wcześniejszą pozycję, np. 1, 2, 3.",
    },
    { type: "string", name: "departureCity", label: "Miejsce wyjazdu", required: true },
    {
      type: "string", name: "galleryFolder", label: "Galeria zdjęć",
      description: "Możesz przypisać istniejącą galerię. START i PRO korzystają ze wspólnej galerii Poronina.",
      options: [
        { value: "", label: "Wszystkie galerie" },
        { value: "jaroslawiec", label: "Jarosławiec" },
        { value: "ostrow-pieckowskie", label: "Ostrów Pieckowskie" },
        { value: "poronin-zimowy", label: "Poronin" },
      ],
    },
    {
      type: "object", name: "terms", label: "Terminy do wyboru w zapisach", list: true,
      description: "Dodaj każdy turnus osobno. Te daty zasilają formularz zapisów i odliczanie.",
      ui: {
        itemProps: (item) => ({ label: `${item.label || "Nowy turnus"}${item.start ? ` — ${item.start}` : ""}` }),
        defaultItem: { label: "Turnus", start: "", end: "" },
        validate: (value, allValues) => {
          if (allValues.featured && !value?.length) return "Dodaj przynajmniej jeden termin do opublikowanej oferty.";
          const terms = value as unknown as Array<{ start: string; end: string }> | undefined;
          if (terms?.some((term) => term.start && term.end && term.end < term.start)) return "Data końca nie może wypadać przed datą początku.";
        },
      },
      fields: [
        { type: "string", name: "label", label: "Nazwa terminu", required: true },
        dateField("start", "Początek turnusu"), dateField("end", "Koniec turnusu"),
      ],
    },
    {
      type: "object", name: "pl", label: "Opis oferty po polsku",
      fields: [
        { type: "string", name: "title", ui: { component: "hidden" } },
        { type: "string", name: "place", label: "Miejsce", required: true },
        { type: "string", name: "season", label: "Sezon, np. Zima 2027", required: true },
        { type: "string", name: "age", label: "Wiek uczestników", required: true },
        { type: "string", name: "date", label: "Termin tekstowo (opcjonalnie)", description: "Pozostaw puste, aby strona wyświetliła daty z listy turnusów." },
        { type: "string", name: "price", label: "Cena, np. 2500 zł", required: true },
        { type: "string", name: "short", label: "Opis programu", required: true, ui: { component: "textarea" } },
        { type: "string", name: "accommodation", label: "Zakwaterowanie", required: true },
        { type: "string", name: "food", label: "Wyżywienie", required: true },
        { type: "string", name: "transport", label: "Transport", required: true },
        { type: "string", name: "included", label: "Co obejmuje cena", list: true },
        { type: "string", name: "highlights", label: "Atrakcje / najważniejsze punkty", list: true },
      ],
    },
    {
      type: "object", name: "en", label: "Wersja angielska (opcjonalnie)",
      description: "Puste pola korzystają z polskiej treści. Możesz uzupełnić tłumaczenie później.",
      fields: [
        { type: "string", name: "title", label: "Camp name" },
        { type: "string", name: "place", label: "Place" },
        { type: "string", name: "season", label: "Season" },
        { type: "string", name: "age", label: "Age" },
        { type: "string", name: "date", label: "Date text" },
        { type: "string", name: "price", label: "Price" },
        { type: "string", name: "short", label: "Programme description", ui: { component: "textarea" } },
        { type: "string", name: "accommodation", label: "Accommodation" },
        { type: "string", name: "food", label: "Food" },
        { type: "string", name: "transport", label: "Transport" },
        { type: "string", name: "included", label: "Included", list: true },
        { type: "string", name: "highlights", label: "Highlights", list: true },
      ],
    },
  ],
};
