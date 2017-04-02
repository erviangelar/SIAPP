import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { ProductionDefinitionPage } from '../production-definition/production-definition';
import { ProAchieveByPitPage } from '../pro-achieve-by-pit/pro-achieve-by-pit';
import { GapBridgeLPAPage } from '../gap-bridge-lpa/gap-bridge-lpa';
import { EWHTrailerByPitPage } from '../ewh-trailer-by-pit/ewh-trailer-by-pit';
import { ProductivityEvaluationPage } from '../productivity-evaluation/productivity-evaluation';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-coal-rtp',
  templateUrl: 'coal-rtp.html'
})
export class CoalRTPPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {}

  items = [
  	{ root: ProductionDefinitionPage, title: 'Production Definition' },
  	{ root: ProAchieveByPitPage, title: 'Production Achievement By Pit' },
   	{ root: GapBridgeLPAPage, title: 'Gap Bridge LPA' },
   	{ root: EWHTrailerByPitPage, title: 'EWH Trailer By Pit' },
   	{ root: ProductivityEvaluationPage, title: 'Productivity Evaluation' }
  ]
  
  openPD() {
    //this.navCtrl.push(ProductionDefinitionPage);
    this.app.getRootNav().push(ProductionDefinitionPage);
  }

  openPABPi() {
    //this.navCtrl.push(ProAchieveByPitPage);
    this.app.getRootNav().push(ProAchieveByPitPage);
  }

  openGBL() {
    //this.navCtrl.push(GapBridgeLPAPage);
    this.app.getRootNav().push(GapBridgeLPAPage);
  }

  openETBP() {
    //this.navCtrl.push(EWHLoaderEvaluationPage);
    this.app.getRootNav().push(EWHTrailerByPitPage);
  }

  openPE() {
    //this.navCtrl.push(ProductivityEvaluationPage);
    this.app.getRootNav().push(ProductivityEvaluationPage);
  }

  logOut() {
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().push(LoginPage);
  }

}
