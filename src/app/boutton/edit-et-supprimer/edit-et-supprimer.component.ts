import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-et-supprimer',
  templateUrl: './edit-et-supprimer.component.html',
  styleUrls: ['./edit-et-supprimer.component.scss'],
})
export class EditEtSupprimerComponent {
  @Output()
  edit = new EventEmitter();
  @Output()
  delete = new EventEmitter();
  onEdit() {
    this.edit.emit();
  }
  onDelete() {
    this.delete.emit();
  }
}
