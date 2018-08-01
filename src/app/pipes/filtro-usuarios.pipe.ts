import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuarios'
})
export class FiltroUsuariosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } 
    else {
      args = args.toLowerCase();
    }
    return value.filter(x => { return (x.Nombre.toLowerCase()).startsWith(args) == true });
  }

}
