import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-mensajes',
  templateUrl: './chat-mensajes.component.html',
  styleUrls: ['./chat-mensajes.component.css']
})
export class ChatMensajesComponent implements OnInit {

  constructor() { }
  Mensajes = [
    { Id: '1', Mensajes: 'Hola' },
    { Id: '2', Mensajes: 'Hola' },
    { Id: '2', Mensajes: 'Que dice?' },
    { Id: '1', Mensajes: 'Nada' },
    { Id: '2', Mensajes: 'Jajaja' },
    { Id: '1', Mensajes: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing' },
    { Id: '1', Mensajes: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    { Id: '2', Mensajes: 'jsj' },
    { Id: '1', Mensajes: 'jaja' },
    { Id: '2', Mensajes: 'lkiwdiowe' },
    { Id: '2', Mensajes: 'lkiwdiowe' },
    { Id: '1', Mensajes: 'mensajea' },
    { Id: '1', Mensajes: 'asadsadfsadf' },
    { Id: '2', Mensajes: 'lkiwdiowe' },
    { Id: '1', Mensajes: 'mensajeasdasadssadfsadf' },
    { Id: '1', Mensajes: 'asadsadfsadf' },
    { Id: '2', Mensajes: 'lkiwdiowe' },
    { Id: '1', Mensajes: 'mensajeasdasadssadfsadf' },
    { Id: '1', Mensajes: 'asadsadfsadf' }];

  ngOnInit() {
  }

}
