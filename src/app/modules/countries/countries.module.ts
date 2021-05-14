import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';
import { ListFilterPipe } from 'src/app/pipes/list-filter.pipe';
import { AppMaterialModule } from '../angular-material/app-material.module';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryListComponent } from './country-list/country-list.component';

@NgModule({
  declarations: [
    ListFilterPipe,
    CountryListComponent,
    CountryDetailsComponent
  ],
  imports: [
    OrderModule,
    CommonModule,
    AppMaterialModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
