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

  updateQuality() {
    console.log(`Mise à jour quotidienne de la qualité des items`);
    for (let i = 0; i < this.items.length; i++) {
      console.log(`Item n° ${i + 1} - nom : ${this.items[i].name} avec une qualité de ${this.items[i].quality}`);
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
            console.log(`La qualité diminue de 1, elle est maintenant de ${this.items[i].quality}`);
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          console.log(`La qualité augmente de 1, elle est maintenant de ${this.items[i].quality}`);
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            console.log(`SellIn est égal à ${this.items[i].sellIn}`);
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
                console.log(`La qualité augmente de 1 car sellIn < 11, elle est maintenant de ${this.items[i].quality}`);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
                console.log(`La qualité augmente de 1 car sellIn < 6, elle est maintenant de ${this.items[i].quality}`);
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        console.log(`SellIn prend -1 et est maintenant de ${this.items[i].sellIn}`);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
            console.log(`Délai de vente dépassé : la qualité de ${this.items[i].name} est maintenant de ${this.items[i].quality}`);
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            console.log(`${this.items[i].name} prend quand même en qualité (+1), elle est maintenant de ${this.items[i].quality}`);
          }
        }
      }
    }
    console.log(`Fin de la mise à jour quotidienne de la qualité des items`);
    return this.items;
  }
}
