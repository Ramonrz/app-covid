import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesResolver } from './countries.resolver';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: CountryListComponent, resolve: { countries: CountriesResolver },
      },
      { path: ':id', component: CountryDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
