import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ObRemovalPage } from '../ob-removal/ob-removal';
import { ObRemovalBySitePage } from '../ob-removal-by-site/ob-removal-by-site';
import { CoalPTRPage } from '../coal-ptr/coal-ptr';
import { CoalRTPPage } from '../coal-rtp/coal-rtp';

@Component({
  templateUrl: 'tabs-menu.html'
})
export class TabsMenuPage {

  OBRRoot: any = ObRemovalPage;
  OBRBSRoot: any = ObRemovalBySitePage;
  CPTRRoot: any = CoalPTRPage;
  CRTPRoot: any = CoalRTPPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
