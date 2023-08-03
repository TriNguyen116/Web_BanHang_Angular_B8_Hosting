import { Component, Input } from '@angular/core';
import { CatFact } from 'src/app/models/cat-fact.model';

@Component({
  selector: 'app-card-cat',
  templateUrl: './card-cat.component.html',
  styleUrls: ['./card-cat.component.scss']
})
export class CardCatComponent {
  @Input()
  fact!: CatFact; // ko Null luc sau minh se them gia tri
  time: number = Date.now();
}
