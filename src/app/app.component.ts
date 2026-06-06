import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductCardType} from "./types/product-card.type";
import {OrderFormType} from "./types/order-form.type";
import {showPresent} from "./config/config-data";
import {ProductsListService} from "./services/products-list.service";
import {OrdersQtyService} from "./services/orders-qty.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  advantagesList: AdvantageType[] = [
    {
      number: 1,
      feature: "Лучшие продукты",
      description: "Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители."
    },
    {
      number: 2,
      feature: "Много вкусов",
      description: "Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок."
    },
    {
      number: 3,
      feature: "Бисквитное тесто",
      description: "Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!"
    },
    {
      number: 4,
      feature: "Честный продукт",
      description: " Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г."
    },


  ];

  productCards: ProductCardType[] = []


  constructor(private productList: ProductsListService ,
              public orders_qty: OrdersQtyService) {

  }

  ngOnInit(): void {
       this.productCards = this.productList.getProducts();
    }



  orderFormData: OrderFormType = {
    productName: "",
    customerName: "",
    customerPhone: "",

  }


  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({block: "center", behavior: "smooth"});
  }

  public orderProduct(product: ProductCardType, target: HTMLElement): void {
    this.scrollTo(target);
    this.orderFormData.productName = product.title.toUpperCase();

    this.orders_qty.count ++;
    this.orders_qty.totalPrice += product.price;
    window.alert(`${product.title} добавлен в корзину!`);

  }

  @ViewChild('productSelect') cakesView!: ElementRef;
  @ViewChild('orderForm') orderForm!: ElementRef;
  @ViewChild('about_us') aboutUs!: ElementRef;


  public eventScroll(destination: string): void {
    switch (destination) {
      case 'cakes':
        this.scrollTo(this.cakesView.nativeElement);
        break;
      case 'about_us':
        this.scrollTo(this.aboutUs.nativeElement);
        break;
      case 'create_order':
        this.scrollTo(this.orderForm.nativeElement);
    }


  }

  showPresent: boolean = showPresent;


}
