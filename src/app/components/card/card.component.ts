import { query } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Firestore, collection, deleteDoc, getDocs, where } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
import { UpdateItemComponent } from '../update-item/update-item.component';
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

  constructor(public dataService: DataService, public dialog: MatDialog){

  }
  remove(){
    let id = this.item.id
    this.dataService.deleteItem(id)
    this.dataService.deleteItemById(id)
  }

  modify(item: Item){
    this.dataService.modify(item)
  }
}
