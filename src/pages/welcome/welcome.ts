import { AuthProvider } from './../../providers/auth/auth';
import { SigninPage } from './../signin/signin';
import { SignupPage } from './../signup/signup';
import { CarwashlistDetailsPage } from './../carwashlist-details/carwashlist-details';
import { CarwashProvider } from './../../providers/carwash/carwash';
import { HomePage } from './../home/home';
<<<<<<< HEAD
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Item, Toast } from 'ionic-angular';
=======
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
>>>>>>> 116ca60e7317f2463675512c7513a57c59077023
import firebase , { User }from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { WeekDay } from '@angular/common';




@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
//declaring list variables
  public carwashList: Array<any>;

  public carWashListRef: firebase.database.Reference;
  id:any;
  database:any;
  constructor(public navCtrl: NavController,private carPro:CarwashProvider,
<<<<<<< HEAD
     public navParams: NavParams) {

      
=======
     public navParams: NavParams,public authProvider: AuthProvider,public alertCtrl:AlertController) {
>>>>>>> 116ca60e7317f2463675512c7513a57c59077023
  
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
Signup(){
  this.navCtrl.push(SignupPage);
}
// remove(removeId){

<<<<<<< HEAD
//   this.carWashDeleteRef=firebase.database().ref(`/carwashlists`+ this.id);
//  this.deleteRecord(removeId);
// }
//  deleteRecord(deleteId):Promise<any>{
//   return this.carWashDeleteRef.remove(deleteId);

//  }
 
=======
}

deleteInformation(carwashId){
  const alert:Alert=this.alertCtrl.create({
    
    message:"are you sure you want to delete Record?",
 buttons:[{
   text:'cancel',
 },{
   text:'ok',
   handler:(data) =>{
    firebase.database().ref(`/carwashlists/`+carwashId).remove();

     }
 }]
})
alert.present()
 }
     

>>>>>>> 116ca60e7317f2463675512c7513a57c59077023
}