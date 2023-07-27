import { Component, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { Item } from 'src/app/models/item.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input()
  listItems: Item[] = [];

  constructor(){
      this.myForm.addControl('name', this.name);
      this.myForm.addControl('price', this.price);
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
    this.listItems.push(newItem);
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
