import {Component, Input} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage-component',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent {
  @Input()advantage:AdvantageType = {
    number: 0,
    feature: "",
    description: "",
  };

}
