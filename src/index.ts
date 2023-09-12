import { Item, Items } from "./Item";
import { changeQuality } from "./QualityStatus";
import { changeSellIn } from "./SellInDelay";

export class GildedRose extends Items {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    super(items);
  }

  changeSellIn = new changeSellIn(this.items);
  changeQuality = new changeQuality(this.items);
  MAX_QUALITY = this.changeQuality.getMaximumQuality();

  private updateQualityAgedBrie(indexItem: number) {
    if (this.items[indexItem].quality < this.MAX_QUALITY) {
      this.changeQuality.increaseQuality(indexItem);
    }
  }

  private updateQualityBackstagePasses(indexItem: number) {
    if (this.items[indexItem].quality < this.MAX_QUALITY) {

      this.changeQuality.increaseQuality(indexItem);

      console.log(`SellIn est égal à ${this.items[indexItem].sellIn}`);

      const bonusThresholds = this.items[indexItem].BonusThresholds;
      bonusThresholds.forEach(threshold => {
        if (this.items[indexItem].sellIn < threshold) {
          console.log(`SellIn est inférieur à ${threshold}`);
          this.changeQuality.increaseQuality(indexItem);
        };
      });
    }
  }

  private updateQualityConjured(indexItem: number) {
    this.changeQuality.decreaseQuality(indexItem, 2);
  }

  updateQuality() {
    console.log(`Mise à jour quotidienne de la qualité des items`);
    this.items.forEach((item, index) => {

      console.log(`Item n° ${index + 1} - nom : ${this.items[index].name} avec une qualité de ${this.items[index].quality}`);

      switch (this.items[index].name) {
        case "Aged Brie":
          this.updateQualityAgedBrie(index);
          this.changeSellIn.decreaseSellIn(index);
          if (this.items[index].sellIn < 0) {
            console.log(`Délai de vente dépassé`);
            console.log(`La qualité de ${this.items[index].name} augmente quand même`);
            this.updateQualityAgedBrie(index);
          }
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateQualityBackstagePasses(index);
          this.changeSellIn.decreaseSellIn(index);
          if (this.items[index].sellIn < 0) {
            console.log(`Délai de vente dépassé`);
            this.changeQuality.setQualityToZero(index);
          }
          break;
        case "Conjured":
          this.updateQualityConjured(index);
          this.changeSellIn.decreaseSellIn(index);

      }

    });
    console.log(`Fin de la mise à jour quotidienne de la qualité des items`);
    return this.items;
  }
}
