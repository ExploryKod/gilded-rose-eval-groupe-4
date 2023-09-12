import { Item } from "../Item";

export class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    this.increaseQuality();
    this.decreaseSellIn();
    if (this.sellIn < 0) {
      console.log(`Délai de vente dépassé`);
      console.log(`La qualité de ${this.name} augmente quand même`);
      this.increaseQuality();
    }
  }

}