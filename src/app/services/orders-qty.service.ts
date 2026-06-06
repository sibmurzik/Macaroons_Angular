import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersQtyService {
  count: number = 0;
  totalPrice: number = 0;

  constructor() { }
}
