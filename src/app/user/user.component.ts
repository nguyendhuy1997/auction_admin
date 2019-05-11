import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user_service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private UserService:UserServiceService,private router: Router) { }
  users:any;
  ngOnInit() {
    if(localStorage.getItem('email')==null)
    {
      this.router.navigate(['']);
    }
    else{
      this.UserService.getUser().subscribe(data=>{
        this.users=data;
        console.log(this.users);
  
      })
    }
   
  }
  updateUser(user){
    this.UserService.updateUser(user).subscribe(data=>{
     alert(data.msg);
    });
  }
  

}
