import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
export class NouvelArticleComponent {
  listCategories: Category[] = [];
  constructor(
    private router: Router,
    private formBuider: FormBuilder,
    private articleService: articleService,
    private contenuService: ContenuService,
    private categoryService: CategoryService
  ) {}
  mainFormGroup = this.formBuider.group({
    photo: [null, Validators.required],
    nomArticle: [null, Validators.required],
    prix: [null, Validators.required],
    couleur: [null, Validators.required],
    quantite: [null, Validators.required],
    pointure: [null, Validators.required],
    nomCategorie: [null, Validators.required],
  });

  selectedFile: any = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] ?? null;
  }

  onSubmit() {
    const articleMainForm = this.mainFormGroup.getRawValue();
    console.log(articleMainForm);
    this.articleService.create(articleMainForm).subscribe({
      next: (res) => {
        alert('CREATED');

        this.router.navigate(['articles']);
      },
      error: (err) => {
        alert('error');
      },
    });
    this.contenuService.create(articleMainForm).subscribe({
      next: (res) => {
        alert('CREATED');
        this.router.navigate(['articles ']);
      },
      error: (err) => {
        alert('error');
      },
    });
    this.categoryService.create(articleMainForm).subscribe({
      next: (res) => {
        alert('CREATED');
        this.router.navigate(['articles ']);
      },
      error: (err) => {
        alert('error');
      },
    });
  }
  goBack() {
    this.router.navigate(['articles']);
  }
}
