import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { SumOfFleetAchievementPage } from '../sum-of-fleet-achievement/sum-of-fleet-achievement';
import { NumOfFleetEvaluationPage } from '../num-of-fleet-evaluation/num-of-fleet-evaluation';
import { EWHLoaderEvaluationPage } from '../ewh-loader-evaluation/ewh-loader-evaluation';
import { FleetProAchievementPage } from '../fleet-pro-achievement/fleet-pro-achievement';
import { ProductivityEvaluationPage } from '../productivity-evaluation/productivity-evaluation';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-ob-removal-by-site',
  templateUrl: 'ob-removal-by-site.html'
})
export class ObRemovalBySitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {}

  itemSelected(item: string) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObRemovalBySitePage');
  }

  openSOFA() {
    //this.navCtrl.push(SumOfFleetAchievementPage);
    this.app.getRootNav().push(SumOfFleetAchievementPage);
  }

  openNOFE() {
    //this.navCtrl.push(NumOfFleetEvaluationPage);
    this.app.getRootNav().push(NumOfFleetEvaluationPage);
  }

  openELE() {
    //this.navCtrl.push(EWHLoaderEvaluationPage);
    this.app.getRootNav().push(EWHLoaderEvaluationPage);
  }

  openFPA() {
    //this.navCtrl.push(FleetProAchievementPage);
    this.app.getRootNav().push(FleetProAchievementPage);
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
