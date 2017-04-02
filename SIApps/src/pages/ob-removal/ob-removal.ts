import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { ProductionDefinitionPage } from '../production-definition/production-definition';
import { ProAchieveByProcessPage } from '../pro-achieve-by-process/pro-achieve-by-process';
import { ProAchieveByPitPage } from '../pro-achieve-by-pit/pro-achieve-by-pit';
import { SumOfFleetAchievementPage } from '../sum-of-fleet-achievement/sum-of-fleet-achievement';
import { GapBridgeLPAPage } from '../gap-bridge-lpa/gap-bridge-lpa';
import { NumOfFleetEvaluationPage } from '../num-of-fleet-evaluation/num-of-fleet-evaluation';
import { EWHLoaderEvaluationPage } from '../ewh-loader-evaluation/ewh-loader-evaluation';
import { ProductivityEvaluationPage } from '../productivity-evaluation/productivity-evaluation';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-ob-removal',
  templateUrl: 'ob-removal.html'
})
export class ObRemovalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObRemovalPage');
  }

  openPD() {
    //this.navCtrl.push(ProductionDefinitionPage);
    this.app.getRootNav().push(ProductionDefinitionPage);
  }

  openPABPr() {
    //this.navCtrl.push(ProAchieveByProcessPage);
    this.app.getRootNav().push(ProAchieveByProcessPage);
  }

  openPABPi() {
    //this.navCtrl.push(ProAchieveByPitPage);
    this.app.getRootNav().push(ProAchieveByPitPage);
  }

  openSOFA() {
    //this.navCtrl.push(SumOfFleetAchievementPage);
    this.app.getRootNav().push(SumOfFleetAchievementPage);
  }

  openGBL() {
    //this.navCtrl.push(GapBridgeLPAPage);
    this.app.getRootNav().push(GapBridgeLPAPage);
  }

  openNOFE() {
    //this.navCtrl.push(NumOfFleetEvaluationPage);
    this.app.getRootNav().push(NumOfFleetEvaluationPage);
  }

  openELE() {
    //this.navCtrl.push(EWHLoaderEvaluationPage);
    this.app.getRootNav().push(EWHLoaderEvaluationPage);
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