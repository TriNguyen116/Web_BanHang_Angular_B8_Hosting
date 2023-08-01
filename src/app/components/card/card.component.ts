import { query } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Firestore, collection, deleteDoc, getDocs, where } from '@angular/fire/firestore';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
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

  constructor(public dataService: DataService){

  }
  remove(){
    let id = this.item.id
    this.dataService.deleteItem(id)
    this.dataService.deleteItemById(id)
  }
}
