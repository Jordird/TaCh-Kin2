import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-de-pass',
  templateUrl: './changer-mot-de-pass.component.html',
  styleUrls: ['./changer-mot-de-pass.component.scss'],
})
export class ChangerMotDePassComponent {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['profil']);
  }
  savePassword() {}
}
