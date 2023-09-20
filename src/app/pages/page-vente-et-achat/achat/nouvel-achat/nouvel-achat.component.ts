import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/cleints';
import { AchatService } from 'src/app/services/achat/achat.service';

@Component({
  selector: 'app-nouvel-achat',
  templateUrl: './nouvel-achat.component.html',
  styleUrls: ['./nouvel-achat.component.scss'],
})
export class NouvelAchatComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private achatService: AchatService
  ) {}
  @Input() client!: Client;

  achatForm = this.formBuilder.group({
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
  isBack() {
    this.router.navigate(['achatClient']);
  }
  onSave() {
    const achatGetValue = this.achatForm.getRawValue();
    console.log(achatGetValue);
    this.achatService.create(achatGetValue).subscribe({
      next: (res) => {
        this.router.navigate(['achatClient']);
        alert('CREATED');
      },
      error: (err) => {
        alert('ERROR');
      },
    });
  }
}
