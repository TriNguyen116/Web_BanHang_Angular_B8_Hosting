import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent {
  listItems: Item[];
  constructor(public dataService: DataService){
    // this.myForm.addControl('id', this.id);
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity);
    this.myForm.addControl('stock', this.stock);
    this.myForm.addControl('photo', this.photo);
    this.listItems = this.dataService.listItems
  }

  
  myForm: FormGroup = new FormGroup({});
  id: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl('');
  quantity: FormControl = new FormControl(1);
  stock: FormControl = new FormControl(1);
  photo: FormControl = new FormControl('');
  
  submit() {
    let oldItem = this.dataService.subItem
    let newItem:Item = {...oldItem, ...this.myForm.value}
    this.dataService.updateItem(oldItem.id,newItem)
    this.myForm.reset();
  }
}
