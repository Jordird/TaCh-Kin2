import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/cleints';
import { VenteService } from 'src/app/services/vente/vente.service';

@Component({
  selector: 'app-nouveau-vente',
  templateUrl: './nouveau-vente.component.html',
  styleUrls: ['./nouveau-vente.component.scss'],
})
export class NouveauVenteComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private venteService: VenteService
  ) {}
  @Input() client!: Client;
  venteForm = this.formBuilder.group({
    nomClient: [null, Validators.required],
    date: [null, Validators.required],
    description: [null, Validators.required],
    prixUnitaire: [null, Validators.required],
    quantite: [null, Validators.required],
    prixTotal: [null, Validators.required],
    prixHT: [null, Validators.required],
    tva: [null, Validators.required],
    prixTTC: [null, Validators.required],
  });

  goBack() {
    this.router.navigate(['vente']);
  }
  save() {
    const vente = this.venteForm.getRawValue();
    console.log(vente);
    this.venteService.create(vente).subscribe({
      next: (res) => {
        alert('CREATED');
        this.router.navigate(['vente']);
      },
      error: (err) => {
        alert('error');
      },
    });
  }
}
