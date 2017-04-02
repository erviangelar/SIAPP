import { NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
//import { StatusBar, Splashscreen } from 'ionic-native';

import { ObRemovalPage } from '../ob-removal/ob-removal';
import { ObRemovalBySitePage } from '../ob-removal-by-site/ob-removal-by-site';
import { CoalPTRPage } from '../coal-ptr/coal-ptr';
import { CoalRTPPage } from '../coal-rtp/coal-rtp';

@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ObRemovalPage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  	this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ob Removal', component: ObRemovalPage },
      { title: 'Ob Removal By Site', component: ObRemovalBySitePage },
      { title: 'Coal Pit To ROM', component: CoalPTRPage },
      { title: 'Coal ROM To Pit', component: CoalRTPPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      //Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openTest() {
    this.nav.setRoot(CoalPTRPage);
  }

}
