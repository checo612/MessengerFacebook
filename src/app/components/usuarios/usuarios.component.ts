import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { DatabaseService } from '../../services/database.service';
import { Usuarios } from '../../Modelos/usuarios';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaDeUsuarios: any;
  filtro: string;
  getMensaje: any;
  lastMensaje: string;

  constructor(private route: ActivatedRoute, private usuariosService: UsuariosService, private database: DatabaseService) { }
  ngOnInit() {
    this.getListaDeUsuarios();
    console.log(this.listaDeUsuarios);
  }

  getListaDeUsuarios() {
    this.database.getAll().subscribe(usuario => {
      console.log(usuario);
      this.listaDeUsuarios = usuario;
    });
  }
  // public getLastMensaje(id) {
  //   this.getMensaje = this.usuariosService.getLastMensaje(id);
  //   if (this.getMensaje === 'undefined') {
  //     this.lastMensaje = 'Sin conversación';
  //     return this.lastMensaje;
  //   } else {
  //     return this.getMensaje.mensaje;
  //   }
  // }
}
