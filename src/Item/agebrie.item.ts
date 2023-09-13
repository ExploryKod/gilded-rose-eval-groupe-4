import { changeSellIn } from "../SellInDelay";
import { changeQuality } from "../QualityStatus";

export class AgedBrie extends changeQuality {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  changeSellIn = new changeSellIn('Age Brie', this.sellIn, this.quality)

  update() {
    this.increaseQuality();
    this.changeSellIn.decreaseSellIn(1);
    if (this.sellIn < 0) {
      console.log(`Délai de vente dépassé`);
      console.log(`La qualité de ${this.name} augmente quand même`);
      this.increaseQuality();
    }
  }

}