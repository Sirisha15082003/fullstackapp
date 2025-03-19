import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn: boolean = false;

  constructor() {
    const str = localStorage.getItem("LoggedInUser");
    this._isLoggedIn = str !== null;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  logIn(): void {
    this._isLoggedIn = true;
    localStorage.setItem("LoggedInUser", "true");
  }

  logOut(): void {
    this._isLoggedIn = false;
    localStorage.removeItem("LoggedInUser");
  }
}