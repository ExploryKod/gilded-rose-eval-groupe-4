import { changeSellIn } from "../SellInDelay";
import { changeQuality } from "../QualityStatus";

export class Conjured extends changeQuality {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  changeSellIn = new changeSellIn('Conjured', this.sellIn, this.quality)

  update() {
    this.decreaseQuality(2);
    this.changeSellIn.decreaseSellIn(1);
  }
}
