import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent {
  username: string = ' ';
  password: string = '';
  logginError: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}
  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['article']);
      this.logginError = false;
    } else {
      this.logginError = true;
    }
  }
  logOut() {
    this.router.navigate(['login']);
    this.authService.logOut();
  }
  isLoggedIn() {
    this.authService.isLoggedIn();
  }
}
