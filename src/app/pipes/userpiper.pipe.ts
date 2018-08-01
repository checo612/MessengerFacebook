import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpiper'
})
export class UserpiperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/\s/g, '.').toLowerCase();
  }

}
