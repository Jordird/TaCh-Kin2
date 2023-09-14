import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.scss'],
})
export class ModifierProfilComponent {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['profil']);
  }
  save() {}
}
