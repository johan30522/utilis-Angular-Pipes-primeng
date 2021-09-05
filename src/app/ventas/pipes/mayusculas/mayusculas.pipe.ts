import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(valor: string, enMayuscula:boolean=false): string {
    console.log(`Es mayuscula en pipe: ${enMayuscula}`);
    // if(enMayuscula){
    //   return value.toLocaleUpperCase();
    // }else{
    //   return value.toLocaleLowerCase();
    // }
    return(enMayuscula)?
      valor.toLocaleUpperCase():
      valor.toLocaleLowerCase();
   
  }

}
