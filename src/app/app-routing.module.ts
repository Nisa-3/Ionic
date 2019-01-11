import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'chat-dashboard', loadChildren: './pages/Chat/chat-dashboard/chat-dashboard.module#ChatDashboardPageModule' },
  { path: 'chat-innerpage', loadChildren: './pages/Chat/chat-innerpage/chat-innerpage.module#ChatInnerpagePageModule' },
  { path: 'grid-home', loadChildren: './grid-home/grid-home.module#GridHomePageModule' },
  { path: 'photogallery', loadChildren: './photogallery/photogallery.module#PhotogalleryPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
