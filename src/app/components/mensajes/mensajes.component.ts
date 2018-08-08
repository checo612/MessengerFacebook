import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  id_emisor: string;
  mensaje: string;
  mensajeObject: any;
  constructor(private route: ActivatedRoute, private mensajesService: UsuariosService) { }

  ngOnInit() {
  }

  private formMensaje() {
    this.id_emisor = this.route.snapshot.paramMap.get('id');
    this.mensajeObject = { id_emisor: 10, id_receptor: this.id_emisor, mensaje: this.mensaje };
    return this.mensajeObject;
  }

  public sendMensaje() {
    if (!this.mensaje || /^\s*$/.test(this.mensaje)) {
      return false;
    } else {
    this.mensajesService.postMensaje(this.formMensaje());
    this.mensaje = '';
    }
  }

}
