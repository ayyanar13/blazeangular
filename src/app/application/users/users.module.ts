import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersregComponent } from './usersreg/usersreg.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserlistComponent } from './userlist/userlist.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  declarations: [
    UsersregComponent,
    UserloginComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    PaginationModule
  ]
})
export class UsersModule { }
