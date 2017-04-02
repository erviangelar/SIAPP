import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-coal-rtp2',
  templateUrl: 'coal-rtp2.html'
})
export class CoalRTP2Page {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  	this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalRTP2Page');
  }

  ionViewWillEnter() {
  	this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
  	this.tabBarElement.style.display = 'flex';
  }
  /*
  category() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'CATEGORY',
      buttons: [
        {
          text: 'OB Removal',
          handler: () => {
            //this.navCtrl.push(ObRemovalPage);
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Coal Pit To ROM',
          handler: () => {
            console.log('Coal Pit To ROM');
          }
        },
        {
          text: 'Stripping Ratio',
          handler: () => {
            console.log('Coal Pit To ROM');
          }
        },
        {
          text: 'Coal ROM To Pit',
          handler: () => {
            this.navCtrl.push(CoalRTP2Page);
            console.log('Coal Pit To ROM');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

     actionSheet.present();
  }
  */
}
