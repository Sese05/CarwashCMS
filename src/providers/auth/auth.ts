import { Injectable } from '@angular/core';
import 'firebase/database';
import firebase , {User} from 'firebase/app';
import 'firebase/auth';
import {AlertController} from 'ionic-angular';


@Injectable()
export class AuthProvider {

 
  
  
  
    constructor() {
      console.log('Hello AuthProvider Provider');
   }
  
  //function to login
  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  //signup function when the user signsup whe store the email to firebase
  signupUser(email: string, password: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(newUserCredential => {
        firebase
          .database()
          .ref(`/userProfile/${newUserCredential.user.uid}/email`)
          .set(email);
      })  .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

 //reset password function
 resetPassword(email:string): Promise<void> {
  return firebase.auth().sendPasswordResetEmail(email);
}

 //logout function
     logoutUser(): Promise<void> {
  const userId: string = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/userProfile/${userId}`)
    .off();
  return firebase.auth().signOut();
    }
  
}
