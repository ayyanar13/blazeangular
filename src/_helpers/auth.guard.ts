import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private activatedRoute:ActivatedRoute,
        private apiservice :ApiService
    ) { }

    canActivate():any {
        var data = 'userdata' in localStorage ?  JSON.parse( localStorage.getItem("userdata")|| ''):[]  
       
        if (data&&data.role == "manager")  {
            return true
        }else if(data&&data.role == "employee"){
            return true
        }
        this.router.navigate(['/']);
            return false;
}
}