import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-stockprice-edit',
  templateUrl: './stockprice-edit.component.html'
})
export class StockpriceEditComponent implements OnInit {

  id!: string;
  stockprice!: Stockprice;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockpriceService: StockpriceService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Stockprice()); }
          return this.stockpriceService.findById(id);
        })
      )
      .subscribe(stockprice => {
          this.stockprice = stockprice;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.stockpriceService.save(this.stockprice).subscribe(
      stockprice => {
        this.stockprice = stockprice;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/stockprices']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/stockprices']);
  }
}
