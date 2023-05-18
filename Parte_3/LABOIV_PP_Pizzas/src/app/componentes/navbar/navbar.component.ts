import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado = this.auth.getAuthState();
  constructor(private auth: AuthService) { }
  logout() {
    this.auth.logout();
  }
}
