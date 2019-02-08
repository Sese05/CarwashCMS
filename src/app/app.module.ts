import { CarwashlistDetailsPage } from './../pages/carwashlist-details/carwashlist-details';
import { WelcomePage } from './../pages/welcome/welcome';
import { Geofence } from '@ionic-native/geofence';
import { CarwashListPage } from './../pages/carwash-list/carwash-list';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Geolocation} from '@ionic-native/geolocation';
import { NativeGeocoder,NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarwashProvider } from '../providers/carwash/carwash';
  //import firebase from 'firebase/app';
import * as firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { ResetPage } from '../pages/reset/reset';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarwashListPage,
    WelcomePage,
    CarwashlistDetailsPage,
    SignupPage,
    SigninPage,
    ResetPage
  ],
  imports: [
    BrowserModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarwashListPage,
    WelcomePage,
    CarwashlistDetailsPage,
    SignupPage,
    SigninPage,
    ResetPage
  ],
  providers: [
    StatusBar,
     SplashScreen,
    Geolocation,
    NativeGeocoder,
    Geofence,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarwashProvider,
    AuthProvider,
  


    
  ]
})
export class AppModule {}
