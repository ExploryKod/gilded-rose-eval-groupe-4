import { Items } from '../Item';

export class changeQuality extends Items {

  private maxQuality: number = 50;

  public setMaximumQuality(maxQuality: number) {
    maxQuality = this.maxQuality;
  }

  public getMaximumQuality() {
    return this.maxQuality;
  }

  public decreaseQuality(indexItem: number, decreaseValue: number = 1) {
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

  public increaseQuality(indexItem: number) {
    if (this.items[indexItem].quality < 50) {
      this.items[indexItem].quality = this.items[indexItem].quality + 1;
      console.log(`La qualité augmente de 1, elle est maintenant de ${this.items[indexItem].quality}`);
    }
  }

  public setQualityToZero(indexItem: number) {
    this.items[indexItem].quality = this.items[indexItem].quality - this.items[indexItem].quality;
    console.log(`Délai de vente dépassé : la qualité de ${this.items[indexItem].name} est maintenant de ${this.items[indexItem].quality}`);
  }
}