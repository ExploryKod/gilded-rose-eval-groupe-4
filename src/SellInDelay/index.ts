import { Item } from '../Item';

export class changeSellIn extends Item {

    public decreaseSellIn(indexItem: number) {
        this.sellIn = this.sellIn - 1;
        console.log(`SellIn prend -1 et est maintenant de ${this.sellIn}`);
    }

    update(): void {
    }
}