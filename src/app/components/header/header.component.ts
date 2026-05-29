import { Component } from '@angular/core';
import {contactPhone} from "../../config/config-data";

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public contactPhone: string = contactPhone;

  public isMenuOpen: boolean = false;

  public openMenu(): void {
    this.isMenuOpen = true;
  };

  public closeMenu(): void {
    this.isMenuOpen = false;
  };

}
