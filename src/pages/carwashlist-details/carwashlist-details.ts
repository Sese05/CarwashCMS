import { SigninPage } from './../signin/signin';
import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { CarwashProvider } from './../../providers/carwash/carwash';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController ,Alert} from 'ionic-angular';
import firebase , { User }from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



@IonicPage()
@Component({
  selector: 'page-carwashlist-details',
  templateUrl: 'carwashlist-details.html',
})
export class CarwashlistDetailsPage {

  public currentCarwash: any = {};
  id:any;
  carWashupdateRef:firebase.database.Reference;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private carPro:CarwashProvider,private alertCtrl:AlertController) {
    //get key

      this.id=this.navParams.get('carwashId')
       console.log('getID',this.id)
   
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
  //alert for carwash names
  updateCarwashName(){
    const alert:Alert=this.alertCtrl.create({
     message:"update carwash name?",
     inputs:[{
       name:'carwashName',
       placeholder:'carwash name',
       value:'carwashName'
  }],
  buttons:[{
    text:'cancel',
  },{
    text:'save',
    handler:data =>{
       this.updateCarName(data.carwashName)
       console.log(data.carwashName)
      }
  }]
 })
 alert.present()
  }


  //update carwash name
  updateCarName(name:string){
    this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
    this.updateInfoCarName(name);
  }
  updateInfoCarName(carwashName:string):Promise<any>{
    return this.carWashupdateRef.update({ carwashName });
}

 //alert for weekday open
 updateWeekdayOpen(){
  const alert:Alert=this.alertCtrl.create({
   message:"update opening weekday time?",
   inputs:[
    {
    name:'weekdayOpen',
    type: 'radio',
    label: '08:00',
    value:'08:00'
    
},{
 name:'weekdayOpen',
 type: 'radio',
 label: '09:00',
 value:'09:00'

},{
 name:'weekdayOpen',
 type: 'radio',
 label: '10:00',
 value:'10:00'
},{
 name:'weekdayOpen',
 type: 'radio',
 label: '11:00',
 value:'11:00'
}
],
buttons:[{
 text:'cancel',
},{
 text:'save',
 handler:data =>{
   this.updateWeekOpen(data)
   console.log(data)
   }
}]
})
alert.present()
}

//update  for weekday open
updateWeekOpen(weekOpen:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfoWeekOpen(weekOpen);
}
updateInfoWeekOpen(weekdayOpen:string):Promise<any>{
  return this.carWashupdateRef.update({ weekdayOpen});
}

 //alert for weekday close
 updateweekdayClose(){
  const alert:Alert=this.alertCtrl.create({
   message:"update closing weekday time?",
   inputs:[
     {
     name:'weekdayClose',
     type: 'radio',
     label: '18:00pm',
     value:'18:00'
     
},{
  name:'weekdayClose',
  type: 'radio',
  label: '19:00pm',
  value:'19:00'
 
},{
  name:'weekdayClose',
  type: 'radio',
  label: '20:00pm',
  value:'20:00'
},{
  name:'weekdayClose',
  type: 'radio',
  label: '21:00pm',
  value:'21:00'
}
],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
    this.updateWeekClose(data)
    console.log(data)
    }
}]
})
alert.present()
}

