import runGoldenMaster from "jest-golden-master";
import {GildedRose, Item} from "./index";

test("1 test with Sulfuras item", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    const items = new GildedRose([item1]);
    items.updateQuality();
  });
});

test("2 test with Aged Brie updated 1x with 10 for sellIn and quality", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item("Aged Brie", 10, 10 );
    const items = new GildedRose([item1]);
    items.updateQuality();
  });
});

test("3 test with Aged Brie item", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item("Aged Brie", 2, 10 );
    const items = new GildedRose([item1]);
    items.updateQuality();
    items.updateQuality();
    items.updateQuality();
  });
});




