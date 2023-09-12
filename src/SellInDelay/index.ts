import { Items } from '../Item';

export class changeSellIn extends Items {

    public decreaseSellIn(indexItem: number) {
        this.items[indexItem].sellIn = this.items[indexItem].sellIn - 1;
        console.log(`SellIn prend -1 et est maintenant de ${this.items[indexItem].sellIn}`);
    }
}