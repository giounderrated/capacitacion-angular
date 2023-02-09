import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaComponent } from './components/hola/hola.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'hola', component:HolaComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
