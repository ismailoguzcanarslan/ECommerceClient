import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AddProduct } from 'src/app/contracts/product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent {

  /**
   *
   */
  constructor(spinner: NgxSpinnerService, private productService: ProductService,
    private alertify: AlertifyService) {
    super(spinner);
  } 

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement){
    this.showSpinner(SpinnerType.BallClipRotatePulse);
    const createProduct: AddProduct = new AddProduct();
    createProduct.name = name.value;
    createProduct.stock = parseInt(stock.value)
    createProduct.price = parseFloat(price.value)
    this.productService.create(createProduct, () => { 
      this.hideSpinner(SpinnerType.BallClipRotatePulse);
      this.alertify.message("Product Added!", {dismissOthers: true, messageType: MessageType.Success, position: Position.TopRight});
    });
  }
}
