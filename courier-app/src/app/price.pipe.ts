import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}

