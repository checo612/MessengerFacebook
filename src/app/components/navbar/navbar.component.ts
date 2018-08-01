import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  online = false;
  offline = true;
  constructor() { }

  setOnline() {
    this.online = true;
    this.offline = false;
  }

  setOffline() {
    this.online = false;
    this.offline = true;
  }

  ngOnInit() {
  }

}
