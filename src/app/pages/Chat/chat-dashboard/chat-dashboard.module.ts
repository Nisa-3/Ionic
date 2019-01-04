import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { ChatDashboardPage } from './chat-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ChatDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatDashboardPage]
})
export class ChatDashboardPageModule {}
