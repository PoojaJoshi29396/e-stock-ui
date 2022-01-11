import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html'
})
export class CompanyEditComponent implements OnInit {

  id!: string;
  company!: Company;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Company()); }
          return this.companyService.findById(id);
        })
      )
      .subscribe(company => {
          this.company = company;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.companyService.save(this.company,"new").subscribe(
      company => {
        this.company = company;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/companies']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/companies']);
  }
}
