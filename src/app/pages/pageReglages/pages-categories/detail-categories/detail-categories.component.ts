import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-detail-categories',
  templateUrl: './detail-categories.component.html',
  styleUrls: ['./detail-categories.component.scss'],
})
export class DetailCategoriesComponent {
  @Input() categorie!: Category;
  @Input() indexCat = 0;
  @Output() onDelete = new EventEmitter();

  constructor(private categorieService: CategoryService) {}
  deleteCategory() {
    this.onDelete.emit();
    this.indexCat = --this.indexCat;
  }
}
