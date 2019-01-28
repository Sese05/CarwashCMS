import { CarwashlistDetailsPage } from './../carwashlist-details/carwashlist-details';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Alert,AlertController,Loading,LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public signupForm: FormGroup;
  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    formBuilder: FormBuilder
  ) {
    this.signupForm = formBuilder.group({

      username:['',Validators.compose([Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z]*')])],

      email: [
        "",
        Validators.compose([Validators.required])
      ],
      password: [
        "",
        Validators.compose([Validators.minLength(6), Validators.required])
      ],
  
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signupUser(): void {
    if (!this.signupForm.valid) {
      console.log(
        `Need to complete the form, current value: ${this.signupForm.value}`
      );
    } else {
      
      const email: string = this.signupForm.value.email;
      const password: string = this.signupForm.value.password;
  
      this.authProvider.signupUser(email, password).then(
        user => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(CarwashlistDetailsPage);
          });
        },
        error => {
          this.loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: "Ok", role: "cancel" }]
            });
            alert.present();
          });
        }
      );
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
  gotosignin(){
    this.navCtrl.push(WelcomePage);
  }
}


