import { Item } from './Item';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private decreaseQuality(indexItem: number, decreaseValue: number = 1) {
    if (this.items[indexItem].quality > 0) {
      if (decreaseValue === 0) {
        return;
      }else{
        this.items[indexItem].quality = this.items[indexItem].quality - 1;
        console.log(`La qualité diminue de 1, elle est maintenant de ${this.items[indexItem].quality}`);
        this.decreaseQuality(indexItem, decreaseValue - 1);
      }
    }
  }

  private increaseQuality(indexItem: number) {
    if (this.items[indexItem].quality < 50) {
      this.items[indexItem].quality = this.items[indexItem].quality + 1;
      console.log(`La qualité augmente de 1, elle est maintenant de ${this.items[indexItem].quality}`);
    }
  }

  private setQualityToZero(indexItem: number) {
    this.items[indexItem].quality = this.items[indexItem].quality - this.items[indexItem].quality;
    console.log(`Délai de vente dépassé : la qualité de ${this.items[indexItem].name} est maintenant de ${this.items[indexItem].quality}`);
  }

  private decreaseSellIn(indexItem: number) {
    this.items[indexItem].sellIn = this.items[indexItem].sellIn - 1;
    console.log(`SellIn prend -1 et est maintenant de ${this.items[indexItem].sellIn}`);
  }

  private updateQualityAgedBrie(indexItem: number) {
    if (this.items[indexItem].quality < 50) {
      this.increaseQuality(indexItem);
    }
  }

  private updateQualityBackstagePasses(indexItem: number) {
    if (this.items[indexItem].quality < 50) {

      this.increaseQuality(indexItem);

      console.log(`SellIn est égal à ${this.items[indexItem].sellIn}`);

      const bonusThresholds = [11, 6];
      bonusThresholds.forEach(threshold=> {
        if (this.items[indexItem].sellIn < threshold) {
          console.log(`SellIn est inférieur à ${threshold}`);
          this.increaseQuality(indexItem);
        }
      });
    }
  }

  private updateQualityConjured(indexItem: number) {
    this.decreaseQuality(indexItem,2);
  }

  updateQuality() {
    console.log(`Mise à jour quotidienne de la qualité des items`);
    for (let i = 0; i < this.items.length; i++) {

      console.log(`Item n° ${i + 1} - nom : ${this.items[i].name} avec une qualité de ${this.items[i].quality}`);

      if (this.items[i].name == "Aged Brie") {
        this.updateQualityAgedBrie(i);
        this.decreaseSellIn(i);
        if (this.items[i].sellIn < 0) {
          console.log(`Délai de vente dépassé`);
          console.log(`La qualité de ${this.items[i].name} augmente quand même`);
          this.updateQualityAgedBrie(i);
        }
      }

      if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        this.updateQualityBackstagePasses(i);
        this.decreaseSellIn(i);
        if (this.items[i].sellIn < 0) {
          console.log(`Délai de vente dépassé`);
          this.setQualityToZero(i);
        }
      }

      if (this.items[i].name == "Conjured") {
        this.updateQualityConjured(i);
        this.decreaseSellIn(i);
      }

    }
    console.log(`Fin de la mise à jour quotidienne de la qualité des items`);
    return this.items;
  }
}