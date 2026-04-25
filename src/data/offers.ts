export type OfferItem = {
  slug: string;
  image: string;
  featured: boolean;
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
    image: "/images/jaroslawiec/main.jfif",
    featured: true,
    pl: {
      title: "Jarosławiec",
      place: "Jarosławiec • morze",
      season: "Wakacje 2026",
      age: "10–16 lat",
      date: "15.07 – 24.07.2026",
      price: "2499 zł",
      short:
        "Letni wyjazd nad morze dla dzieci i młodzieży. W programie aktywność, integracja, wypoczynek oraz atrakcje, które dają dzieciom prawdziwą frajdę.",
      accommodation: "OW Barka",
      food: "3 posiłki dziennie + podwieczorek",
      transport: "Autokar z Opola i okolic",
      included: [
        "opieka kadry i organizacja pobytu",
        "zakwaterowanie i pełne wyżywienie",
        "ubezpieczenie NNW",
        "program zajęć i atrakcji",
      ],
      highlights: [
        "aquapark i basen",
        "wycieczka całodniowa do Darłowa",
        "rejs statkiem i gry terenowe",
        "kajaki, dmuchańce i wycieczki rowerowe",
      ],
    },
    en: {
      title: "Jaroslawiec",
      place: "Jaroslawiec • seaside",
      season: "Summer 2026",
      age: "10–16 years",
      date: "15.07 – 24.07.2026",
      price: "2499 PLN",
      short:
        "A summer seaside trip for children and teenagers. The program combines activity, integration, relaxation and attractions that children genuinely enjoy.",
      accommodation: "OW Barka",
      food: "3 meals per day + afternoon snack",
      transport: "Coach transport from Opole area",
      included: [
        "staff care and full trip organization",
        "accommodation and full board",
        "accident insurance",
        "activity and attraction program",
      ],
      highlights: [
        "aquapark and swimming pool",
        "full-day trip to Darlowo",
        "boat cruise and field games",
        "kayaks, inflatables and bike trips",
      ],
    },
  },
  {
    slug: "ostrow-pieckowskie",
    image: "/images/ostrow-pieckowskie/main.jfif",
    featured: true,
    pl: {
      title: "Ostrów Pieckowskie",
      place: "Mazury • Ostrów Pieckowskie",
      season: "Wakacje 2026",
      age: "10–16 lat",
      date: "06.08 – 15.08.2026",
      price: "2599 zł",
      short:
        "Mazurski wyjazd dla dzieci i młodzieży nastawiony na aktywność, dobrą atmosferę, wycieczki i wypoczynek w naturalnym otoczeniu.",
      accommodation: "MazuryCamp",
      food: "pełne wyżywienie",
      transport: "Autokar z Opola i okolic",
      included: [
        "zakwaterowanie w ośrodku nad jeziorem",
        "pełne wyżywienie",
        "zajęcia sportowe i rekreacyjne",
        "opieka kadry i organizacja wyjazdu",
      ],
      highlights: [
        "wycieczka całodniowa do Mikołajek",
        "rejs statkiem i gry terenowe",
        "aquapark i kajaki",
        "wycieczka rowerowa i zajęcia sportowe",
      ],
    },
    en: {
      title: "Ostrow Pieckowskie",
      place: "Masuria • Ostrow Pieckowskie",
      season: "Summer 2026",
      age: "10–16 years",
      date: "06.08 – 15.08.2026",
      price: "2599 PLN",
      short:
        "A Masurian trip for children and teenagers focused on activity, good atmosphere, excursions and rest surrounded by nature.",
      accommodation: "MazuryCamp",
      food: "full board",
      transport: "Coach transport from Opole area",
      included: [
        "accommodation in a lakeside resort",
        "full board",
        "sports and recreation activities",
        "staff care and trip organization",
      ],
      highlights: [
        "full-day trip to Mikolajki",
        "boat cruise and field games",
        "aquapark and kayaks",
        "bike trip and sports activities",
      ],
    },
  },
  {
    slug: "poronin-zimowy",
    image: "/images/poronin-zimowy/main.jfif",
    featured: true,
    pl: {
      title: "Poronin",
      place: "Poronin • obóz zimowy",
      season: "Zima 2027",
      age: "10–16 lat",
      date: "18.01 – 24.01.2027",
      price: "1899 zł",
      short:
        "Zimowy wyjazd w górskim klimacie dla dzieci i młodzieży. Sport, aktywności, integracja i program dopasowany do sezonu zimowego.",
      accommodation: "Weronika Inn",
      food: "pełne wyżywienie",
      transport: "Autokar z Opola i okolic",
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
      age: "10–16 years",
      date: "18.01 – 24.01.2027",
      price: "1899 PLN",
      short:
        "A winter mountain trip for children and teenagers. Sport, activities, integration and a program adjusted to the winter season.",
      accommodation: "Weronika Inn",
      food: "full board",
      transport: "Coach transport from Opole area",
      included: [
        "staff care and trip organization",
        "accommodation and full board",
        "accident insurance",
        "winter attraction program",
      ],
      highlights: [
        "Chocholowskie thermal baths",
        "horse sleigh ride with bonfire",
        "sports hall activities",
        "Gubalowka and Zakopane trip",
      ],
    },
  },
];
