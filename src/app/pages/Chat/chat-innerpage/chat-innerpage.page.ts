import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-chat-innerpage',
  templateUrl: './chat-innerpage.page.html',
  styleUrls: ['./chat-innerpage.page.scss'],
})
export class ChatInnerpagePage implements OnInit {
  HeaderStr: string;
  constructor(private route: ActivatedRoute) {
    this.HeaderStr =  this.route.snapshot.paramMap.get('value');
   // this.value = navParams.get('data');
     console.log(this.HeaderStr);
  }

  ngOnInit() {
  }

}
