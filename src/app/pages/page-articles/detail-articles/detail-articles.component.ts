import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { Contenu } from 'src/app/models/contenu';

@Component({
  selector: 'app-detail-articles',
  templateUrl: './detail-articles.component.html',
  styleUrls: ['./detail-articles.component.scss'],
})
export class DetailArticlesComponent {
  @Input() article!: Article;
  @Input() contenu!: Contenu;
  @Input() categorie!: Category;

  @Output() onDelete = new EventEmitter();
  deleteArticle() {
    this.onDelete.emit();
  }
  @Output() onEdit = new EventEmitter();
  editArticle() {
    this.onEdit.emit();
  }
}
