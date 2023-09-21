import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vente } from 'src/app/models/vente';
import { VenteService } from 'src/app/services/vente/vente.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss'],
})
export class VenteComponent implements OnInit {
  constructor(private router: Router, private venteService: VenteService) {}
  ngOnInit(): void {}
  listVente: Vente[] = [];
  newVente() {
    this.router.navigate(['nouveauVente']);
  }
  initList() {
    this.venteService.list().subscribe({
      next: (res) => {
        this.listVente = res;
        console.log(this.listVente);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteVente(index: number) {
    this.listVente = this.listVente.slice(index, -1);
    this.venteService.delete().subscribe({
      next: (res) => {
        console.log('deleted');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
