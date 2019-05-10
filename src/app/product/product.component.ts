import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product_service/product-service.service';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private ProductService:ProductServiceService,
     private _DomSanitizationService: DomSanitizer) { }

  products:any;
  ngOnInit() {
    this.ProductService.getProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
    })
  }
  accept(id_product){
    this.ProductService.accept(id_product).subscribe(data=>{
      console.log(data);
    })
    this.ProductService.getProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
    })    
  }
  decline(id_product){
    this.ProductService.decline(id_product).subscribe(data=>{
      console.log(data);
    })
    this.ProductService.getProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
    })    
  }
}
