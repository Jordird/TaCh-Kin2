import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss'],
})
export class PageClientsComponent {
  constructor(private router: Router) {}

  nouvelClient() {
    this.router.navigate(['Nouveauclient']);
  }
}
