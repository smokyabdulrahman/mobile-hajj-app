import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;

  barChart: any;
  doughnutChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: ["11/8", "11/9", "11/10", "11/11", "11/12", "11/13"],
        datasets: [{
          label: 'Your # of Working Hours',
          data: [4, 6, 5, 6.4, 3, 3],
          backgroundColor: 'rgb(81,192,170, 0.3)'
        }, {
          label: 'Avg # of Working Hours',
          data: [5, 2.8, 4.7, 9, 2.5, 5],
          backgroundColor: 'rgb(220,226,228, 0.3)'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            backgroundColor: ["rgb(81,192,170)", "rgb(220,226,228, 0)"],
            data: [8000, 2000]
          }
        ]
      }
    });

  }

}
