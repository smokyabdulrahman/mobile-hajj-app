import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  phone: number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: HttpClient,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  pushPage(page: string){
    this.navCtrl.push(page);
  }

  login() {
    this.http.get('http://10.1.1.132:3000/volunteer/' + this.phone).subscribe( data => {
      this.pushPage('MobileVerifyPage');
    }, err => {
      this.alertCtrl.create({
        title: "an error accord, try again please"
      }).present();
    });
  }

}
