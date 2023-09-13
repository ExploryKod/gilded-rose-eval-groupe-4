import { Item } from "../Item";
import { changeSellIn } from "../SellInDelay";
import { changeQuality } from "../QualityStatus";

export class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update(): void {
  }
}