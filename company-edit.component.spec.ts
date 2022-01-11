import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyEditComponent } from './company-edit.component';
import { CompanyService } from '../company.service';

describe('CompanyEditComponent', () => {
  let component: CompanyEditComponent;
  let fixture: ComponentFixture<CompanyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CompanyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
