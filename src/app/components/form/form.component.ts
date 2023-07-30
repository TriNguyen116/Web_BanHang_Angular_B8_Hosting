import { Component, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  listItems: Item[];
  constructor(public dataService: DataService){
    this.myForm.addControl('id', this.id);
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
    let newItem: Item = {
      id: this.id.value,
      name: this.name.value,
      price: this.price.value,
      quantity: this.quantity.value,
      stock: this.stock.value,
      photo: this.photo.value

    }
    this.dataService.addItems(newItem);
    this.myForm.reset();
  }
}
