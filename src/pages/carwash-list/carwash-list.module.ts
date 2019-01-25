import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarwashListPage } from './carwash-list';

@NgModule({
  declarations: [
    CarwashListPage,
  ],
  imports: [
    IonicPageModule.forChild(CarwashListPage),
  ],
})
export class CarwashListPageModule {}
