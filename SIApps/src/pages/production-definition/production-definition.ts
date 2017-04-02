import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ProductionDefinition page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-production-definition',
  templateUrl: 'production-definition.html'
})
export class ProductionDefinitionPage {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  // ionViewWillEnter() {
  // 	this.tabBarElement.style.display = 'none';
  // }

  // ionViewWillLeave() {
  // 	this.tabBarElement.style.display = 'flex';
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductionDefinitionPage');
  }


}
