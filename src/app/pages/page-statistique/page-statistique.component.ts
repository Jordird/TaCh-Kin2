import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-page-statistique',
  templateUrl: './page-statistique.component.html',
  styleUrls: ['./page-statistique.component.scss'],
})
export class PageStatistiqueComponent {
  listCategories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.initList();
  }
  initList() {
    this.categoryService.list().subscribe({
      next: (res) => {
        this.listCategories = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
