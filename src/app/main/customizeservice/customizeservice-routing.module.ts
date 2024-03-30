import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizeserviceComponent } from './customizeservice.component';

const routes: Routes = [{ path: '', component: CustomizeserviceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizeserviceRoutingModule { }
