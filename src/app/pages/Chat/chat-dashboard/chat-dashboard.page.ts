import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ChatJson } from './ChatJson';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.page.html',
  styleUrls: ['./chat-dashboard.page.scss'],
})
export class ChatDashboardPage implements OnInit {
  items: any[] = ChatJson[0].Private;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.items[0].Group[0].GName);
    // this.http.get('http://localhost:8100/assets/ChartJsonData.json').subscribe( Response => {
    // console.log(Response) ;
    // // this.items = Response;
    // });
  }

}
