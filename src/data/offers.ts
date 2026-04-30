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
  {
    slug: "jaroslawiec",
    image: "/images/ogolne/jaroslawiec_oferta.jpeg",
    featured: true,
    departureCity: "Częstochowa",
    terms: [
      {
        label: "Turnus letni",
        start: "2026-07-15",
        end: "2026-07-24",
      },
    ],
    pl: {
      title: "Jarosławiec",
      place: "Jarosławiec • morze",
      season: "Wakacje 2026",
      age: "8–16 lat",
      date: "15.07 – 24.07.2026",
      price: "2490 zł",
      short:
        "Letni wyjazd nad morze dla dzieci i młodzieży. W programie aktywność, integracja, plażowanie, wycieczki i dużo wakacyjnej radości.",
      accommodation: "Ośrodek wypoczynkowy w Jarosławcu, pokoje 3–5 osobowe",
      food: "3 posiłki dziennie + podwieczorek",
      transport: "Autokar z Częstochowy i okolic",
      included: [
        "opieka doświadczonej kadry",
        "pełen program zajęć i atrakcji",
        "ubezpieczenie NNW",
        "zakwaterowanie i pełne wyżywienie",
      ],
      highlights: [
        "aktywny wypoczynek nad morzem",
        "gry, zabawy i integracja",
        "plażowanie i wycieczki",
        "sport i zajęcia ruchowe",
      ],
    },
    en: {
      title: "Jaroslawiec",
      place: "Jaroslawiec • seaside",
      season: "Summer 2026",
      age: "8–16 years",
      date: "15.07 – 24.07.2026",
      price: "2490 PLN",
      short:
        "A seaside summer trip for children and teenagers full of activity, integration, relaxation and holiday fun.",
      accommodation: "Holiday resort in Jaroslawiec, 3–5 person rooms",
      food: "3 meals a day + afternoon snack",
      transport: "Coach from Czestochowa and nearby areas",
      included: [
        "experienced staff care",
        "full activity and attraction program",
        "accident insurance",
        "accommodation and full board",
      ],
      highlights: [
        "active holiday by the sea",
        "games, fun and integration",
        "beach time and trips",
        "sports and movement activities",
      ],
    },
  },
  {
    slug: "ostrow-pieckowskie",
    image: "/images/ogolne/ostrow_oferta.jpeg",
    featured: true,
    departureCity: "Częstochowa",
    terms: [
      {
        label: "Turnus letni",
        start: "2026-08-06",
        end: "2026-08-15",
      },
    ],
    pl: {
      title: "Ostrów Pieckowskie",
      place: "Mazury • Ostrów Pieckowskie",
      season: "Wakacje 2026",
      age: "8–16 lat",
      date: "06.08 – 15.08.2026",
      price: "2590 zł",
      short:
        "Mazurski wyjazd dla dzieci i młodzieży nastawiony na aktywność, dobrą atmosferę, kontakt z naturą i wspólne przeżycia.",
      accommodation: "Ośrodek nad jeziorem MazuryCamp",
      food: "pełne wyżywienie",
      transport: "Autokar z Częstochowy i okolic",
      included: [
        "zakwaterowanie w ośrodku nad jeziorem",
        "pełne wyżywienie",
        "zajęcia sportowe i rekreacyjne",
        "opieka kadry i organizacja wyjazdu",
      ],
      highlights: [
        "zajęcia sportowe i rekreacyjne",
        "czas nad jeziorem",
        "wycieczki i integracja",
        "aktywny wypoczynek blisko natury",
      ],
    },
    en: {
      title: "Ostrow Pieckowskie",
      place: "Masuria • Ostrow Pieckowskie",
      season: "Summer 2026",
      age: "8–16 years",
      date: "06.08 – 15.08.2026",
      price: "2590 PLN",
      short:
        "A Masurian trip for children and teenagers focused on activity, a great atmosphere, nature and shared experiences.",
      accommodation: "MazuryCamp lakeside resort",
      food: "full board",
      transport: "Coach from Czestochowa and nearby areas",
      included: [
        "accommodation in a lakeside resort",
        "full board",
        "sports and recreation activities",
        "staff care and trip organization",
      ],
      highlights: [
        "sports and recreation activities",
        "time by the lake",
        "trips and integration",
        "active rest close to nature",
      ],
    },
  },
  {
    slug: "poronin-zimowy",
    image: "/images/ogolne/poronin_oferta.jpeg",
    featured: true,
    departureCity: "Częstochowa",
    terms: [
      {
        label: "Turnus 1",
        start: "2027-01-16",
        end: "2027-01-22",
      },
      {
        label: "Turnus 2",
        start: "2027-01-23",
        end: "2027-01-29",
      },
    ],
    pl: {
      title: "Poronin",
      place: "Poronin • obóz zimowy",
      season: "Zima 2027",
      age: "8–16 lat",
      date: "16.01 – 22.01.2027 oraz 23.01 – 29.01.2027",
      price: "1990 zł",
      short:
        "Zimowy wyjazd w górskim klimacie dla dzieci i młodzieży. Sport, zimowe atrakcje, integracja i mnóstwo dobrej zabawy.",
      accommodation: "Pensjonat w Poroninie, pokoje 3–5 osobowe",
      food: "śniadanie, obiad, kolacja",
      transport: "Autokar z Częstochowy i okolic",
      included: [
        "opieka kadry i organizacja wyjazdu",
        "zakwaterowanie i pełne wyżywienie",
        "ubezpieczenie NNW",
        "program zimowych atrakcji",
      ],
      highlights: [
        "termy Chochołowskie",
        "kulig z ogniskiem",
        "zajęcia na hali sportowej",
        "wjazd na Gubałówkę i wycieczka do Zakopanego",
      ],
    },
    en: {
      title: "Poronin",
      place: "Poronin • winter camp",
      season: "Winter 2027",
      age: "8–16 years",
      date: "16.01 – 22.01.2027 and 23.01 – 29.01.2027",
      price: "1990 PLN",
      short:
        "A winter mountain trip for children and teenagers with sport, winter attractions, integration and lots of fun.",
      accommodation: "Guesthouse in Poronin, 3–5 person rooms",
      food: "breakfast, lunch, dinner",
      transport: "Coach from Czestochowa and nearby areas",
      included: [
        "staff care and trip organization",
        "accommodation and full board",
        "accident insurance",
        "winter attractions program",
      ],
      highlights: [
        "Chocholowskie thermal baths",
        "sleigh ride with bonfire",
        "sports hall activities",
        "Gubalowka trip and Zakopane visit",
      ],
    },
  },
];
