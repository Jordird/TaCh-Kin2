import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mvt-stock',
  templateUrl: './mvt-stock.component.html',
  styleUrls: ['./mvt-stock.component.scss'],
})
export class MvtStockComponent {
  constructor(private router: Router) {}
  nouveauStock() {
    this.router.navigate(['nouveauStock']);
  }
}
