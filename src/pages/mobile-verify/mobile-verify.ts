import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  ViewController
} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-mobile-verify',
  templateUrl: 'mobile-verify.html'
})
export class MobileVerifyPage {
  code: string;
  loading: boolean = false;
  error: string;
  focused: boolean;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
  ) {
  }

  verify(code: string) {
    console.log(code);
    
    this.loading = false;
    this.setRoot();
  }

  setRoot() {
    this.navCtrl.setRoot('MainPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
