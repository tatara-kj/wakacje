export type OfferTerm = {
  label: string;
  start: string;
  end: string;
};

export type OfferContent = {
  title: string;
  place: string;
  season: string;
  age: string;
  date: string;
  price: string;
  short: string;
  accommodation: string;
  food: string;
  transport: string;
  included: string[];
  highlights: string[];
};

export type OfferItem = {
  slug: string;
  image: string;
  featured: boolean;
  order: number;
  galleryFolder: string;
  departureCity: string;
  terms: OfferTerm[];
  pl: OfferContent;
  en: OfferContent;
};

const legacyOrder: Record<string, number> = {
  jaroslawiec: 1,
  "ostrow-pieckowskie": 2,
  "poronin-zimowy": 3,
};

const legacyGallery: Record<string, string> = {
  jaroslawiec: "jaroslawiec",
  "ostrow-pieckowskie": "ostrow-pieckowskie",
  "poronin-zimowy": "poronin-zimowy",
};

const textFields = [
  "title", "place", "season", "age", "date", "price", "short",
  "accommodation", "food", "transport",
] as const;

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {};
}

function text(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function textList(value: unknown, fallback: string[] = []): string[] {
  const items = Array.isArray(value)
    ? value.map((item) => text(item)).filter(Boolean)
    : [];
  return items.length ? items : [...fallback];
}

function safeSlug(value: string): string {
  return value.toLowerCase().replaceAll("ł", "l")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "oferta";
}

function validDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function normalizeContent(value: unknown, fallback?: OfferContent): OfferContent {
  const source = record(value);
  const content = {} as OfferContent;
  for (const field of textFields) content[field] = text(source[field], fallback?.[field]);
  content.included = textList(source.included, fallback?.included);
  content.highlights = textList(source.highlights, fallback?.highlights);
  return content;
}

/** Every JSON document saved by Tina is discovered, including nested folders. */
export function buildOffers(documents: Record<string, unknown>): OfferItem[] {
  const usedSlugs = new Set<string>();
  const offers: OfferItem[] = [];

  for (const [sourcePath, value] of Object.entries(documents).sort(([a], [b]) => a.localeCompare(b))) {
    const source = record(value);
    if (!Object.keys(source).length || source.featured === false) continue;

    const filename = sourcePath.split("/").at(-1)?.replace(/\.json$/i, "") || "oferta";
    // Tina Duplicate copies fields, including the old slug. The new document's
    // filename stays unique and does not change when its title is edited.
    const requestedSlug = safeSlug(filename);
    let slug = requestedSlug;
    let suffix = 2;
    while (usedSlugs.has(slug)) slug = `${requestedSlug}-${suffix++}`;
    usedSlugs.add(slug);

    const pl = normalizeContent(source.pl);
    pl.title = text(source.title, pl.title || filename);
    const terms = (Array.isArray(source.terms) ? source.terms : []).flatMap((value) => {
      const term = record(value);
      return validDate(term.start) && validDate(term.end) && term.end >= term.start
        ? [{ label: text(term.label, "Termin"), start: term.start, end: term.end }]
        : [];
    });
    if (!pl.date) {
      const displayDate = (value: string) => value.split("-").reverse().join(".");
      pl.date = terms.map((term) => `${displayDate(term.start)} – ${displayDate(term.end)}`).join(" / ");
    }
    const folder = text(source.galleryFolder, legacyGallery[filename]);

    offers.push({
      slug,
      image: text(source.image, "/images/ogolne/hero-main.png"),
      featured: true,
      order: typeof source.order === "number" && Number.isFinite(source.order)
        ? source.order : legacyOrder[filename] ?? 1000,
      galleryFolder: /^[a-zA-Z0-9_-]+$/.test(folder) ? folder : "",
      departureCity: text(source.departureCity, "Częstochowa"),
      terms,
      pl,
      en: normalizeContent(source.en, pl),
    });
  }

  return offers.sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug, "pl"));
}

export function offerGalleryHref(offer: OfferItem, lang: "pl" | "en" = "pl"): string {
  const base = lang === "en" ? "/en/galeria" : "/galeria";
  return offer.galleryFolder ? `${base}?oboz=${encodeURIComponent(offer.galleryFolder)}` : base;
}

export function offerRegistrationHref(offer: OfferItem, lang: "pl" | "en" = "pl"): string {
  return `${lang === "en" ? "/en/zapisy" : "/zapisy"}?oboz=${encodeURIComponent(offer.slug)}`;
}
