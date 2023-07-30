import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  listItems: Item[] = [
    {
      id: '1',
      name: 'ÁO SỐ 1',
      price: 375000,
      quantity: 1,
      stock: 10,
      photo: 'https://4menshop.com/cache/image/300x400/images/thumbs/2023/07/ao-polo-regular-tag-line-po087-mau-xanh-co-vit_small-18123.jpg'
    },
    {
      id: '2',
      name: 'ÁO SỐ 2',
      price: 325000,
      quantity: 1,
      stock: 10,
      photo: 'https://4menshop.com/cache/image/300x400/images/thumbs/2023/07/ao-thun-regular-4m-original-at103-mau-den_small-18182.jpg'
    },
    {
      id: '3',
      name: 'ÁO SỐ 3',
      price: 355000,
      quantity: 1,
      stock: 10,
      photo: 'https://4menshop.com/cache/image/300x400/images/thumbs/2023/07/ao-polo-slimfit-3-color-block-po082-mau-xanh-den_small-18159.JPG'
    },
    {
      id: '4',
      name: 'ÁO SỐ 4',
      price: 360000,
      quantity: 1,
      stock: 10,
      photo: 'https://4menshop.com/cache/image/300x400/images/thumbs/2023/07/ao-polo-regular-compass-po067-mau-trang_small-18156.JPG'
    },
    {
      id: '5',
      name: 'ÁO SỐ 5',
      price: 330000,
      quantity: 1,
      stock: 10,
      photo: 'https://4menshop.com/cache/image/300x400/images/thumbs/2023/07/ao-polo-regular-stripes-po070-mau-trang_small-18153.JPG'
    },
    {
      id: '6',
      name: 'ÁO SỐ 6',
      price: 380000,
      quantity: 1,
      stock: 10,
      photo: 'https://4menshop.com/cache/image/300x400/images/thumbs/2023/07/ao-polo-soc-ngang-phoi-co-form-regular-po114-mau-trang_small-18136.JPG'
    },
  ];
  addItems(newItem: Item) {
    newItem = {
      ...newItem,
    };
    this.listItems.push(newItem);
  }
  deleteItemById(id: string) {
    const index = this.listItems.findIndex(item => item.id === id);
    if (index !== -1) {
      this.listItems.splice(index, 1);
    }
  }

  deleteItemByName(name: string) {
    const index = this.listItems.findIndex(item => item.name === name);
    if (index !== -1) {
      this.listItems.splice(index, 1);
    }
  }

}
