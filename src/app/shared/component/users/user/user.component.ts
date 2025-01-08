import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 userId!:string;
 userInfo!:Iuser;
  constructor(
    private _routes:ActivatedRoute,
    private _userService:UsersService
  ) { }

  ngOnInit(): void {
     this._routes.params
                 .subscribe((params:Params)=>{
                    this.userId=params['userId'];
                    this.userInfo=this._userService.fetchUser(this.userId)
                 })
  }

  onuserRemove(){
    this._userService.removeuser(this.userId)
  }

}
