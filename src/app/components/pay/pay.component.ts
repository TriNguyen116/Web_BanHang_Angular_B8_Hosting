import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent {
  listItems: Item[];
  constructor(public router: Router, public dataService: DataService) {
    this.listItems = this.dataService.listItems
  }
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


  removeItem(item: Item) {
    const index = this.items.findIndex((e) => e.id === item.id);
    if (index !== -1) {
      const quantityToRemove = this.items[index].quantity;
        const listItemsIndex = this.listItems.findIndex((e) => e.id === item.id);
      if (listItemsIndex !== -1) {
        this.listItems[listItemsIndex].stock += quantityToRemove;
      }
  
      this.items.splice(index, 1);
      this.calculateTotal();
    }
  }
  
  
  calculateTotal() {
    let subTotal = 0;
    for (let i = 0; i < this.items.length; i++) {
      subTotal += this.items[i].price * this.items[i].quantity;
    }
    this.total = subTotal;
  }

  
  
}
