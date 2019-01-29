
import { Geofence } from '@ionic-native/geofence';
import { CarwashProvider } from './../../providers/carwash/carwash';

import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, AlertController, Platform, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';
import { NativeGeocoder, NativeGeocoderForwardResult} from '@ionic-native/native-geocoder';


import firebase , { User }from 'firebase/app';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 @ViewChild('map') mapContainer: ElementRef;
 map: any;

 public longLat:Array<any>
 public longLng:Array<any>
 public carwashList: Array<any>;
 
constructor(public navCtrl: NavController,private carPro:CarwashProvider,public navParams: NavParams,
  private alertCtrl:AlertController,private nativeGeocoder: NativeGeocoder,private geofence:Geofence) {

  // initialize the plugin
  geofence.initialize().then(
    // resolved promise does not return a value
    () => console.log('Geofence Plugin Ready'),
    (err) => console.log(err)
  )
  
    }

 ionViewDidEnter() {
  this.loadmap();
}

loadmap() {
  this.map = leaflet.map("map").fitWorld();
  leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attributions: 'www.tphangout.com',
    maxZoom: 14
  }).addTo(this.map);
  this.map.locate({
    setView: true,
    maxZoom: 10
  })
//Geofencing
  .on('locationfound', (e) => {
    this.map.setView([-26.0063121, 28.2108827], 16);
    let markerGroup = leaflet.featureGroup();
    let marker: any = leaflet.marker([-26.0063121, 28.2108827]);
    marker.bindPopup("<html>I'm here!</b><html>").openPopup();
    markerGroup.addLayer(marker);

    this.map.addLayer(markerGroup);
    var circle = leaflet.circle([-26.0063121, 28.2108827], {
      color: 'green',
           fillColor: 'rgba(0.0,0.0,0.0,0.3)',
        fillOpacity: 0.5,
        radius: 4500
     }).addTo(this.map);
     circle.bindPopup("My area.");
   }).on('locationerror', (err) => {
     alert(err.message);
   });


  this.getAllCoordinates()
   
  }
 
  addMarker() {
    let prompt = this.alertCtrl.create({
      title: 'Add Marker',
      message: "Enter location",
      inputs: [
        {
          name: 'city',
          placeholder: 'City'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            
            this.geoCodeandAdd(data.city);
          }
        }
      ]
    });
    prompt.present();
  }
  geoCodeandAdd(city) {
    this.nativeGeocoder.forwardGeocode(city)
    .then((coordinates: NativeGeocoderForwardResult[]) => {
        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet.marker([coordinates[0].latitude, coordinates[0].longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    


this.populateMap("latitude", "longitude");

      })
      
  .catch((error: any) => console.log(error));
  }

  getAllCoordinates(){

    //Now we need to get that list of carwashes from Firebase
    firebase.database().ref("/carwashlists").on("value", carwashListSnapshot => {
      this.carwashList= [];
      carwashListSnapshot.forEach(snap => {
          this.populateMap(snap.val().carwashLatitude, snap.val().carwashLongatude)
          console.log("Location")
          console.log(snap.val().carwashLatitude + " value " + snap.val().carwashLongatude)
      });
    });
  }

  populateMap(latitude, longitude){
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([latitude, longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
   }

   private addGeofence(){
    let fence = {
      id: 'Data Watch', 
      latitude:       -26.0063121, 
      longitude:     28.2108827,
      radius:         100, 
      transitionType: 3, 
      notification: { 
          id:             1, 
          title:          'You crossed a fence', 
          text:           'You just arrived to the carwash center.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
  
    this.geofence.addOrUpdate(fence).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );
  }
}





