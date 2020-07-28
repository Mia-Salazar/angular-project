import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordEncrypt'
})
export class PasswordEncryptPipe implements PipeTransform {

  transform(value: string, encrypt:boolean = false): string {
    if (encrypt){
      return '*'.repeat(value.length)
    } else return value
  }

}
