type ItemsName =
  "Aged Brie"
  | "Backstage passes to a TAFKAL80ETC concert"
  | "Sulfuras, Hand of Ragnaros"
  | "Conjured";

export class Item {
  name: ItemsName;
  sellIn: number;
  quality: number;
  BonusThresholds: Array<number>;

  constructor(name, sellIn, quality, BonusThresholds = []) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.BonusThresholds = BonusThresholds;
  }
}

export class Items {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
}



