import { Component, Input } from '@angular/core';
import {FormControl, FormGroup, FormRecord} from '@angular/forms'
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.scss']
})
export class FormDeleteComponent {
  listItems: Item[];
  constructor(public dataService: DataService){
    this.listItems = this.dataService.listItems
  }
  itemId: FormControl = new FormControl('');;
  itemName: FormControl = new FormControl('');;
  deleteItem() {
    const searchId = this.itemId.value;
    const searchName = this.itemName.value.toLowerCase();

    if (!searchId && !searchName) {
      return;
    }

    if (searchId) {
      this.dataService.deleteItemById(searchId);
    } else if (searchName) {
      this.dataService.deleteItemByName(searchName);
    }
  }
  
}
