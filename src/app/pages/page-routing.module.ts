import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifierProfilComponent } from './page-profil/modifier-profil/modifier-profil.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PageArticlesComponent } from './page-articles/page-articles.component';
import { ApplicationGuardService } from '../services/guard/application-guard.service';
import { PageStatistiqueComponent } from './page-statistique/page-statistique.component';
import { MvtStockComponent } from './page-articles/mvt-stock/mvt-stock.component';
import { CmdClientsComponent } from './page-clients/cmd-clients/cmd-clients.component';
import { PageMoneyComponent } from './page-money/page-money.component';
import { PagesCategoriesComponent } from './pageReglages/pages-categories/pages-categories.component';
import { PageClientsComponent } from './page-clients/page-clients.component';
import { NouveauClientComponent } from './page-clients/nouveau-client/nouveau-client.component';
import { NouveauCmdClientComponent } from './page-clients/nouveau-cmd-client/nouveau-cmd-client.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { NouvelCategorieComponent } from './pageReglages/pages-categories/nouvel-categorie/nouvel-categorie.component';
import { NouvelArticleComponent } from './page-articles/nouvel-article/nouvel-article.component';
import { NouveauStockComponent } from './page-articles/mvt-stock/nouveau-stock/nouveau-stock.component';
import { ChangerMotDePassComponent } from './page-profil/changer-mot-de-pass/changer-mot-de-pass.component';
import { NouvelUtilisateurComponent } from './pageReglages/page-utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateurComponent } from './pageReglages/page-utilisateur/page-utilisateur.component';
import { AchatClientComponent } from './page-clients/achat-client/achat-client.component';

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
        path: 'stock',
        component: MvtStockComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'vente-clients',
        component: CmdClientsComponent,
        canActivate: [ApplicationGuardService],
      },

      {
        path: 'money',
        component: PageMoneyComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'categories',
        component: PagesCategoriesComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'client',
        component: PageClientsComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'achatClient',
        component: AchatClientComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'Nouveauclient',
        component: NouveauClientComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'nouveauCommandeClient',
        component: NouveauCmdClientComponent,
      },
      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: [ApplicationGuardService],
      },

      {
        path: 'nouvelCategorie',
        component: NouvelCategorieComponent,
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
      {
        path: 'changeMotDePass',
        component: ChangerMotDePassComponent,
        canActivate: [ApplicationGuardService],
      },

      { path: 'nouvelUtilisateur', component: NouvelUtilisateurComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPagesRoutingModule {}
