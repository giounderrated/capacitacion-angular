import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/products/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  id:any;
  product:any;

  constructor(
    private route: ActivatedRoute,
    private productService:ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getOneProduct(this.id).subscribe((data:any)=>this.product = data)
  }

}
