import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MaintanancePage } from '../maintanance/maintanance';
import { StandbyPage } from '../standby/standby';

@Component({
  selector: 'page-ewh-loader-evaluation',
  templateUrl: 'ewh-loader-evaluation.html'
})
export class EWHLoaderEvaluationPage {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EWHLoaderEvaluationPage');
  }

  ionViewWillEnter() {
  	this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
  	this.tabBarElement.style.display = 'flex';
  }

  openMaintanance() {
    this.navCtrl.push(MaintanancePage);
  }

  openStandby() {
    this.navCtrl.push(StandbyPage);
  }

}
