import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MaintanancePage } from '../maintanance/maintanance';

@Component({
  selector: 'page-standby',
  templateUrl: 'standby.html'
})
export class StandbyPage {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandbyPage');
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

}
