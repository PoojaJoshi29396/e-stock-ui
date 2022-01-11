import { Component, OnInit } from '@angular/core';
import { StockpriceFilter } from '../stockprice-filter';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';

@Component({
  selector: 'app-stockprice',
  templateUrl: 'stockprice-list.component.html'
})
export class StockpriceListComponent implements OnInit {

  filter = new StockpriceFilter();
  selectedStockprice!: Stockprice;
  feedback: any = {};

  get stockpriceList(): Stockprice[] {
    return this.stockpriceService.stockpriceList;
  }

  constructor(private stockpriceService: StockpriceService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.stockpriceService.load(this.filter);
  }

  select(selected: Stockprice): void {
    this.selectedStockprice = selected;
  }

  delete(stockprice: Stockprice): void {
    if (confirm('Are you sure?')) {
      this.stockpriceService.delete(stockprice).subscribe(() => {
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
