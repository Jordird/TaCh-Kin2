import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trois-bouttons',
  templateUrl: './trois-bouttons.component.html',
  styleUrls: ['./trois-bouttons.component.scss'],
})
export class TroisBouttonsComponent {
  @Output()
  clickEvent = new EventEmitter();
  boutonNouveau() {
    this.clickEvent.emit();
  }
}
