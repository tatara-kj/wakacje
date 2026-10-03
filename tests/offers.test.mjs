import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import test from "node:test";
import { buildOffers, offerGalleryHref, offerRegistrationHref } from "../src/data/offer-utils.ts";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));

test("a new nested Tina document is discovered in a real Vite build without editing imports", async () => {
  const { build } = await import("vite");
  const fixtureRoot = await mkdtemp(path.join(tmpdir(), "mksport-offers-"));
  try {
    await mkdir(path.join(fixtureRoot, "src", "data"), { recursive: true });
    await mkdir(path.join(fixtureRoot, "content", "offers", "nowe"), { recursive: true });
    for (const filename of ["offers.ts", "offer-utils.ts"]) {
      await writeFile(path.join(fixtureRoot, "src", "data", filename),
        await readFile(path.join(projectRoot, "src", "data", filename)));
    }
    await writeFile(path.join(fixtureRoot, "content", "offers", "nowe", "nowy-oboz.json"), JSON.stringify({
      title: "Nowy obóz z CMS", featured: true, pl: { short: "Dodany bez zmiany kodu" },
    }));
    await writeFile(path.join(fixtureRoot, "content", "offers", "szkic.json"), JSON.stringify({
      title: "Szkic niewidoczny", featured: false,
    }));
    await build({
      configFile: false, root: fixtureRoot, logLevel: "silent",
      build: { ssr: path.join(fixtureRoot, "src", "data", "offers.ts"), outDir: "dist" },
    });
    const { offers } = await import(pathToFileURL(path.join(fixtureRoot, "dist", "offers.mjs")).href);
    assert.deepEqual(offers.map((offer) => offer.slug), ["nowy-oboz"]);
    assert.equal(offers[0].en.title, "Nowy obóz z CMS");
    assert.deepEqual(offers[0].en.highlights, []);
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

test("existing offer order remains stable, explicit order is supported, and drafts stay hidden", () => {
  const documents = {
    "../../content/offers/poronin-zimowy.json": { pl: { title: "Poronin" } },
    "../../content/offers/nowa-oferta.json": { order: 4, title: "Nowa oferta" },
    "../../content/offers/ostrow-pieckowskie.json": { pl: { title: "Ostrów" } },
    "../../content/offers/jaroslawiec.json": { pl: { title: "Jarosławiec" } },
    "../../content/offers/ukryta.json": { featured: false, order: 0 },
  };
  assert.deepEqual(buildOffers(documents).map((offer) => offer.slug), [
    "jaroslawiec", "ostrow-pieckowskie", "poronin-zimowy", "nowa-oferta",
  ]);
});

test("Tina Duplicate uses its own filename and root title even when it copies legacy fields", () => {
  const original = {
    slug: "old-slug", title: "Oferta główna", pl: { title: "Stary ukryty tytuł" },
  };
  const offers = buildOffers({
    "../../content/offers/oferta.json": original,
    "../../content/offers/oferta-kopia.json": { ...original, title: "Nowy tytuł kopii" },
  });
  assert.equal(new Set(offers.map((offer) => offer.slug)).size, 2);
  assert.equal(offers.find((offer) => offer.slug === "oferta-kopia").pl.title, "Nowy tytuł kopii");
  assert.equal(offers.find((offer) => offer.slug === "oferta-kopia").en.title, "Nowy tytuł kopii");
  const edited = buildOffers({ "../../content/offers/oferta.json": { ...original, title: "Zmieniona nazwa" } });
  assert.equal(edited[0].slug, "oferta");
});

test("English falls back field by field and omitted lists and invalid dates never break pages", () => {
  const [offer] = buildOffers({ "../../content/offers/oboz.json": {
    title: "Obóz", pl: { price: "2500 zł", short: "Polski opis", included: ["Transport", null], highlights: ["Kulig"] },
    en: { title: "Camp", price: "", included: null, highlights: [] },
    terms: [
      { start: "2027-01-16", end: "2027-01-22" },
      { start: "2027-02-30", end: "2027-03-05" },
      { start: "2027-02-20", end: "2027-02-19" },
      null,
    ],
  } });
  assert.equal(offer.en.title, "Camp");
  assert.equal(offer.en.price, "2500 zł");
  assert.equal(offer.en.short, "Polski opis");
  assert.deepEqual(offer.en.included, ["Transport"]);
  assert.deepEqual(offer.en.highlights, ["Kulig"]);
  assert.equal(offer.terms.length, 1);
  assert.equal(offer.pl.date, "16.01.2027 – 22.01.2027");
  assert.equal(offer.en.date, offer.pl.date);
});

test("safe filenames and collisions yield unique IDs, gallery mapping and registration links", () => {
  const offers = buildOffers({
    "../../content/offers/Żółty obóz!.json": { title: "Obóz" },
    "../../content/offers/folder/Żółty obóz!.json": { title: "Obóz drugi" },
    "../../content/offers/poronin-2027-start.json": { title: "Start", galleryFolder: "poronin-zimowy" },
    "../../content/offers/poronin-2027-pro.json": { title: "Pro", galleryFolder: "poronin-zimowy" },
    "../../content/offers/bez-galerii.json": { title: "Nowy" },
  });
  assert.equal(new Set(offers.map((offer) => offer.slug)).size, 5);
  assert.ok(offers.some((offer) => offer.slug === "zolty-oboz"));
  const start = offers.find((offer) => offer.slug === "poronin-2027-start");
  const pro = offers.find((offer) => offer.slug === "poronin-2027-pro");
  assert.equal(offerGalleryHref(start), "/galeria?oboz=poronin-zimowy");
  assert.equal(offerGalleryHref(pro, "en"), "/en/galeria?oboz=poronin-zimowy");
  assert.equal(offerGalleryHref(offers.find((offer) => offer.slug === "bez-galerii")), "/galeria");
  assert.equal(offerRegistrationHref(start), "/zapisy?oboz=poronin-2027-start");
  assert.equal(offerRegistrationHref({ ...start, slug: "camp & snow" }, "en"), "/en/zapisy?oboz=camp%20%26%20snow");
});
