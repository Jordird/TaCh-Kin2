import { Component } from '@angular/core';
import { menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public menuProperties: Array<menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fa-solid fa-chart-simple',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Statistiques',
          icon: 'fa-solid fa-chart-line',
          url: 'statistique',
        },
      ],
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa-solid fa-list',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'fa-solid fa-list',
          url: 'articles',
        },
        {
          id: '22',
          titre: 'Stock',
          icon: 'fa-solid fa-cart-shopping',
          url: 'stock',
        },
      ],
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa-solid fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fa-solid fa-users',
          url: 'client',
        },
        {
          id: '32',
          titre: 'Vente clients',
          icon: 'fa-solid fa-cart-plus',
          url: 'vente-clients',
        },
        {
          id: '33',
          titre: 'Achat clients',
          icon: 'fas fa-cart-arrow-down fa-xs fa-fw',
          url: 'achatClient',
        },
      ],
    },
    {
      id: '4',
      titre: 'Money',
      icon: 'fa-solid fa-money-bill',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Money',
          icon: 'fa-solid fa-money-bill',
          url: 'money',
        },
        {
          id: '42',
          titre: "Gerer de l'argent",
          icon: 'fa-solid fa-money-bill-transfer',
          url: '',
        },
      ],
    },
    {
      id: '5',
      titre: 'Reglages',
      icon: 'fa-solid fa-gears',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Catégories',
          icon: 'fa fa-list',
          url: 'categories',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-user',
          url: 'utilisateurs',
        },
      ],
    },
  ];
  constructor(private router: Router) {}
  navigate(url?: string): void {
    this.router.navigate([url]);
  }
}
