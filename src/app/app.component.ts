import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AdUser } from './ad-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'firstproj';
  name: string = 'G Vinay Kumar';
  loggedInUser: AdUser | undefined;

  constructor(private route: Router, private authService: AuthService) {}

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log(this.authService.isLoggedIn);
  }

  // get isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn;
  // }

  // LogoutUser(): void {
  //   this.authService.logOut();
  //   this.route.navigate(['account']);
  //   console.log(this.authService.isLoggedIn);
  // }

  // LogInUser(): void {
    
  //   this.authService.logIn();
  //   this.route.navigate(['account']);
  //   console.log(this.authService.isLoggedIn);
  // }
}