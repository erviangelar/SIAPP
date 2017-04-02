import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GapBridgeLPAPage } from '../gap-bridge-lpa/gap-bridge-lpa';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  todayRoot: any = GapBridgeLPAPage;
  mtdRoot: any = GapBridgeLPAPage;
  ytdRoot: any = GapBridgeLPAPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  openToday() {
  	this.navCtrl.setRoot(GapBridgeLPAPage);
  }
}
