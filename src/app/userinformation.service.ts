import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinformationService {

  constructor(
    private http: HttpClient
  ) { }

  getUserData(queryParams: HttpParams): any {
    return this.http.get('https://api.github.com/search/users', { params: queryParams });
  }
  getuserProfile(loginid: any){
    return this.http.get('https://api.github.com/users/' + loginid );
  }
}
