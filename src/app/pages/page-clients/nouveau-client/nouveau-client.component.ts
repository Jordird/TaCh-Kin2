import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.scss'],
})
export class NouveauClientComponent {
  constructor(
    private router: Router,
    private clientService: ClientsService,
    private formBuilder: FormBuilder
  ) {}
  infoClient = this.formBuilder.group({
    nom: [null, Validators.required],
    prenom: [null, Validators.required],
    email: [null, Validators.required],
    sexe: [null, Validators.required],
    numeroPhone: [null, Validators.required],
    adresse: [null, Validators.required],
    ville: [null, Validators.required],
    pays: [null, Validators.required],
    photo: [null, Validators.required],
    codePostal: [null, Validators.required],
  });
  goBack() {
    this.router.navigate(['client']);
  }

  save() {
    const client = this.infoClient.getRawValue();
    console.log(client);
    this.clientService.create(client).subscribe({
      next: (res) => {
        alert('Client CREATED'), this.router.navigate(['client']);
      },
      error: (err) => {
        alert('ERROR');
      },
    });
  }
  selectedFile: any = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] ?? null;
  }
}