//update  for weekday close
updateWeekClose(weekClose:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfoWeekClose(weekClose);
}
updateInfoWeekClose(weekdayClose:string):Promise<any>{
  return this.carWashupdateRef.update({ weekdayClose});
}

 //alert for saturday open
 updatesaturdayOpen(){
  const alert:Alert=this.alertCtrl.create({
   message:"update saturday open time?",
   inputs:[
     {
     name:'saturdayOpen',
     type: 'radio',
     label: '8:00am',
     value:'08:00'
},{
  name:'saturdayOpen',
  type: 'radio',
  label: '9:00am',
  value:'09:00'
},{
  name:'saturdayOpen',
  type: 'radio',
  label: '10:00am',
  value:'10:00'
},{
  name:'saturdayOpen',
  type: 'radio',
  label: '11:00am',
  value:'11:00'
}
],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
     this.updateSaturdayOpen(data)
     console.log(data)
    }
}]
})
alert.present()
}
//update  for SaturdayOpen
updateSaturdayOpen(saturdayOpen:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfosaturdayOpen(saturdayOpen);
}
updateInfosaturdayOpen(saturdayOpen:string):Promise<any>{
  return this.carWashupdateRef.update({ saturdayOpen});
}

 //alert for saturdayClose
 updatesaturdayClose(){
  const alert:Alert=this.alertCtrl.create({
   message:"update saturday closing time?",
   inputs:[
     {
     name:'saturdayClose',
     type: 'radio',
     label: '18:00pm',
     value:'18:00'
},{
  name:'saturdayClose',
  type: 'radio',
  label: '19:00pm',
  value:'19:00'
},{
  name:'saturdayClose',
  type: 'radio',
  label: '20:00pm',
  value:'20:00'
},{
  name:'saturdayClose',
  type: 'radio',
  label: '21:00pm',
  value:'21:00'
}
],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
     this.updateSaturdayClose(data)
     console.log(data)
    }
}]
})
alert.present()
}
//update  for saturday close
updateSaturdayClose(satClose:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfoSaturdayClose(satClose);
}
updateInfoSaturdayClose(saturdayClose:string):Promise<any>{
  return this.carWashupdateRef.update({ saturdayClose});
}

 //alert for sunday open
 updatesundayOpen(){
  const alert:Alert=this.alertCtrl.create({
   message:"update sunday open time?",
   inputs:[
     {
     name:'sundayOpen',
     type: 'radio',
     label: '8:00am',
     value:'8:00'
},{
  name:'sundayOpen',
  type: 'radio',
  label: '9:00am',
  value:'9:00'
},{
  name:'sundayOpen',
  type: 'radio',
  label: '10:00am',
  value:'10:00'
},{
  name:'sundayOpen',
  type: 'radio',
  label: '11:00am',
  value:'11:00'
}
],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
     this.updateSundayOpen(data)
     console.log(data)
    }
}]
})
alert.present()
}
//update  for sunday open
updateSundayOpen(SunOpen:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfosundayOpen(SunOpen);
}
updateInfosundayOpen(sundayOpen:string):Promise<any>{
  return this.carWashupdateRef.update({sundayOpen});
}

 //alert for sundayClose
 updatesundayClose(){
  const alert:Alert=this.alertCtrl.create({
   message:"update sunday closing  time?",
   inputs:[
     {
     name:'sundayClose',
     type: 'radio',
     label: '18:00pm',
     value:'18:00'
},{
  name:'sundayClose',
  type: 'radio',
  label: '19:00pm',
  value:'19:00'
},{
  name:'sundayClose',
  type: 'radio',
  label: '20:00pm',
  value:'20:00'
},{
  name:'sundayClose',
  type: 'radio',
  label: '21:00pm',
  value:'21:00'
}
],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
     this.updateWeekClose(data)
     console.log(data)
    }
}]
})
alert.present()
}
//update  for SundayClose
updateSundayClose(sunClose:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfoSundayClose(sunClose);
}
updateInfoSundayClose(sundayClose:string):Promise<any>{
  return this.carWashupdateRef.update({ sundayClose});
}
  //category 2
 //alert for carwash names
 updateentertainmentAvailable(){
  const alert:Alert=this.alertCtrl.create({
    message:"update entertainment available?",
    inputs:[
      {
      name:'entertainmentAvailable',
      type: 'radio',
      label: 'yes',
      value:'yes'
      
 },{
   name:'entertainmentAvailable',
   type: 'radio',
   label: 'no',
   value:'no'
  
 }
 ],
 buttons:[{
   text:'cancel',
 },{
   text:'save',
   handler:data =>{
     this.updateEntertainmentAvailable(data)
     console.log(data)
     }
 }]
 })
 alert.present()
 }


