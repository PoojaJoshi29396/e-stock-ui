import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyListComponent } from './company-list.component';
import { CompanyService } from '../company.service';

describe('CompanyListComponent', () => {
  let component: CompanyListComponent;
  let fixture: ComponentFixture<CompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CompanyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
