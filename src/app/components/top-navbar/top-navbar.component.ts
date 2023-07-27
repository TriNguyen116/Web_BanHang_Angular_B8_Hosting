import { Component } from '@angular/core';
import {faPhoneFlip} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
  faPhoneFlip = faPhoneFlip;
}
