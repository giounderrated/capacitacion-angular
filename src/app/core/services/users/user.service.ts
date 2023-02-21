import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/users/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[] = [
    {
      id:1234,
      name:'Aldo',
      age:25,
      role:'ROLE_USER'
    },
    {
      id:4564,
      name:'Monica',
      age:32,
      role:'ROLE_ADMIN'
    },
    {
      id:6963,
      name:'Jose',
      age:28,
      role:'ROLE_USER'
    },
    {
      id:1284,
      name:'Marcos',
      age:22,
      role:'ROLE_ADMIN'
    }
  ] 

  constructor() { }

  getAllUsers():Observable<User[]>{
    return of(this.users);
  }

  createNewUser(user:User):Observable<User> {
    this.users.push(user);
    return of(user);
  }

  deleteUser(id:number):Observable<User>{
    let index = this.users.findIndex(user=>{
      user.id = id;
    });
    let user = this.users.splice(index,1)[0];
    return of(user);
  }

}
