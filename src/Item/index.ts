type ItemsName =
  "Aged Brie"
  | "Backstage passes to a TAFKAL80ETC concert"
  | "Sulfuras, Hand of Ragnaros"
  | "Conjured";

export abstract class Item {
  name: ItemsName;
  sellIn: number;
  quality: number;

  protected constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  protected increaseQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
      console.log(`La qualité augmente de 1, elle est maintenant de ${this.quality}`);
    }
  }

  protected decreaseSellIn() {
    this.sellIn = this.sellIn - 1;
    console.log(`SellIn prend -1 et est maintenant de ${this.sellIn}`);
  }

  abstract update(): void;
}