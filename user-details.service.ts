import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Users } from './users.model';
import { UserDetails } from 'src/UserDetails';



@Injectable()
export class UserDetailsService {
  private apiUrl = 'http://localhost:9090/api/user';
  constructor(private http: HttpClient) {
   }

   registerUsers(user: UserDetails): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(user));
   } 

   getUserDetail(): Observable<any> {
    return this.http.get(this.apiUrl);
}

   
}