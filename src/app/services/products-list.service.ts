import { Injectable } from '@angular/core';
import {ProductCardType} from "../types/product-card.type";

@Injectable()
export class ProductsListService {

  getProducts():ProductCardType[] {
    return [
      {
        image: "rasberry_cake.png",
        title: "Макарун с малиной",
        qty: 1,
        price: 1.70
      },
      {
        image: "mango_cake.png",
        title: "Макарун с манго",
        qty: 1,
        price: 1.70

      },
      {
        image: "vanila_cake.png",
        title: "Пирог с ванилью",
        qty: 1,
        price: 1.70
      },
      {
        image: "pistachios_cake.png",
        title: "Пирог с фисташками",
        qty: 1,
        price: 1.70
      },

    ];
  }


}
