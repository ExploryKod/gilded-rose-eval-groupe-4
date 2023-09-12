import { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items :Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    console.log(`Mise à jour quotidienne de la qualité des items`);

    this.items.forEach((item, index) => {
      console.log(`Item n° ${index + 1} - nom : ${item.name} avec une qualité de ${item.quality}`);
      item.update();
    });
    console.log(`Fin de la mise à jour quotidienne de la qualité des items`);
    return this.items;
  }
}