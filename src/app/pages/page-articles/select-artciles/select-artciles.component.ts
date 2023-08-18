import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-select-artciles',
  templateUrl: './select-artciles.component.html',
  styleUrls: ['./select-artciles.component.scss'],
})
export class SelectArtcilesComponent {
  @Input() categorie!: Category;
}
