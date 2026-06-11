import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {ProductsListService} from "./services/products-list.service";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { QuantityPipe } from './pipes/quantity-pipe';
import { CustomPhonePipe } from './pipes/custom-phone.pipe';
import { ButtonEffectDirective } from './directives/button-effect.directive';
import { TextReducerPipe } from './pipes/text-reducer.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvantageComponent,
    ProductComponent,
    QuantityPipe,
    CustomPhonePipe,
    ButtonEffectDirective,
    TextReducerPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductsListService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
