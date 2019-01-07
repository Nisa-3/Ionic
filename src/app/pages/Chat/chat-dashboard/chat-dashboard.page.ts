import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ChatJson } from './ChatJson';
// import { NavController } from '@ionic/angular';
 import { NavController  } from '@ionic/angular';
 // import { ChatInnerpagePage } from './../';
// import { ChatInnerpagePage  } from './../chat-innerpage/chat-innerpage.page';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.page.html',
  styleUrls: ['./chat-dashboard.page.scss'],
})
export class ChatDashboardPage implements OnInit {
  itemsPrivate: any[] = ChatJson[0].Private;
  itemsGroup: any[] = ChatJson[0].Group;
  isActiveP = true;
  isActiveG = true;
  private = true;
  group = false;
  @ViewChild('myNav') nav: NavController;
  constructor(private http: HttpClient, private navCtrl: NavController) { }

  ngOnInit() {

  }
    PrivateClick() {
    this.group = false;
    this.private = !this.private;
  }
  GroupClick() {
    this.private = false;
    this.group = !this.group;
  }
  GoToInnerPage(value: any) {
    // console.log(value);
     // this.navCtrl.push(ChatInnerpagePage, {data: value});
    // this.navCtrl.navigateForward(innerpage,{ data: value } );
     this.navCtrl.navigateForward('/chat-innerpage');
  }

}
