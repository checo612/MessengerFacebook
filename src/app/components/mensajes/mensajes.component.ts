import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Mensajes } from '../../Modelos/mensajes';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  id_reseptor: string;
  mensaje: string;
  public mensajeObject: Mensajes = new Mensajes();
  constructor(private route: ActivatedRoute,  private _mensaje: MensajesService) { }
  ngOnInit() {
  }
  private formMensaje() {
    this.id_reseptor = this.route.snapshot.paramMap.get('id');
    this.mensajeObject.id_emisor = this._mensaje.myUser;
    this.mensajeObject.id_receptor = this.id_reseptor;
    this.mensajeObject.mensaje = this.mensaje;
    return this.mensajeObject;
  }
  public sendMensaje() {
    if (!this.mensaje || /^\s*$/.test(this.mensaje)) {
      return false;
    } else {
      this._mensaje.addnew(this.formMensaje());
      this.mensaje = '';
    }
  }
}
