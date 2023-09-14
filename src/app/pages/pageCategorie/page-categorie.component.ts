import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.scss'],
})
export class PageCategorieComponent implements OnInit {
  indexCat = 0;
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
  deleteCategorie(index: number) {
    this.listCategories = this.listCategories.slice(index, -1);
    this.categoryService.delete().subscribe({
      next: (res) => {
        console.log('deleted');
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
