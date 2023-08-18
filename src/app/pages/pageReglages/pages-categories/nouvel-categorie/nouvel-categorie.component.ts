import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-nouvel-categorie',
  templateUrl: './nouvel-categorie.component.html',
  styleUrls: ['./nouvel-categorie.component.scss'],
})
export class NouvelCategorieComponent implements OnInit {
  categoryForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      nomCategorie: [null, Validators.required],
    });
  }
  goBack() {
    this.router.navigate(['categories']);
  }
  onSubmit() {
    const category = this.categoryForm.getRawValue();
    console.log(category);
    this.categoryService.create(category).subscribe({
      next: (res) => {
        alert('CREATED');
        this.router.navigate(['categories']);
      },
      error: (err) => {
        alert('ERROR');
      },
    });
  }
}
