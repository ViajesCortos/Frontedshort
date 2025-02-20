import { Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard'; 

export const routes: Routes = [
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
        
    }




];
