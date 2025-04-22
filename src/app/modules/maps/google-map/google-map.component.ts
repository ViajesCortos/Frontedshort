import { Component, Input, OnChanges, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, MapMarker, MapPolyline } from '@angular/google-maps';

@Component({
  imports: [MapMarker, MapPolyline, GoogleMap, CommonModule],
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
  standalone: true
})
export default class GoogleMapComponent implements OnChanges, AfterViewInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  @Input() origen!: google.maps.LatLngLiteral;
  @Input() destino!: google.maps.LatLngLiteral;

  center: google.maps.LatLngLiteral = { lat: 4.570868, lng: -74.297333 }; // 🇨🇴
  
  zoom = 6;

  path: google.maps.LatLngLiteral[] = [];

  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 18,
    minZoom: 4,
  };

  polylineOptions: google.maps.PolylineOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 3,

    
  };

  ngAfterViewInit(): void {
    // Aseguramos que el centro inicial sea Colombia
    if (this.map) {
      this.map.panTo(this.center);
      this.map.zoom = this.zoom;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('center en ngOnChanges:', this.center);  // Imprimir el valor de center al cambiar
  
    if (this.origen && this.destino) {
      this.path = [this.origen, this.destino];
  
      // Solo actualiza el centro cuando se tiene origen
      if (this.map) {
        this.map.panTo(this.origen);
        this.map.zoom = 10;
      }
    }
  }
  
}
