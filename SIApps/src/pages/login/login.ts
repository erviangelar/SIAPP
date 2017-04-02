import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TabsMenuPage } from '../tabs-menu/tabs-menu';
import { ObRemovalPage } from '../ob-removal/ob-removal';
import { SideMenuPage } from '../side-menu/side-menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  openHome() {
  	this.navCtrl.setRoot(TabsMenuPage);
  }

  ionViewWillEnter() {
  	this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
  	this.tabBarElement.style.display = 'flex';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
