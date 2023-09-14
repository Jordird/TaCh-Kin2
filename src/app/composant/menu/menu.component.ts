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
    // {
    //   id: '1',
    //   titre: 'Tableau de bord',
    //   icon: 'fa-solid fa-chart-simple',
    //   url: '',
    //   sousMenu: [
    //     {
    //       id: '11',
    //       titre: 'Statistiques',
    //       icon: 'fa-solid fa-chart-line',
    //       url: 'statistique',
    //     },
    //   ],
    // },
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
      ],
    },
    {
      id: '4',
      titre: 'Vente&Achat',
      icon: 'fa-solid fa-cart-plus',
      url: '',
      sousMenu: [
        {
          id: '42',
          titre: 'Vente ',
          icon: 'fa-solid fa-cart-plus',
          url: 'vente',
        },
        {
          id: '43',
          titre: 'Achat ',
          icon: 'fas fa-cart-arrow-down fa-xs fa-fw',
          url: 'achatClient',
        },
      ],
    },
    {
      id: '5',
      titre: 'Catégories',
      icon: 'fa fa-list',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Catégories',
          icon: 'fa fa-list',
          url: 'categories',
        },
      ],
    },
    {
      id: '6',
      titre: 'Money',
      icon: 'fa-solid fa-money-bill',
      url: '',
      sousMenu: [
        {
          id: '61',
          titre: 'Money',
          icon: 'fa-solid fa-money-bill',
          url: 'money',
        },
        {
          id: '62',
          titre: "Gerer de l'argent",
          icon: 'fa-solid fa-money-bill-transfer',
          url: '',
        },
      ],
    },
  ];
  constructor(private router: Router) {}
  navigate(url?: string): void {
    this.router.navigate([url]);
  }
}
