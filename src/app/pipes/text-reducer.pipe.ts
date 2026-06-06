import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReducer'
})
export class TextReducerPipe implements PipeTransform {

  transform(text: string, lettersQty: number ): string {
    if(text.length > lettersQty) {
      return text.slice(0, lettersQty) + "...";
    }
    return text;
  }

}
