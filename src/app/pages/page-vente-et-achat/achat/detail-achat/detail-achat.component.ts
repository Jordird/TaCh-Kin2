import { Component, Input } from '@angular/core';
import { Achat } from 'src/app/models/achat';

@Component({
  selector: 'app-detail-achat',
  templateUrl: './detail-achat.component.html',
  styleUrls: ['./detail-achat.component.scss'],
})
export class DetailAchatComponent {
  @Input() achat!: Achat;
  onEdit() {}
  onDelete() {}
}
