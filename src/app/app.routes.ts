import { Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard'; 
import { SeatMapComponent } from './modules/seat.map/seat-map.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    {path:'dashboard',
    canActivate:[authGuard],
    loadComponent:()=> import ('./Dashboard/dashboard/dashboard.component')},
    {
        path:'register',
        loadComponent: ()=> import('./auth/register/register/register.component'),

    },
    {
        path:'login',
        loadComponent: ()=> import('./auth/login/login/login.component'),
        
    },  {
        path: 'seat-map',  // Usa minúsculas y guiones
        component: SeatMapComponent
      }
];
