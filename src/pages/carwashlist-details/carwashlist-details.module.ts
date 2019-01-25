import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarwashlistDetailsPage } from './carwashlist-details';

@NgModule({
  declarations: [
    CarwashlistDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CarwashlistDetailsPage),
  ],
})
export class CarwashlistDetailsPageModule {}
