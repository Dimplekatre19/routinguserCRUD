import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../models/users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userInfo!:Array<Iuser>;


  constructor(
    private _usersService:UsersService,
  
  ) { }

  ngOnInit(): void {
     this.userInfo=this._usersService.fetchAllUsers();
  }


}
