import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductCardType} from "../../types/product-card.type";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()
  get product(): ProductCardType {
    return this._product;
  }

  set product(param: ProductCardType) {
    //param.title = param.title.toUpperCase();
    this._product = param;
  }

  private _product: ProductCardType;

  @Output() addToCartEvent: EventEmitter<ProductCardType> = new EventEmitter<ProductCardType>()

  constructor() {
    this._product = {
      image: "",
      title: "",
      qty: 0,
      price: 0
    }
  }



  orderProduct(product: ProductCardType): void {
    this.addToCartEvent.emit(product);

  }


}
