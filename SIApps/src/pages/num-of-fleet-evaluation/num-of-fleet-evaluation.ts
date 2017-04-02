import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NumOfFleetEvaluation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-num-of-fleet-evaluation',
  templateUrl: 'num-of-fleet-evaluation.html'
})
export class NumOfFleetEvaluationPage {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumOfFleetEvaluationPage');
  }

  ionViewWillEnter() {
  	this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
  	this.tabBarElement.style.display = 'flex';
  }

}
