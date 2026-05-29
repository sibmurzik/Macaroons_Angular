import { Component } from '@angular/core';
import {contactPhone, instagramLink} from "../../config/config-data";

@Component({
  selector: 'component-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactPhone: string = contactPhone;
  instagramLink:string = instagramLink;

}
