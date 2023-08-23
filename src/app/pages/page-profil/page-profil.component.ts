import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss'],
})
export class PageProfilComponent {
  constructor(private router: Router, private authService: AuthService) {}
  changerMotdePass() {
    this.router.navigate(['changeMotDePass']);
  }
  editProfil() {
    this.router.navigate(['profil/editProfil']);
  }
  logOut() {
    this.router.navigate(['login']);
    this.authService.logOut();
  }
}
