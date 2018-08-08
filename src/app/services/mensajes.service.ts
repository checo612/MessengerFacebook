import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { map } from 'rxjs/operators';
import { Mensajes } from '../Modelos/mensajes';
const nombreLista = 'Mensajes';
@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  public myUser = '2';
  public listaContactos: AngularFireList<any>;
  constructor(private _firebase: AngularFireDatabase) {
    this.listaContactos = this._firebase.list(nombreLista);
  }
  getAll() {
    return this.listaContactos.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }))
      )
    );
  }
  addnew(mensaje: Mensajes) {
    return this.listaContactos.push(mensaje);
  }
}
