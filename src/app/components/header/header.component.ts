import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
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

  @Output()
  scrollTarget: EventEmitter<string> = new EventEmitter<string>();

  public scrollToTarget(target: string): void {
    this.scrollTarget.emit(target);

  }


}
