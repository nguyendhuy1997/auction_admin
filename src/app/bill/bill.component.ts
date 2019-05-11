import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product_service/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  constructor(private ProductService:ProductServiceService,private router: Router) { }
  bills:any;
  ngOnInit() {
    if(localStorage.getItem('email')==null)
    {
      this.router.navigate(['']);
    }
    else{
      this.ProductService.getBill().subscribe(data=>{
        this.bills=data;
        console.log(this.bills);
      })
    }
  }

}
