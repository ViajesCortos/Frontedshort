import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from '../../../../enviroments/enviroment';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export default class GoogleMapComponent implements OnChanges {
  
  @Input() origen!: { lat: number, lng: number } | null;
  @Input() destino!: { lat: number, lng: number } | null;
  
  center: google.maps.LatLngLiteral = { lat: 4.6097, lng: -74.0817 };
  zoom = 7;
  ruta: google.maps.LatLngLiteral[] = [];

  constructor() {
    this.loadGoogleMapsApi();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['origen'] || changes['destino']) {
      this.trazarRuta();
    }
  }

  private loadGoogleMapsApi() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=geometry`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  private trazarRuta() {
    if (this.origen && this.destino) {
      this.ruta = [this.origen, this.destino];
      this.calcularDistancia();
    }
  }

  private calcularDistancia() {
    if (this.origen && this.destino && google.maps.geometry) {
      const origen = new google.maps.LatLng(this.origen.lat, this.origen.lng);
      const destino = new google.maps.LatLng(this.destino.lat, this.destino.lng);
      const distancia = google.maps.geometry.spherical.computeDistanceBetween(origen, destino) / 1000;

      console.log(`Distancia entre puntos: ${distancia.toFixed(2)} km`);
    }
  }
}
