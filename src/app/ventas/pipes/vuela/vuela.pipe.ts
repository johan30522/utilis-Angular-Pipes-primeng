import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(vuela: string, ...args: unknown[]): string {
    return vuela?'Si vuela':'No vuela';
  }

}
