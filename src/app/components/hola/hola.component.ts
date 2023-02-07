import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.scss']
})
export class HolaComponent implements OnInit{
  
 products:any[] = [];

  constructor(private productService:ProductService){

  }

  ngOnInit(){
    this.getProducts();
  }
  getProducts() {
    this.productService.getAllProducts().subscribe((data:any)=>{
      this.products = data;
      console.log(data);
    });
  }



}
