import { Item, Items } from "./Item";
import { changeQuality, UpdateItemQuality } from "./QualityStatus";
import { changeSellIn } from "./SellInDelay";

export class GildedRose extends Items {

  constructor(items = [] as Array<Item>) {
    super(items);
  }

  changeSellIn = new changeSellIn(this.items);
  changeQuality = new changeQuality(this.items);
  MAX_QUALITY = this.changeQuality.getMaximumQuality();

  UpdateItemQuality = new UpdateItemQuality(this.items);

  updateQuality() {
    console.log(`Mise à jour quotidienne de la qualité des items`);
    this.items.forEach((item, index) => {

      console.log(`Item n° ${index + 1} - nom : ${this.items[index].name} avec une qualité de ${this.items[index].quality}`);

      switch (this.items[index].name) {
        case "Aged Brie":
          this.UpdateItemQuality.updateQualityAgedBrie(index);
          this.changeSellIn.decreaseSellIn(index);
          if (this.items[index].sellIn < 0) {
            console.log(`Délai de vente dépassé`);
            console.log(`La qualité de ${this.items[index].name} augmente quand même`);
            this.UpdateItemQuality.updateQualityAgedBrie(index);
          }
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.UpdateItemQuality.updateQualityBackstagePasses(index);
          this.changeSellIn.decreaseSellIn(index);
          if (this.items[index].sellIn < 0) {
            console.log(`Délai de vente dépassé`);
            this.changeQuality.setQualityToZero(index);
          }
          break;
        case "Conjured":
          this.UpdateItemQuality.updateQualityConjured(index);
          this.changeSellIn.decreaseSellIn(index);

      }

    });
    console.log(`Fin de la mise à jour quotidienne de la qualité des items`);
    return this.items;
  }
}
