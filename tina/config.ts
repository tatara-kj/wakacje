import { defineConfig } from "tinacms";

const branch =
  process.env.TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "local",
  token: process.env.TINA_TOKEN || "local",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "companiesPage",
        label: "12. DLA FIRM — kolonie dla pracowników",
        path: "content/companies",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "Dla firm PL",
            fields: [
              {
                type: "string",
                name: "pageEyebrow",
                label: "Mały napis nad tytułem",
              },
              { type: "string", name: "pageTitle", label: "Tytuł strony" },
              {
                type: "string",
                name: "pageLead",
                label: "Opis pod tytułem",
                ui: { component: "textarea" },
              },
              { type: "image", name: "heroImage", label: "Zdjęcie główne" },
              { type: "string", name: "heroImageAlt", label: "Opis zdjęcia" },
              {
                type: "string",
                name: "sectionEyebrow",
                label: "Mały napis w sekcji",
              },
              {
                type: "string",
                name: "sectionTitle",
                label: "Tytuł głównej sekcji",
              },
              {
                type: "string",
                name: "sectionLead",
                label: "Opis głównej sekcji",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "features",
                label: "Kafelki / korzyści",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Tytuł kafelka" },
                  {
                    type: "string",
                    name: "text",
                    label: "Opis kafelka",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "string",
                name: "ctaTitle",
                label: "Tytuł sekcji końcowej",
              },
              {
                type: "string",
                name: "ctaText",
                label: "Opis sekcji końcowej",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "ctaButton",
                label: "Tekst głównego przycisku",
              },
              {
                type: "string",
                name: "secondaryButton",
                label: "Tekst drugiego przycisku",
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "Dla firm EN",
            fields: [
              { type: "string", name: "pageEyebrow", label: "Small label" },
              { type: "string", name: "pageTitle", label: "Page title" },
              {
                type: "string",
                name: "pageLead",
                label: "Lead",
                ui: { component: "textarea" },
              },
              { type: "image", name: "heroImage", label: "Hero image" },
              { type: "string", name: "heroImageAlt", label: "Image alt" },
              {
                type: "string",
                name: "sectionEyebrow",
                label: "Section label",
              },
              { type: "string", name: "sectionTitle", label: "Section title" },
              {
                type: "string",
                name: "sectionLead",
                label: "Section lead",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Feature title" },
                  {
                    type: "string",
                    name: "text",
                    label: "Feature text",
                    ui: { component: "textarea" },
                  },
                ],
              },
              { type: "string", name: "ctaTitle", label: "CTA title" },
              {
                type: "string",
                name: "ctaText",
                label: "CTA text",
                ui: { component: "textarea" },
              },
              { type: "string", name: "ctaButton", label: "Main button text" },
              {
                type: "string",
                name: "secondaryButton",
                label: "Second button text",
              },
            ],
          },
        ],
      },
      {
        name: "homePage",
        label: "1. START — strona główna",
        path: "content/home",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "Treść strony głównej PL",
            fields: [
              {
                type: "string",
                name: "heroEyebrow",
                label: "Mały napis nad tytułem",
              },
              {
                type: "string",
                name: "heroTitleLine1",
                label: "Pierwsza część tytułu",
              },
              {
                type: "string",
                name: "heroTitleAccent",
                label: "Pomarańczowa część tytułu",
              },
              {
                type: "string",
                name: "heroLead",
                label: "Opis pod tytułem",
                ui: { component: "textarea" },
              },
              { type: "image", name: "heroImage", label: "Zdjęcie główne" },
              { type: "string", name: "heroImageAlt", label: "Opis zdjęcia" },
              {
                type: "string",
                name: "heroSmallPoints",
                label: "Małe punkty pod opisem",
                list: true,
              },
              {
                type: "string",
                name: "heroTags",
                label: "Krótkie hasła",
                list: true,
              },
              {
                type: "string",
                name: "heroChips",
                label: "Białe etykiety pod tekstem",
                list: true,
              },
              {
                type: "string",
                name: "heroButtonPrimary",
                label: "Tekst głównego przycisku",
              },
              {
                type: "string",
                name: "heroButtonSecondary",
                label: "Tekst drugiego przycisku",
              },
              {
                type: "string",
                name: "floatingCardTopTitle",
                label: "Mała karta na zdjęciu — tytuł 1",
              },
              {
                type: "string",
                name: "floatingCardTopText",
                label: "Mała karta na zdjęciu — tekst 1",
              },
              {
                type: "string",
                name: "floatingCardBottomTitle",
                label: "Mała karta na zdjęciu — tytuł 2",
              },
              {
                type: "string",
                name: "floatingCardBottomText",
                label: "Mała karta na zdjęciu — tekst 2",
              },
              {
                type: "object",
                name: "infoCards",
                label: "Trzy karty informacyjne po prawej",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Tytuł karty" },
                  {
                    type: "string",
                    name: "text",
                    label: "Tekst karty",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "string",
                name: "offerEyebrow",
                label: "Sekcja oferta — mały napis",
              },
              {
                type: "string",
                name: "offerTitle",
                label: "Sekcja oferta — tytuł",
              },
              {
                type: "string",
                name: "offerLead",
                label: "Sekcja oferta — opis",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "bottomEyebrow",
                label: "Dolny baner — mały napis",
              },
              {
                type: "string",
                name: "bottomTitle",
                label: "Dolny baner — tytuł",
              },
              {
                type: "string",
                name: "bottomLead",
                label: "Dolny baner — opis",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "bottomButtonPrimary",
                label: "Dolny baner — przycisk 1",
              },
              {
                type: "string",
                name: "bottomButtonSecondary",
                label: "Dolny baner — przycisk 2",
              },
            ],
          },
        ],
      },

      {
        name: "offer",
        label: "2. OFERTY — obozy i terminy",
        path: "content/offers",
        format: "json",
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Slug / adres techniczny",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Zdjęcie główne oferty",
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Pokazuj ofertę na stronie",
          },
          {
            type: "string",
            name: "departureCity",
            label: "Miejsce wyjazdu",
            required: true,
          },
          {
            type: "object",
            name: "terms",
            label: "Terminy",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Nazwa terminu",
                required: true,
              },
              {
                type: "string",
                name: "start",
                label: "Data startu: RRRR-MM-DD",
                required: true,
              },
              {
                type: "string",
                name: "end",
                label: "Data końca: RRRR-MM-DD",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "pl",
            label: "Treść PL",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Nazwa obozu",
                required: true,
              },
              {
                type: "string",
                name: "place",
                label: "Miejsce",
                required: true,
              },
              {
                type: "string",
                name: "season",
                label: "Sezon",
                required: true,
              },
              {
                type: "string",
                name: "age",
                label: "Wiek uczestników",
                required: true,
              },
              {
                type: "string",
                name: "date",
                label: "Termin tekstowo",
                required: true,
              },
              { type: "string", name: "price", label: "Cena", required: true },
              {
                type: "string",
                name: "short",
                label: "Krótki opis",
                required: true,
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "accommodation",
                label: "Zakwaterowanie",
                required: true,
              },
              {
                type: "string",
                name: "food",
                label: "Wyżywienie",
                required: true,
              },
              {
                type: "string",
                name: "transport",
                label: "Transport",
                required: true,
              },
              {
                type: "string",
                name: "included",
                label: "Co obejmuje cena",
                list: true,
              },
              {
                type: "string",
                name: "highlights",
                label: "Atrakcje / najważniejsze punkty",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "Treść EN",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Camp name",
                required: true,
              },
              { type: "string", name: "place", label: "Place", required: true },
              {
                type: "string",
                name: "season",
                label: "Season",
                required: true,
              },
              { type: "string", name: "age", label: "Age", required: true },
              {
                type: "string",
                name: "date",
                label: "Date text",
                required: true,
              },
              { type: "string", name: "price", label: "Price", required: true },
              {
                type: "string",
                name: "short",
                label: "Short description",
                required: true,
                ui: { component: "textarea" },
              },
              { type: "string", name: "accommodation", label: "Accommodation" },
              { type: "string", name: "food", label: "Food" },
              { type: "string", name: "transport", label: "Transport" },
              {
                type: "string",
                name: "included",
                label: "Included",
                list: true,
              },
              {
                type: "string",
                name: "highlights",
                label: "Highlights",
                list: true,
              },
            ],
          },
        ],
      },

      {
        name: "aboutPage",
        label: "3. O NAS — tekst i zdjęcie",
        path: "content/about",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "Treść PL",
            fields: [
              {
                type: "string",
                name: "pageEyebrow",
                label: "Mały napis nad tytułem",
              },
              { type: "string", name: "pageTitle", label: "Tytuł strony" },
              {
                type: "string",
                name: "pageLead",
                label: "Krótki opis pod tytułem",
                ui: { component: "textarea" },
              },
              { type: "image", name: "image", label: "Zdjęcie w sekcji O nas" },
              { type: "string", name: "imageAlt", label: "Opis zdjęcia" },
              { type: "string", name: "eyebrow", label: "Mały napis w karcie" },
              { type: "string", name: "title", label: "Tytuł tekstu" },
              {
                type: "string",
                name: "paragraphs",
                label: "Akapity tekstu",
                list: true,
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "Treść EN",
            fields: [
              { type: "string", name: "pageEyebrow", label: "Small label" },
              { type: "string", name: "pageTitle", label: "Page title" },
              {
                type: "string",
                name: "pageLead",
                label: "Lead",
                ui: { component: "textarea" },
              },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image alt" },
              { type: "string", name: "eyebrow", label: "Card label" },
              { type: "string", name: "title", label: "Text title" },
              {
                type: "string",
                name: "paragraphs",
                label: "Paragraphs",
                list: true,
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      {
        name: "faqPage",
        label: "4. PYTANIA — FAQ",
        path: "content/faq",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "FAQ PL",
            fields: [
              { type: "string", name: "eyebrow", label: "Mały napis" },
              { type: "string", name: "title", label: "Tytuł sekcji" },
              {
                type: "string",
                name: "lead",
                label: "Opis sekcji",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Pytania",
                list: true,
                fields: [
                  { type: "string", name: "q", label: "Pytanie" },
                  {
                    type: "string",
                    name: "a",
                    label: "Odpowiedź",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "FAQ EN",
            fields: [
              { type: "string", name: "eyebrow", label: "Small label" },
              { type: "string", name: "title", label: "Section title" },
              {
                type: "string",
                name: "lead",
                label: "Lead",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Questions",
                list: true,
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  {
                    type: "string",
                    name: "a",
                    label: "Answer",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "reviewsSection",
        label: "5. OPINIE — rodzice",
        path: "content/reviews",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "Opinie PL",
            fields: [
              { type: "string", name: "eyebrow", label: "Mały napis" },
              { type: "string", name: "title", label: "Tytuł sekcji" },
              {
                type: "string",
                name: "lead",
                label: "Opis sekcji",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Lista opinii",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Imię / podpis, np. Karolina M.",
                  },
                  { type: "number", name: "rating", label: "Ocena od 1 do 5" },
                  {
                    type: "string",
                    name: "text",
                    label: "Treść opinii",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "Opinie EN",
            fields: [
              { type: "string", name: "eyebrow", label: "Small label" },
              { type: "string", name: "title", label: "Section title" },
              {
                type: "string",
                name: "lead",
                label: "Lead",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Reviews",
                list: true,
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "number", name: "rating", label: "Rating 1-5" },
                  {
                    type: "string",
                    name: "text",
                    label: "Review text",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "socialSection",
        label: "5. INSTAGRAM — sekcja social",
        path: "content/social",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "Treść PL",
            fields: [
              { type: "string", name: "eyebrow", label: "Mały napis" },
              { type: "string", name: "title", label: "Tytuł sekcji" },
              {
                type: "string",
                name: "lead",
                label: "Opis sekcji",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "instagramTitle",
                label: "Tytuł karty Instagram",
              },
              {
                type: "string",
                name: "instagramText",
                label: "Opis karty Instagram",
                ui: { component: "textarea" },
              },
              { type: "string", name: "button", label: "Tekst przycisku" },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "Treść EN",
            fields: [
              { type: "string", name: "eyebrow", label: "Small label" },
              { type: "string", name: "title", label: "Section title" },
              {
                type: "string",
                name: "lead",
                label: "Lead",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "instagramTitle",
                label: "Instagram card title",
              },
              {
                type: "string",
                name: "instagramText",
                label: "Instagram card text",
                ui: { component: "textarea" },
              },
              { type: "string", name: "button", label: "Button text" },
            ],
          },
          { type: "string", name: "instagramUrl", label: "Link do Instagrama" },
          {
            type: "string",
            name: "elfsightClass",
            label: "Kod / klasa widgetu Elfsight",
          },
        ],
      },

      {
        name: "videosSection",
        label: "6. FILMY — video na stronie",
        path: "content/videos",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "Treść PL",
            fields: [
              { type: "string", name: "eyebrow", label: "Mały napis" },
              { type: "string", name: "title", label: "Tytuł sekcji" },
              {
                type: "string",
                name: "lead",
                label: "Opis sekcji",
                ui: { component: "textarea" },
              },
              { type: "string", name: "play", label: "Tekst przycisku Play" },
              {
                type: "object",
                name: "items",
                label: "Filmy",
                list: true,
                fields: [
                  { type: "string", name: "badge", label: "Etykieta filmu" },
                  {
                    type: "image",
                    name: "poster",
                    label: "Miniatura / plakat filmu",
                  },
                  {
                    type: "string",
                    name: "src",
                    label: "Ścieżka do filmu, np. /images/ogolne/tiktok1.mp4",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "Treść EN",
            fields: [
              { type: "string", name: "eyebrow", label: "Small label" },
              { type: "string", name: "title", label: "Section title" },
              {
                type: "string",
                name: "lead",
                label: "Lead",
                ui: { component: "textarea" },
              },
              { type: "string", name: "play", label: "Play button text" },
              {
                type: "object",
                name: "items",
                label: "Videos",
                list: true,
                fields: [
                  { type: "string", name: "badge", label: "Video label" },
                  { type: "image", name: "poster", label: "Poster image" },
                  { type: "string", name: "src", label: "Video file path" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "galleryPage",
        label: "8. GALERIA — zdjęcia",
        path: "content/gallery",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "Galeria PL",
            fields: [
              {
                type: "string",
                name: "pageEyebrow",
                label: "Mały napis nad tytułem",
              },
              {
                type: "string",
                name: "pageTitle",
                label: "Tytuł strony galerii",
              },
              {
                type: "string",
                name: "pageLead",
                label: "Opis pod tytułem",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "sections",
                label: "Sekcje galerii — obozy",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "Sekcja galerii",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Nazwa obozu / sekcji",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Krótki tytuł pod nazwą",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Opis sekcji",
                    ui: { component: "textarea" },
                  },
                  {
                    type: "object",
                    name: "images",
                    label: "Zdjęcia w tej sekcji",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.caption || item?.short || "Zdjęcie",
                      }),
                    },
                    fields: [
                      {
                        type: "image",
                        name: "image",
                        label: "Zdjęcie",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "alt",
                        label: "Krótki opis zdjęcia",
                      },
                      {
                        type: "string",
                        name: "caption",
                        label: "Podpis pod zdjęciem",
                      },
                      {
                        type: "string",
                        name: "short",
                        label: "Krótki opis / podpis dodatkowy",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "Galeria EN",
            fields: [
              {
                type: "string",
                name: "pageEyebrow",
                label: "Small label",
              },
              {
                type: "string",
                name: "pageTitle",
                label: "Gallery page title",
              },
              {
                type: "string",
                name: "pageLead",
                label: "Page lead",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "sections",
                label: "Gallery sections",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "Gallery section",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section title",
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subtitle",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                  {
                    type: "object",
                    name: "images",
                    label: "Photos in this section",
                    list: true,
                    fields: [
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                      {
                        type: "string",
                        name: "alt",
                        label: "Image description",
                      },
                      {
                        type: "string",
                        name: "caption",
                        label: "Caption",
                      },
                      {
                        type: "string",
                        name: "short",
                        label: "Short text",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "contactPage",
        label: "9. KONTAKT — teksty strony",
        path: "content/contact",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "Kontakt PL",
            fields: [
              {
                type: "string",
                name: "pageEyebrow",
                label: "Mały napis nad tytułem",
              },
              { type: "string", name: "pageTitle", label: "Tytuł strony" },
              {
                type: "string",
                name: "pageLead",
                label: "Opis pod tytułem",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "mainEyebrow",
                label: "Mały napis w sekcji",
              },
              {
                type: "string",
                name: "mainTitle",
                label: "Tytuł sekcji kontaktu",
              },
              {
                type: "string",
                name: "mainLead",
                label: "Opis sekcji kontaktu",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "phoneLabel",
                label: "Nazwa pola telefon",
              },
              {
                type: "string",
                name: "phoneText",
                label: "Opis pod telefonem",
              },
              {
                type: "string",
                name: "emailLabel",
                label: "Nazwa pola e-mail",
              },
              { type: "string", name: "emailText", label: "Opis pod e-mailem" },
              {
                type: "string",
                name: "ownerLabel",
                label: "Nazwa pola osoba kontaktowa",
              },
              {
                type: "string",
                name: "ownerText",
                label: "Opis pod osobą kontaktową",
              },
              {
                type: "string",
                name: "registrationButton",
                label: "Tekst przycisku do zapisów",
              },
              {
                type: "string",
                name: "parentEyebrow",
                label: "Karta dla rodziców — mały napis",
              },
              {
                type: "string",
                name: "parentTitle",
                label: "Karta dla rodziców — tytuł",
              },
              {
                type: "string",
                name: "parentItems",
                label: "Lista informacji dla rodziców",
                list: true,
              },
              {
                type: "string",
                name: "infoEyebrow",
                label: "Dane formalne — mały napis",
              },
              {
                type: "string",
                name: "infoTitle",
                label: "Dane formalne — tytuł",
              },
              {
                type: "string",
                name: "infoText",
                label: "Dane formalne — opis",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "Kontakt EN",
            fields: [
              { type: "string", name: "pageEyebrow", label: "Small label" },
              { type: "string", name: "pageTitle", label: "Page title" },
              {
                type: "string",
                name: "pageLead",
                label: "Lead",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "mainEyebrow",
                label: "Section small label",
              },
              {
                type: "string",
                name: "mainTitle",
                label: "Contact section title",
              },
              {
                type: "string",
                name: "mainLead",
                label: "Contact section lead",
                ui: { component: "textarea" },
              },
              { type: "string", name: "phoneLabel", label: "Phone label" },
              { type: "string", name: "phoneText", label: "Phone text" },
              { type: "string", name: "emailLabel", label: "E-mail label" },
              { type: "string", name: "emailText", label: "E-mail text" },
              { type: "string", name: "ownerLabel", label: "Owner label" },
              { type: "string", name: "ownerText", label: "Owner text" },
              {
                type: "string",
                name: "registrationButton",
                label: "Registration button",
              },
              {
                type: "string",
                name: "parentEyebrow",
                label: "Parent card label",
              },
              {
                type: "string",
                name: "parentTitle",
                label: "Parent card title",
              },
              {
                type: "string",
                name: "parentItems",
                label: "Parent info list",
                list: true,
              },
              {
                type: "string",
                name: "infoEyebrow",
                label: "Formal info label",
              },
              { type: "string", name: "infoTitle", label: "Formal info title" },
              {
                type: "string",
                name: "infoText",
                label: "Formal info text",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      {
        name: "registrationPage",
        label: "10. ZAPISY — teksty formularza",
        path: "content/registration",
        format: "json",
        fields: [
          {
            type: "object",
            name: "pl",
            label: "Zapisy PL",
            fields: [
              {
                type: "string",
                name: "pageEyebrow",
                label: "Mały napis nad tytułem",
              },
              { type: "string", name: "pageTitle", label: "Tytuł strony" },
              {
                type: "string",
                name: "pageLead",
                label: "Opis pod tytułem",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "formEyebrow",
                label: "Formularz — mały napis",
              },
              { type: "string", name: "formTitle", label: "Formularz — tytuł" },
              {
                type: "string",
                name: "formLead",
                label: "Formularz — opis",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "parentName",
                label: "Pole: imię i nazwisko rodzica",
              },
              {
                type: "string",
                name: "childName",
                label: "Pole: imię i nazwisko dziecka",
              },
              { type: "string", name: "childAge", label: "Pole: wiek dziecka" },
              { type: "string", name: "email", label: "Pole: e-mail" },
              { type: "string", name: "phone", label: "Pole: telefon" },
              { type: "string", name: "camp", label: "Pole: wybór obozu" },
              { type: "string", name: "term", label: "Pole: wybór terminu" },
              { type: "string", name: "city", label: "Pole: miejsce wyjazdu" },
              {
                type: "string",
                name: "notes",
                label: "Pole: dodatkowe informacje",
              },
              {
                type: "string",
                name: "consent",
                label: "Treść zgody",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "submit",
                label: "Tekst przycisku wysłania",
              },
              {
                type: "string",
                name: "chooseCamp",
                label: "Placeholder: wybierz obóz",
              },
              {
                type: "string",
                name: "chooseTerm",
                label: "Placeholder: wybierz termin",
              },
              {
                type: "string",
                name: "firstChooseCamp",
                label: "Placeholder: najpierw wybierz obóz",
              },
              {
                type: "string",
                name: "success",
                label: "Komunikat po wysłaniu",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "sideProcessEyebrow",
                label: "Boczna karta 1 — mały napis",
              },
              {
                type: "string",
                name: "sideProcessTitle",
                label: "Boczna karta 1 — tytuł",
              },
              {
                type: "string",
                name: "sideProcessItems",
                label: "Boczna karta 1 — punkty",
                list: true,
              },
              {
                type: "string",
                name: "sideContactEyebrow",
                label: "Boczna karta 2 — mały napis",
              },
              {
                type: "string",
                name: "sideContactTitle",
                label: "Boczna karta 2 — tytuł",
              },
              {
                type: "string",
                name: "sideContactText",
                label: "Boczna karta 2 — opis",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "sideContactButton",
                label: "Boczna karta 2 — przycisk",
              },
              {
                type: "string",
                name: "sideImportantEyebrow",
                label: "Boczna karta 3 — mały napis",
              },
              {
                type: "string",
                name: "sideImportantTitle",
                label: "Boczna karta 3 — tytuł",
              },
              {
                type: "string",
                name: "sideImportantText",
                label: "Boczna karta 3 — opis",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "Zapisy EN",
            fields: [
              { type: "string", name: "pageEyebrow", label: "Small label" },
              { type: "string", name: "pageTitle", label: "Page title" },
              {
                type: "string",
                name: "pageLead",
                label: "Lead",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "formEyebrow",
                label: "Form small label",
              },
              { type: "string", name: "formTitle", label: "Form title" },
              {
                type: "string",
                name: "formLead",
                label: "Form lead",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "parentName",
                label: "Parent name field",
              },
              { type: "string", name: "childName", label: "Child name field" },
              { type: "string", name: "childAge", label: "Child age field" },
              { type: "string", name: "email", label: "E-mail field" },
              { type: "string", name: "phone", label: "Phone field" },
              { type: "string", name: "camp", label: "Camp field" },
              { type: "string", name: "term", label: "Term field" },
              { type: "string", name: "city", label: "City field" },
              { type: "string", name: "notes", label: "Notes field" },
              {
                type: "string",
                name: "consent",
                label: "Consent text",
                ui: { component: "textarea" },
              },
              { type: "string", name: "submit", label: "Submit button" },
              {
                type: "string",
                name: "chooseCamp",
                label: "Choose camp placeholder",
              },
              {
                type: "string",
                name: "chooseTerm",
                label: "Choose term placeholder",
              },
              {
                type: "string",
                name: "firstChooseCamp",
                label: "Choose camp first placeholder",
              },
              {
                type: "string",
                name: "success",
                label: "Success message",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "sideProcessEyebrow",
                label: "Side card 1 label",
              },
              {
                type: "string",
                name: "sideProcessTitle",
                label: "Side card 1 title",
              },
              {
                type: "string",
                name: "sideProcessItems",
                label: "Side card 1 items",
                list: true,
              },
              {
                type: "string",
                name: "sideContactEyebrow",
                label: "Side card 2 label",
              },
              {
                type: "string",
                name: "sideContactTitle",
                label: "Side card 2 title",
              },
              {
                type: "string",
                name: "sideContactText",
                label: "Side card 2 text",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "sideContactButton",
                label: "Side card 2 button",
              },
              {
                type: "string",
                name: "sideImportantEyebrow",
                label: "Side card 3 label",
              },
              {
                type: "string",
                name: "sideImportantTitle",
                label: "Side card 3 title",
              },
              {
                type: "string",
                name: "sideImportantText",
                label: "Side card 3 text",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },
      {
        name: "siteSettings",
        label: "7. KONTAKT — telefon, mail, social media",
        path: "content/settings",
        format: "json",
        fields: [
          {
            type: "string",
            name: "brand",
            label: "Nazwa marki",
            required: true,
          },
          {
            type: "string",
            name: "brandShort",
            label: "Krótka nazwa",
            required: true,
          },
          {
            type: "string",
            name: "owner",
            label: "Osoba kontaktowa",
            required: true,
          },
          { type: "string", name: "email", label: "E-mail", required: true },
          {
            type: "string",
            name: "phone",
            label: "Telefon widoczny",
            required: true,
          },
          {
            type: "string",
            name: "phoneRaw",
            label: "Telefon bez spacji",
            required: true,
          },
          { type: "string", name: "facebook", label: "Link Facebook" },
          { type: "string", name: "instagram", label: "Link Instagram" },
          { type: "string", name: "address", label: "Adres" },
          { type: "string", name: "city", label: "Miasto" },
          { type: "string", name: "country", label: "Kraj" },
          {
            type: "image",
            name: "heroImage",
            label: "Domyślne zdjęcie główne",
          },
          { type: "string", name: "logoText", label: "Tekst logo" },
          {
            type: "object",
            name: "pl",
            label: "SEO i opisy PL",
            fields: [
              {
                type: "string",
                name: "siteName",
                label: "Tytuł strony",
                required: true,
              },
              {
                type: "string",
                name: "shortDescription",
                label: "Krótki opis strony",
                required: true,
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "longDescription",
                label: "Dłuższy opis strony",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "en",
            label: "SEO i opisy EN",
            fields: [
              { type: "string", name: "siteName", label: "Site title" },
              {
                type: "string",
                name: "shortDescription",
                label: "Short description",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "longDescription",
                label: "Long description",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },
    ],
  },
});
