type ItemsName =
  "Aged Brie"
  | "Backstage passes to a TAFKAL80ETC concert"
  | "Sulfuras, Hand of Ragnaros"
  | "Conjured";

export class Item {
  name: ItemsName;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private decreaseQuality(indexItem: number) {
    this.items[indexItem].quality = this.items[indexItem].quality - 1;
    console.log(`La qualité diminue de 1, elle est maintenant de ${this.items[indexItem].quality}`);

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
      if (this.items[indexItem].sellIn < 11) {
        console.log(`SellIn est inférieur à 11`);
        this.increaseQuality(indexItem);
      }
      if (this.items[indexItem].sellIn < 6) {
        console.log(`SellIn est inférieur à 6`);
        this.increaseQuality(indexItem);
      }
    }
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


      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.decreaseQuality(i);
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        // temporary if
        if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") this.decreaseSellIn(i);
      }
      if (this.items[i].sellIn < 0) {
        // temporary if
        if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") console.log(`Délai de vente dépassé`);
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.decreaseQuality(i);
              }
            }
          }
        }
      }
    }
    console.log(`Fin de la mise à jour quotidienne de la qualité des items`);
    return this.items;
  }
}
