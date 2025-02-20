import { Component, inject, Inject } from '@angular/core';
import { AuthService } from '../../Services/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  authService= inject (AuthService);
  router = inject (Router);

  logOut (){
    this.authService.logLogout()
    .then(()=>{
       // Remove token from local storage
      this.router.navigate(['/login']);  // Redirect to login page after logout
    })
    .catch((error: any) => console.log(error));

  }
}
