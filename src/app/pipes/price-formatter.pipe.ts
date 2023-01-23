import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatter'
})
export class PriceFormatterPipe implements PipeTransform {

  transform(value: string, userInput: number): unknown {
    return value +" " + userInput;
  }

}
