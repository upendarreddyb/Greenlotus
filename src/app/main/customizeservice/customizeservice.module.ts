import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeserviceRoutingModule } from './customizeservice-routing.module';
import { CustomizeserviceComponent } from './customizeservice.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomizeserviceComponent
  ],
  imports: [
    CommonModule,
    CustomizeserviceRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomizeserviceModule { }
