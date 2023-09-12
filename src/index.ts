import { Item } from "./Item";

class decreaseOrInscreaseQuality {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  protected decreaseQuality(indexItem: number, decreaseValue: number = 1) {
    if (this.items[indexItem].quality > 0) {
      if (decreaseValue === 0) {
        return;
      } else {
        this.items[indexItem].quality = this.items[indexItem].quality - 1;
        console.log(`La qualité diminue de 1, elle est maintenant de ${this.items[indexItem].quality}`);
        this.decreaseQuality(indexItem, decreaseValue - 1);
      }
    }
  }

  protected increaseQuality(indexItem: number) {
    if (this.items[indexItem].quality < 50) {
      this.items[indexItem].quality = this.items[indexItem].quality + 1;
      console.log(`La qualité augmente de 1, elle est maintenant de ${this.items[indexItem].quality}`);
    }
  }

  protected setQualityToZero(indexItem: number) {
    this.items[indexItem].quality = this.items[indexItem].quality - this.items[indexItem].quality;
    console.log(`Délai de vente dépassé : la qualité de ${this.items[indexItem].name} est maintenant de ${this.items[indexItem].quality}`);
  }
}


class changeSellIn {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  public decreaseSellIn(indexItem: number) {
    this.items[indexItem].sellIn = this.items[indexItem].sellIn - 1;
    console.log(`SellIn prend -1 et est maintenant de ${this.items[indexItem].sellIn}`);
  }
}



export class GildedRose extends decreaseOrInscreaseQuality {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    super(items);
    this.items = items;
  }

  changeSellIn = new changeSellIn(this.items);

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
      bonusThresholds.forEach(threshold => {
        if (this.items[indexItem].sellIn < threshold) {
          console.log(`SellIn est inférieur à ${threshold}`);
          this.increaseQuality(indexItem);
        }
      });
    }
  }

  private updateQualityConjured(indexItem: number) {
    this.decreaseQuality(indexItem, 2);
  }

  updateQuality() {
    console.log(`Mise à jour quotidienne de la qualité des items`);
    this.items.forEach((item, index) => {

      console.log(`Item n° ${index + 1} - nom : ${this.items[index].name} avec une qualité de ${this.items[index].quality}`);

      if (this.items[index].name == "Aged Brie") {
        this.updateQualityAgedBrie(index);
        this.changeSellIn.decreaseSellIn(index);
        if (this.items[index].sellIn < 0) {
          console.log(`Délai de vente dépassé`);
          console.log(`La qualité de ${this.items[index].name} augmente quand même`);
          this.updateQualityAgedBrie(index);
        }
      }

      if (this.items[index].name == "Backstage passes to a TAFKAL80ETC concert") {
        this.updateQualityBackstagePasses(index);
        this.changeSellIn.decreaseSellIn(index);
        if (this.items[index].sellIn < 0) {
          console.log(`Délai de vente dépassé`);
          this.setQualityToZero(index);
        }
      }

      if (this.items[index].name == "Conjured") {
        this.updateQualityConjured(index);
        this.changeSellIn.decreaseSellIn(index);
      }

    });
    console.log(`Fin de la mise à jour quotidienne de la qualité des items`);
    return this.items;
  }
}





