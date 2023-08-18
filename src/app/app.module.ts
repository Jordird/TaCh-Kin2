import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { MenuComponent } from './composant/menu/menu.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageArticlesComponent } from './pages/page-articles/page-articles.component';
import { PageMoneyComponent } from './pages/page-money/page-money.component';
import { PagesCategoriesComponent } from './pages/pageReglages/pages-categories/pages-categories.component';
import { PageUtilisateurComponent } from './pages/pageReglages/page-utilisateur/page-utilisateur.component';
import { MvtStockComponent } from './pages/page-articles/mvt-stock/mvt-stock.component';
import { CmdClientsComponent } from './pages/page-clients/cmd-clients/cmd-clients.component';
import { HeaderComponent } from './composant/header/header.component';
import { FooterComponent } from './composant/footer/footer.component';
import { TroisBouttonsComponent } from './boutton/trois-bouttons/trois-bouttons.component';
import { DeuxBouttonComponent } from './boutton/deux-boutton/deux-boutton.component';
import { DetailArticlesComponent } from './pages/page-articles/detail-articles/detail-articles.component';
import { PaginationComponent } from './composant/pagination/pagination.component';
import { NouvelArticleComponent } from './pages/page-articles/nouvel-article/nouvel-article.component';
import { DetaitStockComponent } from './pages/page-articles/mvt-stock/detait-stock/detait-stock.component';
import { EntreSortieComponent } from './pages/page-articles/detail-articles/entre-sortie/entre-sortie.component';
import { NouveauClientComponent } from './pages/page-clients/nouveau-client/nouveau-client.component';
import { DetailClientComponent } from './pages/page-clients/detail-client/detail-client.component';
import { PageProfilComponent } from './pages/page-profil/page-profil.component';
import { NouvelCategorieComponent } from './pages/pageReglages/pages-categories/nouvel-categorie/nouvel-categorie.component';
import { DetailCategoriesComponent } from './pages/pageReglages/pages-categories/detail-categories/detail-categories.component';
import { ChangerMotDePassComponent } from './pages/page-profil/changer-mot-de-pass/changer-mot-de-pass.component';
import { LivreCmdClientsComponent } from './pages/page-clients/cmd-clients/livre-cmd-clients/livre-cmd-clients.component';
import { DetailCmdClientComponent } from './pages/page-clients/cmd-clients/detail-cmd-client/detail-cmd-client.component';
import { NouveauStockComponent } from './pages/page-articles/mvt-stock/nouveau-stock/nouveau-stock.component';
import { FormsModule } from '@angular/forms';
import { NouveauCmdClientComponent } from './pages/page-clients/nouveau-cmd-client/nouveau-cmd-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NouvelUtilisateurComponent } from './pages/pageReglages/page-utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { DetailUtilisateurComponent } from './pages/pageReglages/page-utilisateur/detail-utilisateur/detail-utilisateur.component';
import { CategoryService } from './services/category/category.service';
import { HttpClientModule } from '@angular/common/http';
import { articleService } from './services/article/article.service';
import { ModifierProfilComponent } from './pages/page-profil/modifier-profil/modifier-profil.component';
import { AppPagesRoutingModule } from './pages/page-routing.module';

import { SelectArtcilesComponent } from './pages/page-articles/select-artciles/select-artciles.component';
import { AuthService } from './services/auth/auth.service';
import { AchatClientComponent } from './pages/page-clients/achat-client/achat-client.component';
import { NouveauComponent } from './boutton/nouveau/nouveau/nouveau.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageLoginComponent,
    PagesRegisterComponent,
    MenuComponent,
    PageStatistiqueComponent,
    PageClientsComponent,
    PageArticlesComponent,
    PageMoneyComponent,
    PagesCategoriesComponent,
    PageUtilisateurComponent,
    MvtStockComponent,
    CmdClientsComponent,
    HeaderComponent,
    FooterComponent,
    TroisBouttonsComponent,
    DeuxBouttonComponent,
    DetailArticlesComponent,
    PaginationComponent,
    NouvelArticleComponent,
    DetaitStockComponent,
    EntreSortieComponent,
    NouveauClientComponent,
    DetailClientComponent,
    PageProfilComponent,
    NouvelCategorieComponent,
    DetailCategoriesComponent,
    ChangerMotDePassComponent,
    LivreCmdClientsComponent,
    DetailCmdClientComponent,
    NouveauStockComponent,
    NouveauCmdClientComponent,
    NouvelUtilisateurComponent,
    DetailUtilisateurComponent,
    ModifierProfilComponent,

    SelectArtcilesComponent,
    AchatClientComponent,
    NouveauComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppPagesRoutingModule,
  ],
  providers: [CategoryService, articleService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
