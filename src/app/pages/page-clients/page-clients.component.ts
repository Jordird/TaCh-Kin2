import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/cleints';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss'],
})
export class PageClientsComponent implements OnInit {
  listClients: Client[] = [];
  constructor(private router: Router, private clientService: ClientsService) {}

  ngOnInit(): void {
    this.initListClient();
  }
  initListClient() {
    this.clientService.list().subscribe({
      next: (res) => {
        this.listClients = res;
        console.log(this.listClients);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  nouvelClient() {
    this.router.navigate(['Nouveauclient']);
  }
}
