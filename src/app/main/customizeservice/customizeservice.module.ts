import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeserviceRoutingModule } from './customizeservice-routing.module';
import { CustomizeserviceComponent } from './customizeservice.component';


@NgModule({
  declarations: [
    CustomizeserviceComponent
  ],
  imports: [
    CommonModule,
    CustomizeserviceRoutingModule
  ]
})
export class CustomizeserviceModule { }
