import { Item } from "../Item";
export class AgedBrie extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    private increaseQuality() {
        if (this.quality < 50) {
            this.quality = this.quality + 1;
            console.log(`La qualité augmente de 1, elle est maintenant de ${this.quality}`);
        }
    }
    private decreaseSellIn() {
        this.sellIn = this.sellIn - 1;
        console.log(`SellIn prend -1 et est maintenant de ${this.sellIn}`);
    }
    public updateAgedBrie () {
        this.increaseQuality();
        this.decreaseSellIn();
        if (this.sellIn < 0) {
            console.log(`Délai de vente dépassé`);
            console.log(`La qualité de ${this.name} augmente quand même`);
            this.increaseQuality();
        }
    }

}