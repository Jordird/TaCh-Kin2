import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-pages-categories',
  templateUrl: './pages-categories.component.html',
  styleUrls: ['./pages-categories.component.scss'],
})
export class PagesCategoriesComponent implements OnInit {
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  listCategories: Category[] = [];

  ngOnInit(): void {
    this.initList();
  }
  initList() {
    this.categoryService.list().subscribe({
      next: (res) => {
        this.listCategories = res;
        console.log(this.listCategories);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  newCategory() {
    this.router.navigate(['nouvelCategorie']);
  }
}
