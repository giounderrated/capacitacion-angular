import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/products/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get("https://fakestoreapi.com/products");
  }

  // getOneProduct(id:any):Observable<Product>{
  //   const endpoint = "https://fakestoreapi.com/products/"+id;
  //   console.log(endpoint); 
  //   return this.http.get<Product>(endpoint);
  // }

  getOneProduct(id:any):any{
    const endpoint = "https://fakestoreapi.com/products/"+id;
    console.log(endpoint); 
    return this.http.get(endpoint);
  }

  createProduct(){
    
  }




}
