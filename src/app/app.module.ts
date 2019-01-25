import { Geofence } from '@ionic-native/geofence';
import { CarwashListPage } from './../pages/carwash-list/carwash-list';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Geolocation} from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarwashProvider } from '../providers/carwash/carwash';
import firebase from 'firebase/app';


firebase.initializeApp({
  apiKey: "AIzaSyAjNdP0-YIlfcWvchezd7_NIGCb7lygvsY",
  authDomain: "carwashapp-4fa12.firebaseapp.com",
  databaseURL: "https://carwashapp-4fa12.firebaseio.com",
  projectId: "carwashapp-4fa12",
  storageBucket: "carwashapp-4fa12.appspot.com",
  messagingSenderId: "766383790377"
});

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarwashListPage
  ],
  imports: [
    BrowserModule,
  
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarwashListPage
  ],
  providers: [
    StatusBar,
     SplashScreen,
    Geolocation,
    NativeGeocoder,
    Geofence,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarwashProvider,
  


    
  ]
})
export class AppModule {}
