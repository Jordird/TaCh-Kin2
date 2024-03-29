import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nouveau-boutton',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.scss'],
})
export class NouveauComponent {
  @Output()
  clickEvent = new EventEmitter();
  boutonNouveau() {
    this.clickEvent.emit();
  }
}
