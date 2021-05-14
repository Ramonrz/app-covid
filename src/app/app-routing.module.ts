import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'countries', loadChildren: () =>
      import('./modules/countries/countries.module').then(m => m.CountriesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '', component: HomeComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'login', loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
