export type DocumentItem = {
  title: string;
  description: string;
  file: string;
};

export const documentsPL: DocumentItem[] = [
  {
    title: "Karta kwalifikacyjna",
    description: "Dokument zgłoszeniowy uczestnika. [dane do uzupełnienia]",
    file: "/docs/karta-kwalifikacyjna.pdf",
  },
  {
    title: "Warunki uczestnictwa",
    description:
      "Zasady udziału w obozie oraz organizacja wyjazdu. [dane do uzupełnienia]",
    file: "/docs/warunki-uczestnictwa.pdf",
  },
  {
    title: "Informacje organizacyjne",
    description:
      "Najważniejsze informacje dla rodziców przed wyjazdem. [dane do uzupełnienia]",
    file: "/docs/informacje-organizacyjne.pdf",
  },
  {
    title: "Oświadczenie rodzica",
    description:
      "Dokument dodatkowy wymagany przy zgłoszeniu. [dane do uzupełnienia]",
    file: "/docs/oswiadczenie-rodzica.pdf",
  },
  {
    title: "Polityka prywatności",
    description:
      "Informacja o przetwarzaniu danych osobowych. [dane do uzupełnienia]",
    file: "/docs/polityka-prywatnosci.pdf",
  },
  {
    title: "Regulamin serwisu",
    description:
      "Zasady korzystania ze strony internetowej. [dane do uzupełnienia]",
    file: "/docs/regulamin-serwisu.pdf",
  },
];

export const documentsEN: DocumentItem[] = [
  {
    title: "Qualification card",
    description: "Participant registration document. [data to complete]",
    file: "/docs/karta-kwalifikacyjna.pdf",
  },
  {
    title: "Terms of participation",
    description:
      "Rules of participation and trip organization. [data to complete]",
    file: "/docs/warunki-uczestnictwa.pdf",
  },
  {
    title: "Organizational information",
    description:
      "Important information for parents before departure. [data to complete]",
    file: "/docs/informacje-organizacyjne.pdf",
  },
  {
    title: "Parent statement",
    description: "Additional required document. [data to complete]",
    file: "/docs/oswiadczenie-rodzica.pdf",
  },
  {
    title: "Privacy policy",
    description:
      "Information about personal data processing. [data to complete]",
    file: "/docs/polityka-prywatnosci.pdf",
  },
  {
    title: "Website regulations",
    description: "Rules of using the website. [data to complete]",
    file: "/docs/regulamin-serwisu.pdf",
  },
];
