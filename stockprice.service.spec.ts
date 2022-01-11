import { TestBed } from '@angular/core/testing';
import { StockpriceService } from './stockprice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StockpriceService', () => {
  let service: StockpriceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StockpriceService]
    });

    service = TestBed.get(StockpriceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
