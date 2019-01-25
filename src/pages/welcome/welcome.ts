import { CarwashlistDetailsPage } from './../carwashlist-details/carwashlist-details';
import { CarwashProvider } from './../../providers/carwash/carwash';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase , { User }from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
//declaring list variables
  public carwashList: Array<any>;



  constructor(public navCtrl: NavController,private carPro:CarwashProvider,
     public navParams: NavParams) {
  
    }

  ionViewCanEnter(){
 
   
 
   // Now we need to get that list of carwashes from Firebase
    this.carPro.getcarwashList().on("value", carwashListSnapshot => {
      this.carwashList= [];
      carwashListSnapshot.forEach(snap => {
        this.carwashList.push({
       
          id: snap.key,
          carwashName: snap.val().carwashName,
          carwashLatitude: snap.val().carwashLatitude,
          carwashLongatude: snap.val().carwashLongatude,
          weekdayOpen: snap.val().weekdayOpen,
          weekdayClose: snap.val().weekdayClose,
          saturdayOpen: snap.val().saturdayOpen,
          saturdayClose:snap.val().saturdayClose,
          sundayOpen:snap.val().sundayOpen,
          sundayClose:snap.val().sundayClose,
  
          //slide 2
      
     
   });
        //return false;     
      });
    });
  console.log('carwashList',this.carwashList);
  }

  goToCreate(): void {
    this.navCtrl.push(HomePage);
  }
  
  
  // function to send users to the event detail
goToCarwashDetail(carwashId: string):void {
 
 
   this.navCtrl.push(CarwashlistDetailsPage, {carwashId:carwashId});
}
map(){
  this.navCtrl.push(HomePage);
}
}