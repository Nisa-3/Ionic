import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
// import { NavController, NavParams } from '@ionic/angular';
import { ServiceService } from 'src/app/_services/service.service';

@Component({
  selector: 'app-chat-innerpage',
  templateUrl: './chat-innerpage.page.html',
  styleUrls: ['./chat-innerpage.page.scss'],
})
export class ChatInnerpagePage implements OnInit {
  public date;
  public ConvertToJSONArray: any =  [];
  public ParseJSONArray: any = [];
  HeaderStr: string;
  model: any = {};
  ChatData: Array <{  id: number, Name: string, message: string, time: string }> = [];
  constructor(private route: ActivatedRoute, public datepipe: DatePipe, public serviceService: ServiceService) {
    this.HeaderStr =  this.route.snapshot.paramMap.get('value');
   // this.value = navParams.get('data');
     console.log(this.HeaderStr);
  }

  ngOnInit() {
  }
  send() {
    this.date = new Date();
    const latest_date = this.datepipe.transform(this.date, 'hh:mm');
    this.ChatData.push({ 'id' : 6 , 'Name': 'Nimisha', 'message' : this.model.InputText, 'time' : latest_date });
    this.ConvertToJSONArray = JSON.stringify(this.ChatData);
    this.ParseJSONArray = JSON.parse(this.ConvertToJSONArray);
    this.model.InputText = '';
    }
}
