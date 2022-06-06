import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';

import { BsDropdownModule  } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InitialRoutingModule,
    BsDropdownModule.forRoot()
  ]
})
export class InitialModule { }
