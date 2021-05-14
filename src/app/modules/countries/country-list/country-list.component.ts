import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/shared/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.data.subscribe((data: any) => {
      this.countries = data.countries;
    });
  }

  onClick(country: any) {
    this.router.navigate(['/countries', country.ISO2]);
  }

}
