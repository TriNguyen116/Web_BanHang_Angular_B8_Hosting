import { Component } from '@angular/core';
import {faCartShopping, faPlus} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faCartShopping = faCartShopping;
  faPlus = faPlus;
}
