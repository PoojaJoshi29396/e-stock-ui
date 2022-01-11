import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StockpriceEditComponent } from './stockprice-edit.component';
import { StockpriceService } from '../stockprice.service';

describe('StockpriceEditComponent', () => {
  let component: StockpriceEditComponent;
  let fixture: ComponentFixture<StockpriceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockpriceEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [StockpriceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpriceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
