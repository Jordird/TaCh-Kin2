import { Component, Input } from '@angular/core';
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
}
