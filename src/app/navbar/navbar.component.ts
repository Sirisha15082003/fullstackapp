import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private route: Router, private authService: AuthService) {}
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  LogoutUser(): void {
    this.authService.logOut();
    this.route.navigate(['account']);
    console.log(this.authService.isLoggedIn);
  }

  LogInUser(): void {
    
    this.authService.logIn();
    this.route.navigate(['account']);
    console.log(this.authService.isLoggedIn);
  }
}
