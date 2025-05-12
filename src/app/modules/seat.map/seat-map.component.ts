// // seat-map.component.ts
// import { Component } from '@angular/core';
// import { CommonModule, NgFor } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-seat-map',
//   standalone: true,
//   imports: [CommonModule, NgFor, FormsModule],
//   templateUrl: './seat-map.component.html',
//   styleUrls: ['./seat.map.component.component.css']
// })
// export class SeatMapComponent {
//   origen = 'BOGOTÁ';
//   destino = 'MEDELLÍN';
//   salida = '08:00 AM';
//   pasajeros = 1;
  
//   cities = ['BOGOTÁ', 'MEDELLÍN', 'CALI', 'BARRANQUILLA'];
//   departureTimes = ['06:00 AM', '08:00 AM', '10:00 AM'];
  
//   prices = [
//     { 
//       amount: 120000, 
//       company: 'Bolivariano', 
//       schedule: '08:00-12:00', 
//       missing: 2,
//       logo: 'https://cdnpin.pinbus.co/common/img/operadoras/svg/bolivarianoRest.svg'
//     },
//     { 
//       amount: 135000, 
//       company: 'Berlinas', 
//       schedule: '08:30-12:30', 
//       missing: 5,
//       logo: 'https://cdnpin.pinbus.co/common/img/operadoras/svg/bolivarianoRest.svg'
//     }
//   ];

//   calcularLlegada(): string {
//     const hora = parseInt(this.salida.split(':')[0]);
//     return `${hora + 4}:00 ${this.salida.includes('AM') ? 'PM' : 'AM'}`;
//   }
// }
import { Component, computed, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seat-map',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat.map.component.component.css'] // Corregí el nombre del archivo CSS
})
export class SeatMapComponent {
  // Usando signals para reactividad mejorada (Angular 16+)
  origen = signal('BOGOTÁ');
  destino = signal('MEDELLÍN');
  salida = signal('08:00 AM');
  pasajeros = signal(1);

  cities = ['BOGOTÁ', 'MEDELLÍN', 'CALI', 'BARRANQUILLA'];
  departureTimes = ['06:00 AM', '08:00 AM', '10:00 AM'];

  // Computed property para la hora de llegada
  llegada = computed(() => {
    const hora = parseInt(this.salida().split(':')[0]);
    const periodo = this.salida().includes('AM') ? 'PM' : 'AM';
    return `${hora + 4}:00 ${periodo}`;
  });

  prices = [
    { 
      amount: 120000, 
      company: 'Bolivariano', 
      schedule: '08:00-12:00', 
      missing: 2,
      logo: 'https://cdnpin.pinbus.co/common/img/operadoras/svg/bolivarianoRest.svg' // Mejor usar ruta local
    },
    { 
      amount: 135000, 
      company: 'Berlinas', 
      schedule: '08:30-12:30', 
      missing: 5,
      logo: 'https://cdnpin.pinbus.co/common/img/operadoras/svg/bolivarianoRest.svg'
    }
  ];

  // Método para validar origen y destino diferentes
  validateRoute(): boolean {
    return this.origen() !== this.destino();
  }
}