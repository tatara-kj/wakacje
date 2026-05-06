import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const camps = [
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

function getImages(camp) {
  const dir = path.join(root, "public", "images", camp.folder);

  if (!fs.existsSync(dir)) {
    console.log(`BRAK FOLDERU: public/images/${camp.folder}`);
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => allowed.test(file))
    .sort((a, b) => a.localeCompare(b, "pl"))
    .map((file) => ({
      image: `/images/${camp.folder}/${file}`,
      alt: camp.title,
      caption: camp.title,
      short: camp.subtitle,
    }));
}

const sections = camps.map((camp) => ({
  title: camp.title,
  subtitle: camp.subtitle,
  description: camp.description,
  images: getImages(camp),
}));

const allItems = sections.flatMap((section) =>
  section.images.map((img) => ({
    ...img,
    category: section.title,
  })),
);

const data = {
  pl: {
    pageEyebrow: "Galeria",
    pageTitle: "Zobacz klimat naszych wyjazdów",
    pageLead:
      "Zdjęcia pokazują miejsca, atmosferę grupy i charakter każdego wyjazdu.",

    eyebrow: "Galeria",
    title: "Zobacz klimat naszych wyjazdów",
    lead: "Zdjęcia pokazują miejsca, atmosferę grupy i charakter każdego wyjazdu.",

    sections,
    items: allItems,
  },
  en: {
    pageEyebrow: "Gallery",
    pageTitle: "See the atmosphere of our trips",
    pageLead:
      "Photos show the places, group atmosphere and character of each trip.",

    eyebrow: "Gallery",
    title: "See the atmosphere of our trips",
    lead: "Photos show the places, group atmosphere and character of each trip.",

    sections: [],
    items: [],
  },
};

const output = path.join(root, "content", "gallery", "main.json");

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(data, null, 2), "utf8");

console.log("Gotowe. Wygenerowano galerię:");
sections.forEach((section) => {
  console.log(`${section.title}: ${section.images.length} zdjęć`);
});
console.log(`Razem: ${allItems.length} zdjęć`);
