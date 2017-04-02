import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gap-bridge-lpa',
  templateUrl: 'gap-bridge-lpa.html'
})
export class GapBridgeLPAPage {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GapBridgeLPAPage');
  }

  ionViewWillEnter() {
  	this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
  	this.tabBarElement.style.display = 'flex';
  }

}
