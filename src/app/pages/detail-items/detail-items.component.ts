import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-items',
  templateUrl: './detail-items.component.html',
  styleUrls: ['./detail-items.component.scss']
})
export class DetailItemsComponent {
  listItems!: Item[];
  constructor(public router: Router, public dataService: DataService) {
    this.listItems = this.dataService.listItems;
  }
  
}
