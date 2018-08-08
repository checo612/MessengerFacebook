import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { DatabaseService } from '../../services/database.service';
import { Mensajes } from '../../Modelos/mensajes';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-chat-mensajes',
  templateUrl: './chat-mensajes.component.html',
  styleUrls: ['./chat-mensajes.component.css']
})
export class ChatMensajesComponent implements OnInit {
  public idUser: string;
  listaDeMensajes: any;
  myUser = this._mensaje.myUser;
  constructor(private route: ActivatedRoute, private _mensaje: MensajesService,
    private mensajesService: UsuariosService) { }
  ngOnInit() {
    this.getListaDeMensajes();
  }

  getListaDeMensajes() {
    this._mensaje.getAll().subscribe(mensajes => {
      this.listaDeMensajes = mensajes;
    });
  }
  getIdUser() {
    this.idUser = this.route.snapshot.paramMap.get('id');
    return this.idUser;
  }
}
