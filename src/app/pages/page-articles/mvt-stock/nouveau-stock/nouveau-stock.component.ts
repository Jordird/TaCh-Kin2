import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-stock',
  templateUrl: './nouveau-stock.component.html',
  styleUrls: ['./nouveau-stock.component.scss'],
})
export class NouveauStockComponent {
  constructor(private router: Router) {}
  save() {}
  goBack() {
    this.router.navigate(['stock']);
  }
}
