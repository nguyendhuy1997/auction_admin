import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient,  
    private location: Location) { }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://auctionbackend.herokuapp.com/admin/getproduct');
  };
  getBill(): Observable<any[]> {
    return this.http.get<any[]>('https://auctionbackend.herokuapp.com/admin/getbill');
  };
  accept(id_product:string):Observable<any>{
    const product={
      id_product:id_product
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionbackend.herokuapp.com/admin/product/accept',product,httpOptions);
  }
  decline(id_product:string):Observable<any>{
    const product={
      id_product:id_product
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionbackend.herokuapp.com/admin/product/decline',product,httpOptions);
  }
}
