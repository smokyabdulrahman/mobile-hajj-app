import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  baseUrl: string = '10.1.1.132:3000/';
  constructor(public http: HttpClient, private alertCtrl: AlertController) {
    console.log('Hello HttpProvider Provider');
  }

  get(url) {
    this.http.get(this.baseUrl + url)
    .subscribe(data => {
      return Promise.resolve(data);
    }, err => {
      this.alertCtrl.create({
        title: 'an error happend, it might be caused by wrong data. try again.'
      }).present();
    });
  }

}
