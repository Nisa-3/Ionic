import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';
// import { ChatInnerpageComponent } from './pages/Chat/chat-innerpage/chat-innerpage.component';
import { DatePipe } from '@angular/common';
import {ServiceService} from '../app/_services/service.service';
import { Camera } from '@ionic-native/camera/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule , ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ServiceService,
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
