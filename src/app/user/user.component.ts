import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user_service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private UserService:UserServiceService) { }
  users:any;
  ngOnInit() {
    this.UserService.getUser().subscribe(data=>{
      this.users=data;
      console.log(this.users);

    })
  }
  updateUser(user){
    this.UserService.updateUser(user).subscribe(data=>{
     alert(data.msg);
    });
  }
  

}
