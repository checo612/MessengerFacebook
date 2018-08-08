import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  lastReceptor: any[];
  lastEmisor: any[];
  private usuarios: any[] = [
    {id: 1, nombre: 'Salvador', apellido: 'almaraz'},
    {id: 2, nombre: 'Ricardo', apellido: 'Hernandez'},
    {id: 3, nombre: 'Sergio', apellido: 'guzman'},
    {id: 4, nombre: 'Alex', apellido: 'Reyna'},
    {id: 5, nombre: 'Laura', apellido: 'almaraz'},
    {id: 6, nombre: 'Paco', apellido: 'almaraz'},
    {id: 7, nombre: 'Sara', apellido: 'almaraz'}
  ];
  public mensajes: any[] = [
    {id_emisor: 1, id_receptor: 2, mensaje: 'Hola'},
    {id_emisor: 2, id_receptor: 1, mensaje: 'Hello'},
    {id_emisor: 1, id_receptor: 2, mensaje: 'Bye'},
    {id_emisor: 1, id_receptor: 2, mensaje: 'Good bye'},
    {id_emisor: 1, id_receptor: 4, mensaje: 'Last'}
  ];
  constructor() { }

  public getUsuarios(): any[] {
    return this.usuarios;
  }

  public getMensajes(): any[] {
    return this.mensajes;
  }

  public getLastMensaje(id: number) {
    this.lastReceptor = this.mensajes.filter(x => x.id_receptor === id || x.id_emisor === id);
    if (typeof this.lastReceptor[this.lastReceptor.length - 1] === 'undefined') {
      return 'undefined';
    } else {
      return this.lastReceptor[this.lastReceptor.length - 1];
    }
  }

  public postMensaje(mensaje: any) {
    this.mensajes.push(mensaje);
  }
}
