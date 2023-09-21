import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService : HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallClipRotatePulse);
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.put({
    //   controller: "products"
    // },{
    //   id: "014362fb-a9f4-414a-8fe5-5ae1692b075b",
    //   price: "50000"
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // },
    // "ccfe34a2-52ce-4d26-9413-ff6823e5d3bb").subscribe();

    this.httpClientService.get(
      {
        baseUrl: "https://jsonplaceholder.typicode.com",
        controller: "posts"
      }).subscribe(data=> console.log(data));
  }
}