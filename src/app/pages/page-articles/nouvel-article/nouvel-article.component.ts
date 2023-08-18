import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { articleService } from 'src/app/services/article/article.service';
import { ContenuService } from 'src/app/services/article/contenu.service';
import { CategoryService } from 'src/app/services/category/category.service';
@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss'],
})
export class NouvelArticleComponent implements OnInit {
  articleForm!: FormGroup;
  listCategories: Category[] = [];
  contenuForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuider: FormBuilder,
    private articleService: articleService,
    private contenuService: ContenuService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.initArticleForm();
    this.initContenuForm();
    this.initList();
  }

  private initArticleForm() {
    this.articleForm = this.formBuider.group({
      nomArticle: [null, Validators.required],
    });
  }
  private initContenuForm() {
    this.contenuForm = this.formBuider.group({
      prix: [null, Validators.required],
      couleur: [null, Validators.required],
      quantite: [null, Validators.required],
      pointure: [null, Validators.required],
    });
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
  onSubmit() {
    const article = this.articleForm.getRawValue();
    const contenu = this.contenuForm.getRawValue();
    console.log(contenu);
    console.log(article);

    this.contenuService.create(contenu).subscribe({
      next: (res) => {
        alert('CONTENU CREATED');
        this.router.navigate(['articles']);
      },
      error: (err) => {
        alert('ERROR CONTENU');
      },
    });
    this.articleService.create(article).subscribe({
      next: (res) => {
        alert(' ARTICLE CREATED');
        this.router.navigate(['articles']);
      },
      error: (err) => {
        alert('ERROR ARTICLE');
      },
    });
  }
  goBack() {
    this.router.navigate(['articles']);
  }
}
