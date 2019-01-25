import { CarwashProvider } from './../../providers/carwash/carwash';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarwashlistDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carwashlist-details',
  templateUrl: 'carwashlist-details.html',
})
export class CarwashlistDetailsPage {

  public currentCarwash: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,private carPro:CarwashProvider) {
  }

  ionViewCanEnter() {
    this.carPro
    .getcarwashDetail(this.navParams.get("carwashId"))
    .on("value", carwashSnapshot => {
      this.currentCarwash = carwashSnapshot.val();
      this.currentCarwash.id = carwashSnapshot.key;
    });
    
      
    console.log('ionViewDidLoad CarwashListDetailsPage',this.currentCarwash);
  }
 

}
