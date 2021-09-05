import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertString'
})
export class ConvertStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'string convertido';
  }

}
