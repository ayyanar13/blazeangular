import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
private signupurl = environment.apiUrl + "site/auth/signup"
private loginurl = environment.apiUrl + "site/auth/login"
private userlisturl = environment.apiUrl + "site/auth/userlist"






private notify = new Subject<any>();
notifyObservable$ = this.notify.asObservable();

  constructor(    private http: HttpClient) { }


  notifyOther(data: any){
    if(data) {
      this.notify.next(data);
    }
  }

  signup(data:any){
    return this.http.post(this.signupurl,data ,{
      headers: new HttpHeaders
    })
  }
  login(data:any){
    return this.http.post(this.loginurl,data ,{
      headers: new HttpHeaders
    })
  }
  userlist(data:any){
    return this.http.post(this.userlisturl,data ,{
      headers: new HttpHeaders
    })
  }
  
  
}
