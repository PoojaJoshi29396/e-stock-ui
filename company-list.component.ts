import { Component, OnInit } from '@angular/core';
import { CompanyFilter } from '../company-filter';
import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-company',
  templateUrl: 'company-list.component.html'
})
export class CompanyListComponent implements OnInit {

  filter = new CompanyFilter();
  selectedCompany!: Company;
  feedback: any = {};

  get companyList(): any[] {
    let a =  this.companyService.companyList;
    console.log(a);
    return a;
  }

   b: any[] = [];
  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.search();
    this.companyService.getCompanyList().subscribe(
      data =>{
        this.b =data;

      })
  }

  search(): void {
    this.companyService.load(this.filter);
  }

  select(selected: Company): void {
    this.selectedCompany = selected;
  }

  get() {
    this.companyService.getCompanyList();
  }

  delete(company: Company): void {
    if (confirm('Are you sure?')) {
      this.companyService.delete(company).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
