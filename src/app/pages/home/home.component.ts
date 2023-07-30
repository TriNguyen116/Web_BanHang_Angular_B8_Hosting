import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listItems: Item[];
  constructor(public router: Router, public dataService: DataService) {
    this.listItems = this.dataService.listItems
  }
 
  cart: Item[] = []
  addToCart(item: Item) {
    let index = this.cart.findIndex((e) => {
      return item.id == e.id;
    });
    if (index != -1 ) {
      let index2 = this.listItems.findIndex((e) => {
        return e.id == this.cart[index].id
      })
      if (index2 != -1 && this.listItems[index2].stock>0) {
        this.listItems[index2].stock--;
        this.cart[index].quantity++;
        console.log(this.cart);
        console.log(this.listItems[index2].stock)
      } else {
        alert(`Món hàng ${this.listItems[index2].name} đã hết hàng`)
      }

    } else {
      let index2 = this.listItems.findIndex((e) => {
        return e.id == item.id
      })
      if (this.listItems[index2].stock>0){
        this.listItems[index2].stock--;
        this.cart.push(item);
        console.log(this.cart);
        console.log(this.listItems[index2].stock)
      }
      else {
        alert(`Món hàng ${this.listItems[index2].name} đã hết hàng`)
      }
      
      

  }
}



  navigateToDetailItems(){
    this.router.navigate(['detail-items'])
  }

}
