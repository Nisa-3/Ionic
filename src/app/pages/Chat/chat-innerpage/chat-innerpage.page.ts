import { Component, OnInit } from '@angular/core';
// import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-chat-innerpage',
  templateUrl: './chat-innerpage.page.html',
  styleUrls: ['./chat-innerpage.page.scss'],
})
export class ChatInnerpagePage implements OnInit {
  value: string;
  constructor() {
   // this.value = navParams.get('data');
    // console.log(this.value);
  }

  ngOnInit() {
  }

}
