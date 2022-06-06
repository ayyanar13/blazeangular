import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersregComponent } from './usersreg/usersreg.component';

const routes: Routes = [
  {path:"",component:UsersregComponent},
  {path:"login",component:UserloginComponent},
  {path:"list",component:UserlistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
