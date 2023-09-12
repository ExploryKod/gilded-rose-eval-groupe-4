import { Item } from "../Item";

export class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  private decreaseQuality(decreaseValue: number) {
    if (this.quality > 0) {
      if (decreaseValue === 0) {
        return;
      } else {
        this.quality = this.quality - 1;
        console.log(`La qualité diminue de 1, elle est maintenant de ${this.quality}`);
        this.decreaseQuality( decreaseValue - 1);
      }
    }
  }

  update() {
    this.decreaseQuality(2);
    this.decreaseSellIn();
  }
}