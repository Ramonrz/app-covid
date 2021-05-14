import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Summary } from 'src/app/shared/models/summary';
import { SummaryService } from './summary.service';

describe('SummaryService', () => {

  let service: SummaryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(SummaryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get summary', () => {

    const sumary = { Global: {}, Countries: [] } as Summary;
    service.getSummary().subscribe((data: Summary) => {
      expect(data.Global).toEqual(sumary.Global);
    });

    const request = httpMock.expectOne(req => {
      return req.method === 'GET';
    });
    request.flush(sumary);
  });
});
