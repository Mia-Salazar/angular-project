import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let arrayValue = value.toLowerCase().split(' ')
    let array:string[] = []

    for(let i = 0; i < arrayValue.length; i++){
      let sentence = arrayValue[i].charAt(0).toUpperCase() + arrayValue[i].slice(1)
      array.push(sentence)
    }

    let final = array.join(' ')
    return final;
  }

}
