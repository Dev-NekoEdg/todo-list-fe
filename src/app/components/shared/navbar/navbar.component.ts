import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public authService: AuthService ){

  }


  login():void{
    this.authService.loginWithRedirect();
  }
  logout():void{
    this.authService.logout({
      logoutParams: { returnTo: document.location.origin }
    });
  }
}
