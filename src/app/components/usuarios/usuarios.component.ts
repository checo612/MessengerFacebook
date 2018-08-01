import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { IUser } from './user';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  numbers;
  status: boolean;
  color: string;


  constructor() {
    this.numbers = Array(50).fill(0).map((x, i) => i);
  }

  ngOnInit() {
  }


}
