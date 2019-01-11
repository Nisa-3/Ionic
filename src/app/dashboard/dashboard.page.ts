import { Component, OnInit } from '@angular/core';
import { NavController  } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  Chat() {
    this.navController.navigateForward('/chat-dashboard');
  }
  GridHome() {
    this.navController.navigateForward('/grid-home');
  }
  ShowPhotoGallery() {
    this.navController.navigateForward('/photogallery');
  }
}