//update carwash name
updateEntertainmentAvailable(entertainment:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfoentertainmentAvailable(entertainment);
}
updateInfoentertainmentAvailable(entertainmentAvailable:string):Promise<any>{
  return this.carWashupdateRef.update({ entertainmentAvailable});
}

   //alert for entertainmentarea
   updatetypeOfArea(){
    const alert:Alert=this.alertCtrl.create({
     message:"update type Of Area?",
     inputs:[{
       name:'typeOfArea',
       placeholder:'area type',
    
  }],
  buttons:[{
    text:'cancel',
  },{
    text:'save',
    handler:data =>{
       this.updateAreaType(data.typeOfArea)
      }
  }]
 })
 alert.present()
  }


  //update area type
  updateAreaType(area:string){
    this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
    this.updateInfoAreaType(area);
  }
  updateInfoAreaType(typeOfArea:string):Promise<any>{
    return this.carWashupdateRef.update({ typeOfArea });
}

 //alert for number of sedans
 updatesedanCars(){
  const alert:Alert=this.alertCtrl.create({
   message:"update type of sedanCars?",
   inputs:[{
     name:'sedanCars',
     placeholder:'number of sedanCars',
  
}],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
     this.updateSedanCars(data.sedanCars)
    }
}]
})
alert.present()
}


//update carwash name
updateSedanCars(sedan:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfoSedans(sedan);
}
updateInfoSedans(sedanCars:string):Promise<any>{
  return this.carWashupdateRef.update({ sedanCars});
}
 //alert for van cars
 updatevanCars(){
  const alert:Alert=this.alertCtrl.create({
   message:"update vanCars?",
   inputs:[{
     name:'vanCars',
     placeholder:'number of vanCars',
  
}],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
     this.updateVanCars(data.vanCars)
    }
}]
})
alert.present()
}


//update van cars
updateVanCars(van:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfovanCars(van);
}
updateInfovanCars(vanCars:string):Promise<any>{
  return this.carWashupdateRef.update({ vanCars });
}
 //alert for truckCars
 updatetruckCars(){
  const alert:Alert=this.alertCtrl.create({
   message:"update truckCars?",
   inputs:[{
     name:'truckCars',
     placeholder:'number of truck cars',
  
}],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
     this.updateTruckCars(data.truckCars)
    }
}]
})
alert.present()
}


//update carwash name
updateTruckCars(truck:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfotruckCars(truck);
}
updateInfotruckCars(truckCars:string):Promise<any>{
  return this.carWashupdateRef.update({ truckCars });
}
 //alert for MALE EMPLOYEES
 updatemales(){
  const alert:Alert=this.alertCtrl.create({
   message:"update males employees?",
   inputs:[{
     name:'males',
     placeholder:'employee males',
  
}],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
     this.updateEmpmales(data.males)
    }
}]
})
alert.present()
}


//update males
updateEmpmales(employeemales:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfomales(employeemales);
}
updateInfomales(males:string):Promise<any>{
  return this.carWashupdateRef.update({ males });
}
 //alert for females
 updatefemales(){
  const alert:Alert=this.alertCtrl.create({
   message:"update employee females?",
   inputs:[{
     name:'females',
     placeholder:'employee females',
  
}],
buttons:[{
  text:'cancel',
},{
  text:'save',
  handler:data =>{
     this.updateFemales(data.females)
    }
}]
})
alert.present()
}


//update carwash name
updateFemales(Employeefemales:string){
  this.carWashupdateRef=firebase.database().ref(`/carwashlists/`+this.id);
  this.updateInfofemales(Employeefemales);
}
updateInfofemales(females:string):Promise<any>{
  return this.carWashupdateRef.update({ females });
}

map(){
  this.navCtrl.push(HomePage);
}
Signup(){
  this.navCtrl.push(SignupPage);
}
Signin(){
this.navCtrl.push(SigninPage);
}
logOut(): void {
 
    this.navCtrl.setRoot(SigninPage);

}

}
