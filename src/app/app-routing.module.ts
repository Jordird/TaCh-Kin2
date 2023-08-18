import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';

const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  {
    path: 'inscription',
    component: PagesRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
