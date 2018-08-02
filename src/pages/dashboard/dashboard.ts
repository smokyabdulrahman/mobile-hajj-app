import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  online: boolean = true;
  lat: number = 21.416432;
  lng: number = 39.881296;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  navigate(lat: number, lng: number) {
    this.launchNavigator.navigate([lat, lng]);
  }

  push(page: string) {
    this.navCtrl.push(page);
  }

}
