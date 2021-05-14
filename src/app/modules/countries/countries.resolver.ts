import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/core/services/countries.service';
import { SummaryService } from 'src/app/core/services/summary.service';

@Injectable({
    providedIn: 'root'
})
export class CountriesResolver implements Resolve<SummaryService> {

    constructor(private countryService: CountriesService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.countryService.getCountries();
    }

}
