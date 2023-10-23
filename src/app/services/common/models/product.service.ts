import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { AddProduct } from 'src/app/contracts/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(product: AddProduct, successCallBack?: any){
  this.httpClientService.post({
    controller: "products"
  }, product).subscribe(result => {
    successCallBack();
  });
  }
}
