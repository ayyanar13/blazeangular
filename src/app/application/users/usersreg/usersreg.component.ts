import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
import {ApiService } from "../../../service/api.service"
import { Router, ActivatedRoute } from '@angular/router';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-usersreg',
  templateUrl: './usersreg.component.html',
  styleUrls: ['./usersreg.component.scss']
})
export class UsersregComponent implements OnInit {

  loginForm: FormGroup;  
  submitted = false;  
  separateDialCode: boolean = true;
  selectedCountry: any;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  clicked: boolean;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiservice :ApiService
    ) { 
    
    this.loginForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      email: ['', Validators.required]
    });
      this.selectedCountry = CountryISO["India"];

  }

  ngOnInit(): void {
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.clicked = false;
        return;
    } else{
      this.clicked=true;
    }
    let regData = this.loginForm.value;    
    let phone = {
      code: (this.loginForm.value.phone && this.loginForm.value.phone.dialCode) ? this.loginForm.value.phone.dialCode:"",
      number:( this.loginForm.value.phone && this.loginForm.value.phone.number) ? this.loginForm.value.phone.number:"",
    }
    regData.phone = phone;

console.log(regData);
this.apiservice.signup(regData).subscribe((details: any) => {
  if(details.status) {
        localStorage.setItem('userdata', JSON.stringify(details.data))
        this.apiservice.notifyOther({userLogged: true})

  }else{

  }

})



  }

}
