import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public isCollapsed = false;
  public img: string="fas fa-angle-down mt-auto mb-auto float-right";
  colapso() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.img = "fas fa-angle-left mt-auto mb-auto float-right";
    }
    else {
      this.img = "fas fa-angle-down mt-auto mb-auto float-right";
    
    }
  }

}
