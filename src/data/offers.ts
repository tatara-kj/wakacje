import { buildOffers } from "./offer-utils";

export type { OfferContent, OfferItem, OfferTerm } from "./offer-utils";
export { offerGalleryHref, offerRegistrationHref } from "./offer-utils";

const documents = import.meta.glob("../../content/offers/**/*.json", {
  eager: true,
  import: "default",
});

// One published list feeds the home page, offer details, countdown and registration.
export const offers = buildOffers(documents);
