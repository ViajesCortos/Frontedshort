import { Component, inject, Inject } from '@angular/core';
import { AuthService } from '../../Services/Auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import GoogleMapComponent from '../../modules/maps/google-map/google-map.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,GoogleMapComponent,FormsModule], 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  authService= inject (AuthService);
  router = inject (Router);
  
  origen: string = '';
  destino: string = '';

  lugares = [
    { nombre: 'Bogotá', lat: 4.6097, lng: -74.0817 },
    { nombre: 'Medellín', lat: 6.2442, lng: -75.5812 },
    { nombre: 'Cali', lat: 3.4516, lng: -76.5320 }
  ];

  seleccionarRuta() {
    console.log(`Ruta seleccionada: ${this.origen} -> ${this.destino}`);
  }
 
  getCoordenadas(nombre: string) {
    return this.lugares.find(lugar => lugar.nombre === nombre) || { lat: 0, lng: 0 };
  }
  
  
  
  logOut (){
    this.authService.logLogout()
    .then(()=>{
       // Remove token from local storage
      this.router.navigate(['/login']);  // Redirect to login page after logout
    })
    .catch((error: any) => console.log(error));

  }
  
}
