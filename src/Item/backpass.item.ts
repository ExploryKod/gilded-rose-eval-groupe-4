import { changeSellIn } from "../SellInDelay";
import { changeQuality } from "../QualityStatus";

export class BackstagePasses extends changeQuality {

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  changeSellIn = new changeSellIn('Backstage passes to a TAFKAL80ETC concert', this.sellIn, this.quality)

  public update() {

    if (this.quality < 50) {

      this.increaseQuality();

      console.log(`SellIn est égal à ${this.sellIn}`);

      const bonusThresholds = [11, 6];

      bonusThresholds.forEach(threshold => {
        if (this.sellIn < threshold) {
          console.log(`SellIn est inférieur à ${threshold}`);
          this.increaseQuality();
        }
      });
    }

    this.changeSellIn.decreaseSellIn(1);

    if (this.sellIn < 0) {
      console.log(`Délai de vente dépassé`);
      this.setQualityToZero();
    }
  }
}