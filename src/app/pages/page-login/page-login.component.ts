import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', Validators.required);
  matcher = new MyErrorStateMatcher();

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
