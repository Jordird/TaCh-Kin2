import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private loggedIn = false;
  login(username: string, password: string): boolean {
    if (username === 'username' && password === 'password') {
      this.loggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }
  logOut() {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }
  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }
}
