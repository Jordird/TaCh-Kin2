import { Component } from '@angular/core';
import { ApplicationGuardService } from './services/guard/application-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApplicationGuardService],
})
export class AppComponent {
  title = 'taChKin';
}
