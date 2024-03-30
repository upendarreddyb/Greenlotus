import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: 'customizesevice', loadChildren: () => import('./customizeservice/customizeservice.module').then(m => m.CustomizeserviceModule) },
    { path: 'sustainability', loadChildren: () => import('./sustainability/sustainability.module').then(m => m.SustainabilityModule) },
    { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
    { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
  ]
},




]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
