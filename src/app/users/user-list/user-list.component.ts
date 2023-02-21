import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/users/user.service';
import { User } from '../User';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  constructor(private usersService:UserService, private formBuilder:FormBuilder){}
  
  users:User[] = [];
  createUserForm = this.formBuilder.group({
    name:['',Validators.compose([Validators.required,Validators.minLength(5)])],
    age:[0, Validators.compose([Validators.required, Validators.min(18)])],
    role:['', Validators.required]
  });

  ngOnInit(): void {
    this.reloadUsers();
  }

  addUser(){
    if(!this.createUserForm.valid) return;
    console.log(this.createUserForm.value);
  }

  // addUser(){
  //   let id = Math.floor(Math.random() * 100);
  //   let user:User = {
  //     id:id,
  //     name:'Giovani',
  //     age: 22,
  //     role:'ROLE_USER'
  //   }

  //   this.usersService.createNewUser(user).subscribe(user=>{
  //     console.log("EL usuario ha sido creado " + user.name);
  //     this.reloadUsers();
  //   })
  // }

  reloadUsers(){
    this.usersService.getAllUsers().subscribe(users=>{
      this.users = users;
    })
  }

  deleteUser(id:number){
    this.usersService.deleteUser(id).subscribe(user=>{
      console.log("Usuario eliminado con id ", user.id);
    })
  }
}


