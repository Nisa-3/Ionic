import { Component, OnInit } from '@angular/core';
 import { Griddata } from './Griddata';

@Component({
  selector: 'app-grid-home',
  templateUrl: './grid-home.page.html',
  styleUrls: ['./grid-home.page.scss'],
})
export class GridHomePage implements OnInit {

  arrayModule = Griddata[0].ModuleRelated;
  arrayUser = Griddata[0].UserRelated;
  constructor() { }

  ngOnInit() {
    console.log(Griddata[0].ModuleRelated);
  }

}
