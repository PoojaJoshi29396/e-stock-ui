import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

export const COMPANY_ROUTES: Routes = [
  {
    path: 'companies',
    component: CompanyListComponent
  },
  {
    path: 'companies/:id',
    component: CompanyEditComponent
  }
];
