import { Component } from '@angular/core';
import {faPhoneFlip} from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
  faPhoneFlip = faPhoneFlip;
  constructor(public auth:AuthService) {
  }
  login() {
    this.auth.login()
  }
  logout() {
    this.auth.logout()
  }
}
