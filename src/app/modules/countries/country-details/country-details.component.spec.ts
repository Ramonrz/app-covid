import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CountriesService } from 'src/app/core/services/countries.service';
import { Country } from 'src/app/shared/models/country';
import { CountryDetailsComponent } from './country-details.component';

describe('CountryDetailsComponent', () => {

  let component: CountryDetailsComponent;
  const service = new CountriesService(null);
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailsComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: CountriesService, useValue: service }]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;

    const countries: Country[] = [{ Country: 'Country', CountryCode: undefined, Slug: '' }];
    spyOn(service, 'getListCountries').and.returnValue(countries);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
