type ItemsName =
  "Aged Brie"
  | "Backstage passes to a TAFKAL80ETC concert"
  | "Sulfuras, Hand of Ragnaros"
  | "Conjured";

export class Item {
  name: ItemsName;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}