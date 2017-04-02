import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { ObRemovalPage } from '../ob-removal/ob-removal';
import { ObRemovalBySitePage } from '../ob-removal-by-site/ob-removal-by-site';

@Component({
  selector: 'page-test-page',
  templateUrl: 'test-page.html'
})
export class TestPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPagePage');
  }

}

@Component({
  template: `
  <ion-tabs tabsPlacement="top">
	  <ion-tab [root]="tab1" tabTitle="OB Removal"></ion-tab>
	  <ion-tab [root]="tab2" tabTitle="OBR By Site"></ion-tab>
  </ion-tabs>`
})
export class TabsIconPage {
	tab1: any = TestPagePage;
  	tab2: any = ObRemovalPage;

  constructor() {
   
  }
}
