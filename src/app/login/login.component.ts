import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user_service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private UserService:UserServiceService, private router: Router) { }

  user:any={
    email:'',
    password:''
  };
  msg:string;
  ngOnInit() {
  }
  login(){
    this.UserService.login(this.user).subscribe(data=>{
      if(data==false)
      {
        this.msg="Your account is invalid";
        console.log('báo msg');
      }
      else{
        this.msg="";
        localStorage.setItem('email',data.email);
        localStorage.setItem('role',data.role);
        this.router.navigate(['dashboard']);
        console.log('báo lỗi');
      }

    })
  }


}
