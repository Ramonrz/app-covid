import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Country } from 'src/app/shared/models/country';
import { CountriesService } from './countries.service';

describe('CountriesService', () => {

  let service: CountriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CountriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get countries', () => {

    const slug = 'slug';
    service.getCountries().subscribe((data: Country[]) => {
      expect(data[0].Slug).toEqual(slug);
    });

    const request = httpMock.expectOne(req => {
      return req.method === 'GET';
    });
    request.flush([{ Slug: slug }]);
  });

  it('get listCountries', () => {
    service.getListCountries();
  });

});
