// type ItemsName =
//   "Aged Brie"
//   | "Backstage passes to a TAFKAL80ETC concert"
//   | "Sulfuras, Hand of Ragnaros"
//   | "Conjured";

// export class Item {
//   name: ItemsName;
//   sellIn: number;
//   quality: number;

//   constructor(name, sellIn, quality) {
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }

// export class GildedRose {
//   items: Array<Item>;

//   constructor(items = [] as Array<Item>) {
//     this.items = items;
//   }

//   updateQuality() {
//     console.log(`Mise à jour quotidienne de la qualité des items`);
//     for (let i = 0; i < this.items.length; i++) {
//       console.log(`Item n° ${i + 1} - nom : ${this.items[i].name} avec une qualité de ${this.items[i].quality}`);
//       if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
//             this.items[i].quality = this.items[i].quality - 1;
//             console.log(`La qualité diminue de 1, elle est maintenant de ${this.items[i].quality}`);
//           }
//         }
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1;
//           console.log(`La qualité augmente de 1, elle est maintenant de ${this.items[i].quality}`);
//           if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
//             console.log(`SellIn est égal à ${this.items[i].sellIn}`);
//             if (this.items[i].sellIn < 11) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//                 console.log(`La qualité augmente de 1 car sellIn < 11, elle est maintenant de ${this.items[i].quality}`);
//               }
//             }
//             if (this.items[i].sellIn < 6) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//                 console.log(`La qualité augmente de 1 car sellIn < 6, elle est maintenant de ${this.items[i].quality}`);
//               }
//             }
//           }
//         }
//       }
//       if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
//         this.items[i].sellIn = this.items[i].sellIn - 1;
//         console.log(`SellIn prend -1 et est maintenant de ${this.items[i].sellIn}`);
//       }
//       if (this.items[i].sellIn < 0) {
//         if (this.items[i].name != "Aged Brie") {
//           if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
//             if (this.items[i].quality > 0) {
//               if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
//                 this.items[i].quality = this.items[i].quality - 1;
//               }
//             }
//           } else {
//             this.items[i].quality = this.items[i].quality - this.items[i].quality;
//             console.log(`Délai de vente dépassé : la qualité de ${this.items[i].name} est maintenant de ${this.items[i].quality}`);
//           }
//         } else {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//             console.log(`${this.items[i].name} prend quand même en qualité (+1), elle est maintenant de ${this.items[i].quality}`);
//           }
//         }
//       }
//     }
//     console.log(`Fin de la mise à jour quotidienne de la qualité des items`);
//     return this.items;
//   }
// }

type ItemName =
  "Aged Brie"
  | "Backstage passes to a TAFKAL80ETC concert"
  | "Sulfuras, Hand of Ragnaros"
  | "Conjured";

export class Item {
  constructor(public name: ItemName, public sellIn: number, public quality: number) { }
}

export class GildedRose {
  constructor(private items: Item[] = []) { }

  private increaseQuality(item: Item, value: number = 1) {
    if (item.quality < 50) {
      item.quality += value;
    }
  }

  private decreaseQuality(item: Item, value: number = 1) {
    if (item.quality > 0) {
      item.quality -= value;
    }
  }

  private updateNormalItem(item: Item) {
    this.decreaseQuality(item);
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }

  private updateAgedBrie(item: Item) {
    this.increaseQuality(item);
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      this.increaseQuality(item);
    }
  }

  private updateBackstagePasses(item: Item) {
    this.increaseQuality(item);
    if (item.sellIn < 11) {
      this.increaseQuality(item);
    }
    if (item.sellIn < 6) {
      this.increaseQuality(item);
    }
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  private updateConjured(item: Item) {
    this.decreaseQuality(item, 2);
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      this.decreaseQuality(item, 2);
    }
  }

  updateQuality() {
    console.log(`Mise à jour quotidienne de la qualité des items`);
    for (const item of this.items) {
      console.log(`Item - nom : ${item.name} avec une qualité de ${item.quality}`);
      switch (item.name) {
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          // Ignorer la mise à jour pour "Sulfuras"
          break;
        case "Conjured":
          this.updateConjured(item);
          break;
        default:
          this.updateNormalItem(item);
          break;
      }
      console.log(`La qualité est maintenant de ${item.quality}, SellIn est égal à ${item.sellIn}`);
    }
    console.log(`Fin de la mise à jour quotidienne de la qualité des items`);
    return this.items;
  }
}

