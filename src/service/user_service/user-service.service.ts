import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,  
    private location: Location) { }
    login(user):Observable<any>{

      const httpOptions = {
        headers: new HttpHeaders({ 'Accept': 'application/json',
        'Content-Type': 'application/json',
        })
      };
      return this.http.post<any>('http://127.0.0.1:8000/admin/login',user,httpOptions);
    }
    getUser(): Observable<any[]> {
      return this.http.get<any[]>('http://127.0.0.1:8000/admin/getuser');
    };
    updateUser(user):Observable<any>{

      const httpOptions = {
        headers: new HttpHeaders({ 'Accept': 'application/json',
        'Content-Type': 'application/json',
        })
      };
      return this.http.post<any>('http://127.0.0.1:8000/admin/updateuser',user,httpOptions);
    }

}
