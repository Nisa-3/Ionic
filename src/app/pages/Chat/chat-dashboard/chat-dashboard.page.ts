import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ChatJson } from './ChatJson';
// import { NavController } from '@ionic/angular';
 import { NavController  } from '@ionic/angular';
 import { Router } from '@angular/router';
 import { ServiceService } from 'src/app/_services/service.service';

 // import { ChatInnerpagePage } from './../';
// import { ChatInnerpagePage  } from './../chat-innerpage/chat-innerpage.page';



@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.page.html',
  styleUrls: ['./chat-dashboard.page.scss'],
})
export class ChatDashboardPage implements OnInit {
  BaseUrl: any;
  itemsPrivate: any[] = ChatJson[0].Private;
  itemsGroup: any[] = ChatJson[0].Group;
  isActiveP = true;
  isActiveG = false;
  private = true;
  group = false;
  @ViewChild('myNav') nav: NavController;
  constructor(private http: HttpClient, private navCtrl: NavController, private  route: Router, public serviceService: ServiceService) { }

  ngOnInit() {
    console.log( ChatJson[0].Private);
    // console.log(this.itemsPrivate);
  }
    PrivateClick() {
      console.log('Active P' + this.isActiveP  );
      console.log('Active G' + this.isActiveG  );
      this.isActiveP = true;
      this.isActiveG = false;
      console.log('Active P1' + this.isActiveP  );
      console.log('Active G1' + this.isActiveG  );
    this.group = false;
    this.private = !this.private;
  }
  GroupClick() {
    this.isActiveG = true;
    this.isActiveP = false;
    this.private = false;
    this.group = !this.group;
    
  }
  GoToInnerPage(value) {
    // console.log(value);
     // this.navCtrl.push(ChatInnerpagePage, {data: value});
    // this.navCtrl.navigateForward(innerpage,{ data: value } );
    // this.BaseUrl = 'http://localhost:8100/';
    // const path = '/chat-innerpage/'  + value;
   // this.route.navigate([path]);
      this.serviceService.forwardURL = value;
     this.navCtrl.navigateForward('/chat-innerpage' );
  }

}
