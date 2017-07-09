import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {User} from "../../providers/user";

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class Login {

  private admin:{
    username: string,
    password: string
  };

  private statusMessage: string = null;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public user: User,) {

  }

  private doSignin(): void {
      let isValidUser = this.user.validLogin(this.admin);
      if(isValidUser){
        this.statusMessage = 'Login Successful';
      } else
        this.statusMessage = 'Invalid credentials';
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.statusMessage,
      buttons: ['OK']
    });
    alert.present();
  }

}
