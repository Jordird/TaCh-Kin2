import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmd-clients',
  templateUrl: './cmd-clients.component.html',
  styleUrls: ['./cmd-clients.component.scss'],
})
export class CmdClientsComponent {
  constructor(private router: Router) {}
  newCmdCli() {
    this.router.navigate(['nouveauCommandeClient']);
  }
}
