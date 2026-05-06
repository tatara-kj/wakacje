import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const sections = [
  {
    folder: "jaroslawiec",
    title: "Jarosławiec",
    subtitle: "Nadmorski klimat, aktywność i wakacyjna energia",
    description:
      "Zdjęcia z Jarosławca pokazują nadmorski klimat wyjazdu, wspólne aktywności, integrację i codzienną radość dzieci podczas kolonii.",
  },
  {
    folder: "ostrow-pieckowskie",
    title: "Ostrów Pieckowskie",
    subtitle: "Mazury, jezioro i aktywny wypoczynek",
    description:
      "Mazury pokazują przestrzeń, naturę i spokojniejszy rytm wyjazdu, ale nadal pełen aktywności i wspólnych atrakcji.",
  },
  {
    folder: "poronin-zimowy",
    title: "Poronin",
    subtitle: "Górski klimat, ruch i zimowe atrakcje",
    description:
      "Tutaj wchodzą zimowe kadry, góry, integracja i wspólne aktywności podczas zimowiska.",
  },
];

const allowed = /\.(jpg|jpeg|png|webp|jfif)$/i;

function getImages(section) {
  const dir = path.join(root, "public", "images", section.folder);

  if (!fs.existsSync(dir)) {
    console.log(`BRAK FOLDERU: public/images/${section.folder}`);
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => allowed.test(file))
    .sort((a, b) => a.localeCompare(b, "pl"))
    .map((file) => ({
      image: `/images/${section.folder}/${file}`,
      alt: section.title,
      caption: section.title,
      short: section.subtitle,
    }));
}

const gallerySections = sections.map((section) => ({
  title: section.title,
  subtitle: section.subtitle,
  description: section.description,
  images: getImages(section),
}));

const data = {
  pl: {
    pageEyebrow: "Galeria",
    pageTitle: "Zobacz klimat naszych wyjazdów",
    pageLead:
      "Zdjęcia pokazują miejsca, atmosferę grupy i charakter każdego wyjazdu.",
    sections: gallerySections,
  },
  en: {
    pageEyebrow: "Gallery",
    pageTitle: "See the atmosphere of our trips",
    pageLead:
      "Photos show the places, group atmosphere and character of each trip.",
    sections: [],
  },
};

const output = path.join(root, "content", "gallery", "main.json");

fs.writeFileSync(output, JSON.stringify(data, null, 2), "utf8");

console.log("Gotowe. Wygenerowano galerię:");
gallerySections.forEach((section) => {
  console.log(`${section.title}: ${section.images.length} zdjęć`);
});
