import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  online = false;
  conectado:string="Conectar";

  constructor() { }

  setOnline() {
    this.online = !this.online; 
    this.online ? this.conectado="Desconectar":this.conectado="Conectar";
  }
  ngOnInit() {
  }

}
