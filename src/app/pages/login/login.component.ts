import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private formBuilder:FormBuilder){

  }

  loginForm = this.formBuilder.group({
    email:['',Validators.compose([Validators.email,Validators.required])],
    password:['',Validators.compose([Validators.required,Validators.minLength(8)])]
  })

  save(){
    if(!this.loginForm.valid) return;
    console.log(this.loginForm.value)
    let data = JSON.stringify(this.loginForm.value)
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }




}
