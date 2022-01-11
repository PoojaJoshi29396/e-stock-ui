import { Company } from './company';
import { CompanyFilter } from './company-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class CompanyService {
  companyList: any[] = [];
  api = 'http://localhost:8083/api/v1.0/market/company';

  constructor(private http: HttpClient) {
  }

  getCompanyList(): Observable<any> {
    //const myObj = this.http.get(`${this.api}`);
    return this.http.get(`${this.api}/getAll`);
    //return myObj;
    //console.log(myObj);
  }

  findById(id: string): Observable<Company> {
    const url = `${this.api}/info/${id}`;
    const params = { companycode: id };
    return this.http.get<Company>(url, {params, headers});
  }

  load(filter: CompanyFilter): void {
    this.find(filter).subscribe(result => {
        this.companyList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: CompanyFilter): Observable<any[]> {
    const params = {
    };
    //this.api = this.api+'/getAll';
    return this.http.get<any[]>(this.api+'/getAll', {params, headers});
  }

  save(entity: Company, params1 : string): Observable<Company> {
    let params = new HttpParams();
    let url = '';
    if (params1 != "new") {
      url = `${this.api}/${entity.companycode.toString()}`;
      params = new HttpParams().set('ID', entity.companycode.toString());
      return this.http.put<Company>(url, entity, {headers, params});
    } else {
      url = `${this.api}/register`;
      return this.http.post<Company>(url, entity, {headers, params});
    }
  }

  delete(entity: Company): Observable<Company> {
    let params = new HttpParams();
    let url = '';
    if (entity.companycode) {
      url = `${this.api}/${entity.companycode.toString()}`;
      params = new HttpParams().set('ID', entity.companycode.toString());
      return this.http.delete<Company>(url, {headers, params});
    }
    return EMPTY;
  }
}

