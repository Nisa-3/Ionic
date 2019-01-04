import { Component } from '@angular/core';
// import { bootstrap } from "~bootstrap/dist/css/bootstrap.css";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  model: any = { };
  private LoginForm: FormGroup;
  // constructor( private formBuilder: FormBuilder ) {
  //   this.LoginForm = this.formBuilder.group({
  //     User: ['', Validators.required],
  //     pass: [''],
  //   });

 // }
 constructor( private navController: NavController) {
   }
 login() {
   // console.log(this.model.username);
if ( this.model.username === 'Admin' && this.model.password === 'Admin') {
this.navController.navigateForward('/dashboard');
} else if ( this.model.username === undefined && this.model.password === undefined) {
  alert('Caanot be empty');
} else {
  alert('Username and password didnot match.');
}
   }
}
