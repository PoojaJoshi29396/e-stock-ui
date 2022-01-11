import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyService } from './company.service';
import { COMPANY_ROUTES } from './company.routes';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(COMPANY_ROUTES)
  ],
  declarations: [
    CompanyListComponent,
    CompanyEditComponent
  ],
  providers: [CompanyService],
  exports: []
})
export class CompanyModule { }
