import { Component, OnInit } from '@angular/core';
import {ApiService }from "../../../service/api.service"
import { Router, ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedin:boolean=false
  loggedUser:any
  autoClose:any
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiservive:ApiService
    ) { }

  ngOnInit(): void {
    this.apiservive.notifyObservable$.subscribe((res:any) => {
      console.log(res);
      this.loggedin= res.userLogged
      this.router.navigate(['/list'], {
        relativeTo: this.activatedRoute,
        skipLocationChange: false
      })
    })
    if('userdata' in localStorage){
      var data = 'userdata' in localStorage ?  JSON.parse( localStorage.getItem("userdata")|| ''):{}
      this.loggedUser = data
      this.loggedin = true
      console.log(this.loggedUser);
      this.router.navigate(['/list'], {
        relativeTo: this.activatedRoute,
        skipLocationChange: false
      })
    }
  }
  Login(){
    this.router.navigate(['/login'], {
      relativeTo: this.activatedRoute,
      skipLocationChange: false
    })
  }
  signup(){
    this.router.navigate(['/'], {
      relativeTo: this.activatedRoute,
      skipLocationChange: false
    })
  }
  userlist(){
    this.router.navigate(['/list'], {
      relativeTo: this.activatedRoute,
      skipLocationChange: false
    })

  }
  logout(){
    localStorage.removeItem('userdata');
    this.loggedin = false
    this.router.navigate(['/'], {
      relativeTo: this.activatedRoute,
      skipLocationChange: false
    })
  }

  


}
