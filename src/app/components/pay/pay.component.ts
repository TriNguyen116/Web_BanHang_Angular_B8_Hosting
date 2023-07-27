import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent {
  @Input()
  items: Item[] = []
  
  total = 0
  purchase() {
    let subTotal = 0
    for(let i = 0; i < this.items.length; i++ ) {
      subTotal += this.items[i].price * this.items[i].quantity
    }
    this.total = subTotal
  }
}
