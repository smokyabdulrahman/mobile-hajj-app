import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { HttpClient } from '@angular/common/http';

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
  loading: boolean = false;

  isLeader: boolean = false;
  announcements = [];
  requests = [];
  data: any = [
    {
      img: 'https://www.kau.edu.sa/Files/0016617/Galleries/6608/51617_P1016195%20copy.jpg',
      name: 'Admin',
      msg: 'Your help is needed here (active)',
      lat: this.lat,
      lng: this.lng,
      type: 0,
      active: true
    },
    {
      img: 'https://www.kau.edu.sa/Files/0016617/Galleries/6608/51617_P1016195%20copy.jpg',
      name: 'Admin',
      msg: 'Your help is needed here (active)',
      lat: this.lat,
      lng: this.lng,
      type: 1,
      active: true
    },
    {
      img: 'https://www.kau.edu.sa/Files/0016617/Galleries/6608/51617_P1016195%20copy.jpg',
      name: 'Admin',
      msg: 'Your help is needed here (active)',
      lat: this.lat,
      lng: this.lng,
      type: 0,
      active: false
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private launchNavigator: LaunchNavigator, 
    private modalCtrl: ModalController, private httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.httpClient.get('http://10.1.1.132:3000/announcement')
    .subscribe(data => {
      this.announcements = [];
      this.announcements.push(data);
      console.log(data);
    }, err => {

    });
  }

  navigate(lat: number, lng: number) {
    this.launchNavigator.navigate([lat, lng]);
  }

  doRefresh(refresher) {
    this.getRequests(() =>  refresher.complete());
  }

  getRequests(cb) {
    this.httpClient.get<any[]>('http://10.1.1.132:3000/request')
    .subscribe(data => {
      this.requests = [];
      this.requests.push(...data);
      this.requests.reverse();
      console.log("req",this.requests);
      cb();
    }, err => {
      cb();
    });
  }

  push(page: string) {
    this.navCtrl.push(page);
  }

  setOnline() {
    this.loading = true;
    setTimeout(_ => {
      this.loading = false;
    }, 700);
  }

  openAnnouncModal() {
    this.modalCtrl.create('AnnouncementFormPage').present();
  }

}
