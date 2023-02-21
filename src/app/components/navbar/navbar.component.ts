import { Component } from '@angular/core';

@Component({
  selector: 'custom-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  myName:string = "Giovani";
  n:number = 0;

  add(){
    this.n++;
  }

}
