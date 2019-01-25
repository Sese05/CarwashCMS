import { HomePage } from './../home/home';
import { CarwashProvider } from './../../providers/carwash/carwash';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import {FormControl} from '@angular/forms';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Geolocation} from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';

@IonicPage()
@Component({
  selector: 'page-carwash-list',
  templateUrl: 'carwash-list.html',
})
export class CarwashListPage {
  que:string='main'


  form: FormGroup;
  Cards:string='';
  carwashName:string='';
  location:string='';
  openHours:string='';
    closinghours:string='';
    satrdayHrsOpen:string='';
    satrdayHrsclose:string='';
    sundayHrsOpen:string='';
    sundayHrsClose:string='';
  

  userForm:FormGroup;
  lat:any;
  lng:any;

   constructor(public navCtrl: NavController,private carwashPro:CarwashProvider,
    public formBuilder: FormBuilder,public alertCtrl:AlertController,private geo:Geolocation,public geofence: Geofence) {
      

      geofence.initialize().then(
        () => console.log('Geofence Plugin Ready'),
        (err) => console.log(err)
      )

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CarwashListPage');
  }

locate(){
  this.geo.getCurrentPosition().then(pos=>{
    this.lat= pos.coords.latitude;
    this.lng = pos.coords.longitude;
  }).catch(err =>console.log(err));

  let alert = this.alertCtrl.create({
    title: 'Thank You!',
    subTitle: 'Your current coordinates have been captured!',
    buttons: ['OK']
  });
  alert.present();
  
}

private addGeofence() {

  let fence = {
    id: 'Data Watch', 
    latitude:      -26.024479, 
    longitude:      28.1865748,
    radius:         100, 
    transitionType: 5,
    notification: { 
        id:             1, 
        title:          'You crossed a fence', 
        text:           'You just arrived to the carwash.', 
        openAppOnClick: true 
    }
  }

  this.geofence.addOrUpdate(fence).then(
     () => console.log('Geofence added'),
     (err) => console.log('Geofence failed to add')
   );
   

}
   //slide 1 main details
  createMainDetails(
    //slide1
    carwashName:string,
       lat:string,
      lng:string,
    openHours:string,
    closinghours:string,
    satrdayHrsOpen:string,
    satrdayHrsclose:string,
    sundayHrsOpen:string,
    sundayHrsClose:string,

  ): void {
  
    this.carwashPro
      .createCarwashDetails(
        //slide1
        carwashName,
        lat,
        lng,
        openHours,
        closinghours,
         satrdayHrsOpen,
        satrdayHrsclose,
        sundayHrsOpen,
        sundayHrsClose,
  )
      .then(newCarwashDetails => {
          //goes back to welcome page
          this.navCtrl.push(HomePage);
      });
  }
}

