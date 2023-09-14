import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.scss'],
})
export class DetailCategorieComponent {
  @Input() categorie!: Category;
  @Input() indexCat = 0;
  @Output() onDelete = new EventEmitter();

  constructor(private categorieService: CategoryService) {}
  deleteCategory() {
    this.onDelete.emit();
    this.indexCat = --this.indexCat;
  }
}
