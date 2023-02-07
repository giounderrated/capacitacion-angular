import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaComponent } from './components/hola/hola.component';

const routes: Routes = [
  {path:'hola', component:HolaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
