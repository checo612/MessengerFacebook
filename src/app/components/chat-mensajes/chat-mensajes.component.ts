import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-chat-mensajes',
  templateUrl: './chat-mensajes.component.html',
  styleUrls: ['./chat-mensajes.component.css']
})
export class ChatMensajesComponent implements OnInit {
  public idUser: string;
  constructor(private route: ActivatedRoute, private mensajesService: UsuariosService) { }

  ngOnInit() {
  }

  getIdUser() {
    this.idUser = this.route.snapshot.paramMap.get('id');
    return this.idUser;
  }

  public getMensajes() {
    return this.mensajesService.getMensajes();
  }

}
