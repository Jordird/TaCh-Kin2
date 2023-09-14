import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.scss'],
})
export class AchatComponent {
  constructor(private router: Router) {}
  newAchat() {
    this.router.navigate(['nouvelAchat']);
  }
}
