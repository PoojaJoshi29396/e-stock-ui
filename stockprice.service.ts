import { Stockprice } from './stockprice';
import { StockpriceFilter } from './stockprice-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class StockpriceService {
  stockpriceList: Stockprice[] = [];
  api = 'http://localhost:8084/api/v1.0/market/stock';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Stockprice> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Stockprice>(url, {params, headers});
  }

  load(filter: StockpriceFilter): void {
    this.find(filter).subscribe(result => {
        this.stockpriceList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: StockpriceFilter): Observable<Stockprice[]> {
    const params = {
    };

    return this.http.get<Stockprice[]>(this.api, {params, headers});
  }

  save(entity: Stockprice): Observable<Stockprice> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Stockprice>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Stockprice>(url, entity, {headers, params});
    }
  }

  delete(entity: Stockprice): Observable<Stockprice> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Stockprice>(url, {headers, params});
    }
    return EMPTY;
  }

  findByCompanies(companyCode: String): Observable<Stockprice[]> {
    const params = {
    };
    this.api = 'http://localhost:8083/api/v1.0/market/company/info/' + companyCode;
    return this.http.get<Stockprice[]>(this.api, {params, headers});
  }


}

