import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'products', component:ProductListComponent},
  {path:'login', component:LoginComponent},
  {path:'products/:id', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
