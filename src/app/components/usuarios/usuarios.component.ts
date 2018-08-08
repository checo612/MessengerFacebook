import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Key } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnChanges {
  filtro: string;
  getMensaje: any;
  lastMensaje: string;

  constructor(private route: ActivatedRoute, private usuariosService: UsuariosService) {}

  ngOnInit() {
  }

  ngOnChanges() {
  }

  public getUsuarios() {
    return this.usuariosService.getUsuarios();
  }


  public getLastMensaje(id) {
    this.getMensaje = this.usuariosService.getLastMensaje(id);
    if (this.getMensaje === 'undefined') {
      this.lastMensaje = 'Sin conversación';
      return this.lastMensaje;
    } else {
      return this.getMensaje.mensaje;
    }
  }
}
