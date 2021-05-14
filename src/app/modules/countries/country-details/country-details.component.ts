import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/core/services/countries.service';
import { Country } from 'src/app/shared/models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  id: number;
  country: Country;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });
    this.country = this.countriesService.getListCountries()?.filter(country => country.CountryCode === this.id?.toString())[0];
  }

}
