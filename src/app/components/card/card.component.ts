import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  item!: Item
  @Input()
  cart :Item [] = []
  addToCart(item:Item) {
    this.cart.push(item)
  }
}
