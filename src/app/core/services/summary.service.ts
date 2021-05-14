import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Summary } from 'src/app/shared/models/summary';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private readonly API = `${environment.API}summary`;

  constructor(private http: HttpClient) { }

  // A summary of new and total cases per country updated daily.
  getSummary(): Observable<Summary> {
    return this.http.get<Summary>(this.API).pipe(take(1));
  }

}
