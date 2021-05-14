import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CountriesService } from 'src/app/core/services/countries.service';
import { SummaryService } from 'src/app/core/services/summary.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const summaryService = new SummaryService(null);
  const countriesService = new CountriesService(null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: SummaryService, useValue: summaryService },
        { provide: CountriesService, useValue: countriesService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    spyOn(summaryService, 'getSummary').and.returnValue(
      of({
        Countries: [], Global: {
          NewConfirmed: 150, TotalConfirmed: 10, TotalRecovered: 20,
          TotalDeaths: 5, NewRecovered: 44, NewDeaths: 41
        }
      })
    );
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    spyOn(countriesService, 'updateRouteData').and.callThrough();
    expect(component).toBeTruthy();
  });

});
