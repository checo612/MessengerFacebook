import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  Usuarios = [
    { Nombre: 'Salvador almaraz ', Conversacion: 'sdfsdfsdfdfsdfsd ' },
    { Nombre: 'Juan almaraz ', Conversacion: 'sdfsdfsdfdfsdfsd ' },
    { Nombre: 'Pedro almaraz ', Conversacion: 'sdfsdfsdfdfsdfsd ' },
    { Nombre: 'Luis almaraz ', Conversacion: 'sdfsdfsdfdfsdfsd ' },
    { Nombre: 'Laura almaraz ', Conversacion: 'sdfsdfsdfdfsdfsd ' },
    { Nombre: 'Paco almaraz ', Conversacion: 'sdfsdfsdfdfsdfsd ' },
    { Nombre: 'Sara almaraz ', Conversacion: 'sdfsdfsdfdfsdfsd ' }
  ];
  filtro: string;
  constructor() {
  }
  ngOnInit() {
  }
}
