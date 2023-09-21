import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from 'src/app/models/cleints';
import { Vente } from 'src/app/models/vente';

@Component({
  selector: 'app-detail-vente',
  templateUrl: './detail-vente.component.html',
  styleUrls: ['./detail-vente.component.scss'],
})
export class DetailVenteComponent {
  @Input() vente!: Vente;
  @Input() client!: Client;
  @Input() indexCat = 0;

  @Output() edit = new EventEmitter();
  onEdit() {
    this.edit.emit();
  }
  @Output() delete = new EventEmitter();
  onDelete() {
    this.delete.emit();
  }
}
