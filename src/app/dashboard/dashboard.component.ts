import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('email')==null)
    {
      this.router.navigate(['']);
    }
    
  }

}
