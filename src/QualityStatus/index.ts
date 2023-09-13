import { Item } from '../Item';

export class changeQuality extends Item {

  private maxQuality: number = 50;

  public setMaximumQuality(maxQuality: number) {
    maxQuality = this.maxQuality;
  }

  public getMaximumQuality() {
    return this.maxQuality;
  }

  public decreaseQuality(decreaseValue: number = 1) {
    if (this.quality > 0) {
      if (decreaseValue === 0) {
        return;
      } else {
        this.quality = this.quality - 1;
        console.log(`La qualité diminue de 1, elle est maintenant de ${this.quality}`);
        this.decreaseQuality(decreaseValue - 1);
      }
    }
  }

  public increaseQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
      console.log(`La qualité augmente de 1, elle est maintenant de ${this.quality}`);
    }
  }

  // public increaseQuality(indexItem: number) {
  //   if (this.items[indexItem].quality < 50) {
  //     this.items[indexItem].quality = this.items[indexItem].quality + 1;
  //     console.log(`La qualité augmente de 1, elle est maintenant de ${this.items[indexItem].quality}`);
  //   }
  // }

  public setQualityToZero() {
    this.quality = 0;
    console.log(`Délai de vente dépassé : la qualité de ${this.name} est maintenant de ${this.quality}`);
  }

  update(): void {
  }
}

// export class UpdateItemQuality extends changeQuality {
//
//   public updateQualityAgedBrie(indexItem: number) {
//     if (this.items[indexItem].quality < this.getMaximumQuality()) {
//       this.increaseQuality(indexItem);
//     }
//   }

//   public updateQualityBackstagePasses(indexItem: number) {
//     if (this.items[indexItem].quality < this.getMaximumQuality()) {
//
//       this.increaseQuality(indexItem);
//
//       console.log(`SellIn est égal à ${this.items[indexItem].sellIn}`);
//
//       const bonusThresholds = this.items[indexItem].BonusThresholds;
//       bonusThresholds.forEach(threshold => {
//         if (this.items[indexItem].sellIn < threshold) {
//           console.log(`SellIn est inférieur à ${threshold}`);
//           this.increaseQuality(indexItem);
//         };
//       });
//     }
//   }
//
//   public updateQualityConjured(indexItem: number) {
//     this.decreaseQuality(indexItem, 2);
//   }
//
//
// }

