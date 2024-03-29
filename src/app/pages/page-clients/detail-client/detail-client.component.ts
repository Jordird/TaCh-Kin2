import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from 'src/app/models/cleints';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss'],
})
export class DetailClientComponent {
  @Input() client!: Client;
  @Output() onDelete = new EventEmitter();
  deleteClent() {
    this.onDelete.emit();
  }
}
