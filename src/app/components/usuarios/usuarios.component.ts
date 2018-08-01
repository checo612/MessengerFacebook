import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  Usuarios = [
  {Nombre: 'Salvador almaraz', Conversacion: 'sdfsdfsdfdfsdfsd'},
  {Nombre: 'Ricardo Hernandez', Conversacion: 'conversacion'},
  {Nombre: 'Sergio guzman', Conversacion: 'conversacion'},
  {Nombre: 'Alex Reyna', Conversacion: 'conversacion'},
  {Nombre: 'Laura almaraz', Conversacion: 'conversacion'},
  {Nombre: 'Paco almaraz', Conversacion: 'conversacion'},
  {Nombre: 'Sara almaraz', Conversacion: 'conversacion'}
  ];
  filtro: string;
  constructor() {
  }
  ngOnInit() {
  }
}
