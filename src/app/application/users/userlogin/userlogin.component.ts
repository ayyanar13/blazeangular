import { Component, OnInit } from '@angular/core';

import { ApiService} from "../../../service/api.service"
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';

import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  loginForm: FormGroup;  
  submitted = false;  
  loading: Boolean = false;
  constructor(private formBuilder: FormBuilder,
    private activatedRoute :ActivatedRoute,
    private apiservice:ApiService,    
    public toastr: ToastrManager,
    private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }



  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    let loginData = {
      email: this.loginForm.controls.email.value
    };
    this.apiservice.login(loginData).subscribe((details: any) => {
      if(details.status) {
            localStorage.setItem('userdata', JSON.stringify(details.data))
            this.apiservice.notifyOther({userLogged: true})
    }else{      
      this.toastr.errorToastr(details.message)
    }
  })




  }



  signup(){
    this.router.navigate(['/'], {
      relativeTo: this.activatedRoute,
      skipLocationChange: false
    })
  }
}
