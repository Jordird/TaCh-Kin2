import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifierProfilComponent } from './page-profil/modifier-profil/modifier-profil.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PageArticlesComponent } from './page-articles/page-articles.component';
import { ApplicationGuardService } from '../services/guard/application-guard.service';
import { PageStatistiqueComponent } from './page-statistique/page-statistique.component';
import { MvtStockComponent } from './page-articles/mvt-stock/mvt-stock.component';
import { PageMoneyComponent } from './page-money/page-money.component';

import { PageClientsComponent } from './page-clients/page-clients.component';
import { NouveauClientComponent } from './page-clients/nouveau-client/nouveau-client.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { NouvelArticleComponent } from './page-articles/nouvel-article/nouvel-article.component';
import { NouveauStockComponent } from './page-articles/mvt-stock/nouveau-stock/nouveau-stock.component';
import { ChangerMotDePassComponent } from './page-profil/changer-mot-de-pass/changer-mot-de-pass.component';

import { VenteComponent } from './page-vente-et-achat/vente/vente.component';
import { NouveauVenteComponent } from './page-vente-et-achat/vente/nouveau-vente/nouveau-vente.component';
import { NouvelAchatComponent } from './page-vente-et-achat/achat/nouvel-achat/nouvel-achat.component';
import { AchatComponent } from './page-vente-et-achat/achat/achat.component';
import { PageCategorieComponent } from './pageCategorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pageCategorie/nouvelle-categorie/nouvelle-categorie.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'profil/editProfil', component: ModifierProfilComponent },
      {
        path: 'articles',
        component: PageArticlesComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'statistique',
        component: PageStatistiqueComponent,
      },
      {
        path: 'vente',
        component: VenteComponent,
      },
      { path: 'nouveauVente', component: NouveauVenteComponent },
      { path: 'nouvelAchat', component: NouvelAchatComponent },
      {
        path: 'stock',
        component: MvtStockComponent,
        canActivate: [ApplicationGuardService],
      },

      {
        path: 'money',
        component: PageMoneyComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'categories',
        component: PageCategorieComponent,
        canActivate: [ApplicationGuardService],
      },

      {
        path: 'client',
        component: PageClientsComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'achatClient',
        component: AchatComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'Nouveauclient',
        component: NouveauClientComponent,
        canActivate: [ApplicationGuardService],
      },

      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: [ApplicationGuardService],
      },

      {
        path: 'nouvelCategorie',
        component: NouvelleCategorieComponent,
        canActivate: [ApplicationGuardService],
      },

      {
        path: 'nouvelArticle',
        component: NouvelArticleComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'nouveauStock',
        component: NouveauStockComponent,
        canActivate: [ApplicationGuardService],
      },
      { path: 'nouvelAchat', component: NouvelAchatComponent },
      {
        path: 'changeMotDePass',
        component: ChangerMotDePassComponent,
        canActivate: [ApplicationGuardService],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPagesRoutingModule {}
