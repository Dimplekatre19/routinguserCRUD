import { Injectable } from '@angular/core';
import { Iuser } from '../models/users';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr:Array<Iuser>=[
    {
      userName:'Jhon Doe',
      userId:'123',
      userRole:'Candidate'
    },
    {
      userName:'Jen Doe',
      userId:'124',
      userRole:'Candidate'
    },
    {
      userName:'May Deo',
      userId:'125',
      userRole:'Admin'
    }
  ]
  constructor(
    private _router:Router,
    private _snackbar:SnackbarService
  ) { }

  fetchAllUsers(){
      return this.usersArr
  }

  fetchUser(id:string){
     //api call to fetch a single user using Id
      return this.usersArr.find(user=>user.userId===id)!
  }
  
  postUser(user:Iuser){
      this.usersArr.push(user)
      this._router.navigate(['/users']) 
     this._snackbar.opensnackbar("New User Added successfulyy!!")
  }

  updateUser(updatedUser:Iuser){
   //api call to update user 
   let getIndex=this.usersArr.findIndex(user=>user.userId===updatedUser.userId);
   this.usersArr[getIndex]=updatedUser;
   this._router.navigate(['/users'])
   this._snackbar.opensnackbar(" User updated successfulyy!!")
  }

  removeuser(id:string){
    //api call to remove user
     let getindex=this.usersArr.findIndex(user=>user.userId===id)
     this.usersArr.splice(getindex,1);
     this._router.navigate(['/users']) 
    this._snackbar.opensnackbar(" User removed successfulyy!!")
  }
}
