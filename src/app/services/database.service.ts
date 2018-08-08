import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
const userList = 'Usuarios';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public listaContactos: AngularFireList<any>;
  constructor(private _firebase: AngularFireDatabase) {
    this.listaContactos = this._firebase.list(userList);
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
}




