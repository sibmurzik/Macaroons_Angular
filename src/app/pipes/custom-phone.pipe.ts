import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPhone'
})
export class CustomPhonePipe implements PipeTransform {

  transform(value: string): string {
     const phone = value.split(' ').join('');
     if(phone.length === 12) {
       return '+' + phone.slice(0,3)
         +' ('+phone.slice(3,5)+') '
         +phone.slice(5,8) + '-'
         +phone.slice(8,10) + '-'
         +phone.slice(10,12) ;
     }
     return phone
  }

}
