import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const folders = [
  {
    folder: "jaroslawiec",
    category: "Jarosławiec",
    short: "Kolonie Jarosławiec",
    caption: "Jarosławiec — wakacyjny wyjazd nad morze",
  },
  {
    folder: "ostrow-pieckowskie",
    category: "Ostrów Pieckowskie",
    short: "Mazury i aktywny wypoczynek",
    caption: "Ostrów Pieckowskie — obóz na Mazurach",
  },
  {
    folder: "poronin-zimowy",
    category: "Poronin",
    short: "Zimowisko Poronin",
    caption: "Poronin — zimowy wyjazd w górach",
  },
];

const allowed = /\.(jpg|jpeg|png|webp|jfif)$/i;

function readImages(folderData) {
  const dir = path.join(root, "public", "images", folderData.folder);

  if (!fs.existsSync(dir)) {
    console.log(`Brak folderu: ${dir}`);
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => allowed.test(file))
    .sort((a, b) => a.localeCompare(b, "pl"))
    .map((file) => ({
      image: `/images/${folderData.folder}/${file}`,
      short: folderData.short,
      caption: folderData.caption,
      category: folderData.category,
    }));
}

const images = folders.flatMap(readImages);

const galleryPath = path.join(root, "content", "gallery", "main.json");

let current = {
  pl: {
    pageEyebrow: "Galeria",
    pageTitle: "Zobacz klimat naszych wyjazdów",
    pageLead:
      "Zdjęcia pokazują miejsca, atmosferę grupy i charakter każdego wyjazdu.",
    images: [],
  },
  en: {
    pageEyebrow: "Gallery",
    pageTitle: "See the atmosphere of our trips",
    pageLead:
      "Photos show the places, group atmosphere and character of each trip.",
    images: [],
  },
};

if (fs.existsSync(galleryPath)) {
  current = JSON.parse(fs.readFileSync(galleryPath, "utf8"));
}

current.pl = current.pl || {};
current.en = current.en || {};

current.pl.pageEyebrow =
  current.pl.pageEyebrow || current.pl.eyebrow || "Galeria";
current.pl.pageTitle =
  current.pl.pageTitle || current.pl.title || "Zobacz klimat naszych wyjazdów";
current.pl.pageLead =
  current.pl.pageLead ||
  current.pl.lead ||
  "Zdjęcia pokazują miejsca, atmosferę grupy i charakter każdego wyjazdu.";

current.en.pageEyebrow =
  current.en.pageEyebrow || current.en.eyebrow || "Gallery";
current.en.pageTitle =
  current.en.pageTitle || current.en.title || "See the atmosphere of our trips";
current.en.pageLead =
  current.en.pageLead ||
  current.en.lead ||
  "Photos show the places, group atmosphere and character of each trip.";

current.pl.images = images;
current.en.images = [];

fs.writeFileSync(galleryPath, JSON.stringify(current, null, 2), "utf8");

console.log(`Gotowe. Dodano zdjęć do galerii: ${images.length}`);
console.log(`Zapisano: ${galleryPath}`);
