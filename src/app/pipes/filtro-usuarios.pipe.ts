import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuarios'
})
export class FiltroUsuariosPipe implements PipeTransform {
  fullName: string;
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
      args = args.toLowerCase();
    }
    return value.filter(x => {
      this.fullName = x.nombre + ' ' + x.apellido;
      return (x.nombre.toLowerCase()).startsWith(args) ||
      (x.apellido.toLowerCase()).startsWith(args) ||
      (this.fullName.toLowerCase()).startsWith(args) === true;
    });
  }

}
