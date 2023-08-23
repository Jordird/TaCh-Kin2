import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-stock',
  templateUrl: './nouveau-stock.component.html',
  styleUrls: ['./nouveau-stock.component.scss'],
})
export class NouveauStockComponent {
  constructor(private router: Router) {}
  newStockForm = new FormGroup({
    nomStock: new FormControl(),
    prix: new FormControl(),
    nombreDeStock: new FormControl(),
    dateDeCreation: new FormControl(),
  });

  save() {
    const stockForm = this.newStockForm.getRawValue();
    console.log(stockForm);
  }
  goBack() {
    this.router.navigate(['stock']);
  }
}
