import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.scss'],
})
export class NouveauClientComponent {
  constructor(private router: Router, private clientService: ClientsService) {}
  infoClient = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    email: new FormControl(),
    sexe: new FormControl(),
    numeroPhone: new FormControl(),
    adresse: new FormControl(),
    ville: new FormControl(),
    pays: new FormControl(),
  });
  goBack() {
    this.router.navigate(['client']);
  }
  save() {
    const infoClient = this.infoClient.getRawValue();
    console.log(infoClient);
    this.clientService.create(infoClient).subscribe({
      next: (res) => {
        alert('Client CREATED'), this.router.navigate(['client']);
      },
      error: (err) => {
        alert('ERROR');
      },
    });
  }
}
