import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss'],
})
export class VenteComponent {
  constructor(private router: Router) {}
  newVente() {
    this.router.navigate(['nouveauVente']);
  }
}
