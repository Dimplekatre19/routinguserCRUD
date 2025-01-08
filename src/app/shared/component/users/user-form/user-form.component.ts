import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
 userForm!:FormGroup;
 userId!:string;
 userInfo!:Iuser;
 isIneditmode: boolean=false;
  constructor(
    private _routes:ActivatedRoute,
    private _uuidService:UuidService,
    private _userService:UsersService
  ) { }

  ngOnInit(): void {
     this.userForm=new FormGroup({
        userName:new FormControl(null,Validators.required),
        userRole:new FormControl('Candidate')
     })
     this.userId=this._routes.snapshot.params['userId']
     if(this.userId){
        this.isIneditmode=true;
        this. userInfo=this._userService.fetchUser(this.userId) ;
        this.userForm.patchValue(this.userInfo)
     }
  }

  onUserAdd(){
    if(this.userForm.valid){
       //console.log(this.userForm.value)
       let userObj:Iuser={
          ...this.userForm.value,
          userId:this._uuidService.generateUuid()
       }
       this.userForm.reset();
        this._userService.postUser(userObj)
    }
  }

  onUserUpdate(){
    let userObj:Iuser={...this.userForm.value,userId:this.userId};
    this.userForm.reset();
    this._userService.updateUser(userObj)
  }

}
