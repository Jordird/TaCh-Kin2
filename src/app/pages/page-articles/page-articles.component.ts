import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { articleService } from 'src/app/services/article/article.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-page-articles',
  templateUrl: './page-articles.component.html',
  styleUrls: ['./page-articles.component.scss'],
})
export class PageArticlesComponent implements OnInit {
  listArticle: Article[] = [];
  listCategories: Category[] = [];

  constructor(
    private router: Router,
    private articleService: articleService,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.articleService.list().subscribe({
      next: (res) => {
        this.listArticle = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.initListCategory();
  }

  initListCategory() {
    this.categoryService.list().subscribe({
      next: (res) => {
        this.listCategories = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteArticle() {}
  editArticle() {}
  nouvelArticle() {
    this.router.navigate(['nouvelArticle']);
  }
}
