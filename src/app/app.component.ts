
import { WelcomePage } from './../pages/welcome/welcome';
import { HomePage } from './../pages/home/home';

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';


const config =({
  apiKey: "AIzaSyAjNdP0-YIlfcWvchezd7_NIGCb7lygvsY",
  authDomain: "carwashapp-4fa12.firebaseapp.com",
  databaseURL: "https://carwashapp-4fa12.firebaseio.com",
  projectId: "carwashapp-4fa12",
  storageBucket: "carwashapp-4fa12.appspot.com",
  messagingSenderId: "766383790377"
});


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any=WelcomePage;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config)
    console.log(config)
    // const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //   if (!user) {
    //     this.rootPage =WelcomePage;
    //     unsubscribe();
    //   } else {
    //     this.rootPage =WelcomePage;
    //     unsubscribe();
    //   }
    // });
  }
}

