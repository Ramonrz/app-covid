import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries.service';
import { SummaryService } from 'src/app/core/services/summary.service';
import { Summary } from 'src/app/shared/models/summary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  summary: Summary;

  constructor(
    private summaryService: SummaryService,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.summaryService.getSummary().subscribe((summary: Summary) => {
      this.summary = summary;
      this.countriesService.updateRouteData(summary.Countries);
    });
  }

}
