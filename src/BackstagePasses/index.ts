import { Item } from "../Item";

export class BackstagePasses extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  private setQualityToZero() {
    this.quality = 0;
    console.log(`Délai de vente dépassé : la qualité de ${this.name} est maintenant de ${this.quality}`);
  }

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

    this.decreaseSellIn();

    if (this.sellIn < 0) {
      console.log(`Délai de vente dépassé`);
      this.setQualityToZero();
    }
  }
}