import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
numbers;
  constructor() {
    this.numbers = Array(50).fill(0).map((x, i) => i);
  }

  ngOnInit() {
  }

}
