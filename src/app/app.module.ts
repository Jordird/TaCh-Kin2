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
import { MvtStockComponent } from './pages/page-articles/mvt-stock/mvt-stock.component';
import { HeaderComponent } from './composant/header/header.component';
import { FooterComponent } from './composant/footer/footer.component';
import { DeuxBouttonComponent } from './boutton/deux-boutton/deux-boutton.component';
import { DetailArticlesComponent } from './pages/page-articles/detail-articles/detail-articles.component';
import { PaginationComponent } from './composant/pagination/pagination.component';
import { NouvelArticleComponent } from './pages/page-articles/nouvel-article/nouvel-article.component';
import { DetaitStockComponent } from './pages/page-articles/mvt-stock/detait-stock/detait-stock.component';
import { EntreSortieComponent } from './pages/page-articles/detail-articles/entre-sortie/entre-sortie.component';
import { NouveauClientComponent } from './pages/page-clients/nouveau-client/nouveau-client.component';
import { DetailClientComponent } from './pages/page-clients/detail-client/detail-client.component';
import { PageProfilComponent } from './pages/page-profil/page-profil.component';
import { ChangerMotDePassComponent } from './pages/page-profil/changer-mot-de-pass/changer-mot-de-pass.component';
import { NouveauStockComponent } from './pages/page-articles/mvt-stock/nouveau-stock/nouveau-stock.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from './services/category/category.service';
import { HttpClientModule } from '@angular/common/http';
import { articleService } from './services/article/article.service';
import { ModifierProfilComponent } from './pages/page-profil/modifier-profil/modifier-profil.component';
import { AppPagesRoutingModule } from './pages/page-routing.module';
import { SelectArtcilesComponent } from './pages/page-articles/select-artciles/select-artciles.component';
import { AuthService } from './services/auth/auth.service';
import { NouveauComponent } from './boutton/nouveau/nouveau/nouveau.component';
import { Error404Component } from './composant/error404/error404.component';
import { AchatComponent } from './pages/page-vente-et-achat/achat/achat.component';
import { DetailAchatComponent } from './pages/page-vente-et-achat/achat/detail-achat/detail-achat.component';
import { VenteComponent } from './pages/page-vente-et-achat/vente/vente.component';
import { DetailVenteComponent } from './pages/page-vente-et-achat/vente/detail-vente/detail-vente.component';
import { PageCategorieComponent } from './pages/pageCategorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pages/pageCategorie/nouvelle-categorie/nouvelle-categorie.component';
import { DetailCategorieComponent } from './pages/pageCategorie/detail-categorie/detail-categorie.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NouveauVenteComponent } from './pages/page-vente-et-achat/vente/nouveau-vente/nouveau-vente.component';
import { EditEtSupprimerComponent } from './boutton/edit-et-supprimer/edit-et-supprimer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppBouttonModule } from './boutton/app-boutton.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { NouvelAchatComponent } from './pages/page-vente-et-achat/achat/nouvel-achat/nouvel-achat.component';
import { VenteService } from './services/vente/vente.service';
import { ClientsService } from './services/clients/clients.service';

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

    MvtStockComponent,
    HeaderComponent,
    FooterComponent,
    DeuxBouttonComponent,
    DetailArticlesComponent,
    PaginationComponent,
    NouvelArticleComponent,
    DetaitStockComponent,
    EntreSortieComponent,
    NouveauClientComponent,
    DetailClientComponent,
    PageProfilComponent,

    ChangerMotDePassComponent,
    NouveauStockComponent,
    ModifierProfilComponent,
    SelectArtcilesComponent,
    NouveauComponent,
    Error404Component,
    VenteComponent,
    AchatComponent,
    DetailAchatComponent,
    DetailVenteComponent,
    PageCategorieComponent,
    NouvelleCategorieComponent,
    DetailCategorieComponent,

    NouveauVenteComponent,
    EditEtSupprimerComponent,
    NouvelAchatComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppPagesRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    MatButtonModule,
    AppBouttonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [
    CategoryService,
    articleService,
    AuthService,
    VenteService,
    ClientsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
