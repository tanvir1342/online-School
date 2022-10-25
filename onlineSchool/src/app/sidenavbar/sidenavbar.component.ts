import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  menuStatus:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  ToogleSideNavbar()
  {
    this.menuStatus =!this.menuStatus;
  }

}
