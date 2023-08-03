import { Component } from '@angular/core';
import {faCartShopping, faPlus} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faCartShopping = faCartShopping;
  faPlus = faPlus;
  constructor(public router:Router){}
  navigateToDetailItems(){
    this.router.navigate(['detail-items'])
  }

  navigateToHome () {
    this.router.navigate([''])
  }

  navigateToCat () {
    this.router.navigate(['cat-blog'])
  }
}
