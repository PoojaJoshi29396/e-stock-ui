import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StockpriceListComponent } from './stockprice-list/stockprice-list.component';
import { StockpriceEditComponent } from './stockprice-edit/stockprice-edit.component';
import { StockpriceService } from './stockprice.service';
import { STOCKPRICE_ROUTES } from './stockprice.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(STOCKPRICE_ROUTES)
  ],
  declarations: [
    StockpriceListComponent,
    StockpriceEditComponent
  ],
  providers: [StockpriceService],
  exports: []
})
export class StockpriceModule { }
