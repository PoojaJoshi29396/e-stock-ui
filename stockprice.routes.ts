import { Routes } from '@angular/router';
import { StockpriceListComponent } from './stockprice-list/stockprice-list.component';
import { StockpriceEditComponent } from './stockprice-edit/stockprice-edit.component';

export const STOCKPRICE_ROUTES: Routes = [
  {
    path: 'stockprices',
    component: StockpriceListComponent
  },
  {
    path: 'stockprices/:id',
    component: StockpriceEditComponent
  }
];
