import jaroslawiec from "../../content/offers/jaroslawiec.json";
import ostrowPieckowskie from "../../content/offers/ostrow-pieckowskie.json";
import poroninZimowy from "../../content/offers/poronin-zimowy.json";

export type OfferTerm = {
  label: string;
  start: string; // YYYY-MM-DD
  end: string; // YYYY-MM-DD
};

export type OfferItem = {
  slug: string;
  image: string;
  featured: boolean;
  departureCity: string;
  terms: OfferTerm[];
  pl: {
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
  en: {
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
};

export const offers: OfferItem[] = [
  jaroslawiec,
  ostrowPieckowskie,
  poroninZimowy,
] as OfferItem[];
