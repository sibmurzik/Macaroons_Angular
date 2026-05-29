import { Component } from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductCardType} from "./types/product-card.type";
import {OrderFormType} from "./types/order-form.type";
import {showPresent} from "./config/config-data";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  productCards : ProductCardType[] = [
    {
      image: "rasberry_cake.png",
      title: "Макарун с малиной",
      qty: "1 шт.",
      price:"1,70 руб."
    },
    {
      image: "mango_cake.png",
      title: "Макарун с манго",
      qty: "1 шт.",
      price:"1,70 руб."
    },
    {
      image: "vanila_cake.png",
      title: "Пирог с ванилью",
      qty: "1 шт.",
      price:"1,70 руб."
    },
    {
      image: "pistachios_cake.png",
      title: "Пирог с фисташками",
      qty: "1 шт.",
      price:"1,70 руб."
    },

  ];

  orderFormData:OrderFormType = {
    productName:"",
    customerName:  "",
    customerPhone: "",

  }



  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({block: "center", behavior: "smooth"});
  }

  public orderProduct(product:ProductCardType, target: HTMLElement): void {
    this.scrollTo(target);
    this.orderFormData.productName = product.title.toUpperCase();

  }

  showPresent: boolean = showPresent;









}
