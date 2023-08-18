import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deux-boutton',
  templateUrl: './deux-boutton.component.html',
  styleUrls: ['./deux-boutton.component.scss'],
})
export class DeuxBouttonComponent {
  @Output()
  clickSave = new EventEmitter();
  @Output()
  back = new EventEmitter();

  goBack() {
    this.back.emit();
  }
  save() {
    this.clickSave.emit();
  }
}
