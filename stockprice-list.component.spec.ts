import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StockpriceListComponent } from './stockprice-list.component';
import { StockpriceService } from '../stockprice.service';

describe('StockpriceListComponent', () => {
  let component: StockpriceListComponent;
  let fixture: ComponentFixture<StockpriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockpriceListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [StockpriceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
