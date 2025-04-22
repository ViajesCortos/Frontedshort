import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import GoogleMapComponent from './google-map/google-map.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
    GoogleMapsModule,
  ]
})
export class MapsModule { }
