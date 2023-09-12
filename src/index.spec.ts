// import runGoldenMaster from "jest-golden-master";
// import {GildedRose, Item } from "./index";

// test("1 test with Sulfuras item", async () => {
//   runGoldenMaster(async () => {
//     const item1 = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
//     const items = new GildedRose([item1]);
//     items.updateQuality();
//   });
// });

// test("2 test with Aged Brie updated 1x with 10 for sellIn and quality", async () => {
//   runGoldenMaster(async () => {
//     const item1 = new Item("Aged Brie", 10, 10 );
//     const items = new GildedRose([item1]);
//     items.updateQuality();
//   });
// });

// test("3 test with Aged Brie when sellIn is negative", async () => {
//   runGoldenMaster(async () => {
//     const item1 = new Item("Aged Brie", 2, 10 );
//     const items = new GildedRose([item1]);
//     items.updateQuality();
//     items.updateQuality();
//     items.updateQuality();
//   });
// });

// test("4 test with Backstage passes to a TAFKAL80ETC concert when", async () => {
//   runGoldenMaster(async () => {
//     const item1 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10 );
//     const items = new GildedRose([item1]);
//     items.updateQuality();
//     items.updateQuality();
//   });
// });

// test("5 test with Backstage passes to a TAFKAL80ETC concert when sellIn is negative", async () => {
//   runGoldenMaster(async () => {
//     const item1 = new Item("Backstage passes to a TAFKAL80ETC concert", 2, 10 );
//     const items = new GildedRose([item1]);
//     items.updateQuality();
//     items.updateQuality();
//     items.updateQuality();
//   });
// });

// test("6 test with several items when quality goes over 50", async () => {
//   runGoldenMaster(async () => {
//     const item1 = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 48 );
//     const item2 = new Item("Aged Brie", 8, 48 );
//     const items = new GildedRose([item1, item2]);
//     items.updateQuality();
//     items.updateQuality();
//     items.updateQuality();
//     items.updateQuality();
//   });
// });









// test("7 test with conjured", async () => {
//   runGoldenMaster(async () => {
//     const item1 = new Item("Conjured", 15, 3 );
//     const items = new GildedRose([item1]);
//     items.updateQuality();
//     items.updateQuality();
//     items.updateQuality();
//     items.updateQuality();
//   });
// });

// test("7 test with conjured", async () => {
//   runGoldenMaster(async () => {
//     const item1 = new Item("Conjured", 3, 45 );
//     const items = new GildedRose([item1]);
//     items.updateQuality();
//     items.updateQuality();
//     items.updateQuality();
//     items.updateQuality();
//   });
// });
import runGoldenMaster from "jest-golden-master";
import { GildedRose, Item } from "./index";

test("1 test with Sulfuras item", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    const items = new GildedRose([item1]);
    items.updateQuality();
  });
});

test("2 test with Aged Brie updated 1x with 10 for sellIn and quality", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item("Aged Brie", 10, 10);
    const items = new GildedRose([item1]);
    items.updateQuality();
  });
});

test("3 test with Aged Brie when sellIn is negative", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item("Aged Brie", 2, 10);
    const items = new GildedRose([item1]);
    items.updateQuality();
    items.updateQuality();
    items.updateQuality();
  });
});

test("4 test with Backstage passes to a TAFKAL80ETC concert when", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      10
    );
    const items = new GildedRose([item1]);
    items.updateQuality();
    items.updateQuality();
  });
});

test("5 test with Backstage passes to a TAFKAL80ETC concert when sellIn is negative", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      2,
      10
    );
    const items = new GildedRose([item1]);
    items.updateQuality();
    items.updateQuality();
    items.updateQuality();
  });
});

test("6 test with several items when quality goes over 50", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      15,
      48
    );
    const item2 = new Item("Aged Brie", 8, 48);
    const items = new GildedRose([item1, item2]);
    items.updateQuality();
    items.updateQuality();
    items.updateQuality();
    items.updateQuality();
  });
});

test("7 test with conjured", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item("Conjured", 15, 3);
    const items = new GildedRose([item1]);
    items.updateQuality();
    items.updateQuality();
    items.updateQuality();
    items.updateQuality();
  });
});

test("8 test with conjured (2)", async () => {
  runGoldenMaster(async () => {
    const item1 = new Item("Conjured", 3, 45);
    const items = new GildedRose([item1]);
    items.updateQuality();
    items.updateQuality();
    items.updateQuality();
    items.updateQuality();
  });
});
