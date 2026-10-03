import assert from "node:assert/strict";
import test from "node:test";
import { offerCollection, offerFilename, validOfferDate } from "../tina/offer-collection.ts";

test("Tina creates unique filenames from Polish titles and starts offers hidden", () => {
  assert.equal(offerFilename("Żółty obóz 2027 START!"), "zolty-oboz-2027-start");
  assert.equal(offerCollection.ui.filename.slugify({ title: "PORONIN 2027 PRO", slug: "copied-start-slug" }), "poronin-2027-pro");
  assert.equal(offerCollection.defaultItem().featured, false);
  assert.equal(offerCollection.fields.find(field => field.name === "title").isTitle, true);
  const en = offerCollection.fields.find(field => field.name === "en");
  assert.ok(en.fields.every(field => !field.required));
});

test("CMS rejects impossible dates and reversed or missing published turnusy", async () => {
  assert.equal(validOfferDate("2027-02-29"), false);
  assert.equal(validOfferDate("2028-02-29"), true);
  assert.equal(validOfferDate("16.01.2027"), false);
  const save = values => offerCollection.ui.beforeSubmit({ values });
  await assert.rejects(save({ title: "Obóz", featured: true, terms: [] }), /przynajmniej jeden termin/);
  await assert.rejects(save({ terms: [{ start: "2027-01-22", end: "2027-01-16" }] }), /koniec/);
  const saved = await save({ title: " Zmieniona oferta ", featured: true, terms: [{ start: "2027-01-16", end: "2027-01-22" }], pl: { title: "Stary tytuł", price: "2500 zł" } });
  assert.equal(saved.pl.title, "Zmieniona oferta");
  assert.equal(saved.pl.price, "2500 zł");
});
