import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StandbyPage } from '../standby/standby';

@Component({
  selector: 'page-maintanance',
  templateUrl: 'maintanance.html'
})
export class MaintanancePage {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintanancePage');
  }

  ionViewWillEnter() {
  	this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
  	this.tabBarElement.style.display = 'flex';
  }

  openStandby() {
    this.navCtrl.push(StandbyPage);
  }

}
