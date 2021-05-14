import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Country } from 'src/app/shared/models/country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly API = `${environment.API}`;
  private countries: Country[];

  constructor(private http: HttpClient) { }

  // Returns all the available countries and provinces, as well as the country slug for per country requests.
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.API}countries`).pipe(take(1));
  }

  getListCountries(): Country[] {
    return this.countries;
  }

  updateRouteData(countries: Country[]) {
    this.countries = countries;
  }

}
