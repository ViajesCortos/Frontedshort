import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
<<<<<<< HEAD
import { AuthService } from '../../../Services/Auth.service';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { User } from '../../../Interfaces/User.model';
=======
import { AuthService } from '../../../Services/auth.service';
import { Router, RouterLink, RouterLinkWithHref, RouterModule } from '@angular/router';
import { User } from '../../../Interfaces/User.model';
import { Auth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from '@angular/fire/auth';
>>>>>>> 18fe514 (feat:Mapa interactivo con marcadores test)

@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,RouterLinkWithHref,RouterLink],
=======
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,RouterLinkWithHref,RouterLink,RouterModule],
>>>>>>> 18fe514 (feat:Mapa interactivo con marcadores test)
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
<<<<<<< HEAD
=======
  auth: Auth = inject(Auth);
>>>>>>> 18fe514 (feat:Mapa interactivo con marcadores test)
authService = inject (AuthService);
router = inject (Router);


forms = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]) 
})
OnSubmit(){
  if (this.forms.valid) {
    this.authService.logIn(this.forms.value as User)
    .then(r =>{
<<<<<<< HEAD
      this.router.navigate(['./dashboard']);
=======
      console.log('usuario autenticado:',r.user);
      localStorage.setItem('token', JSON.stringify(r.user)); // Guarda el token
      this.router.navigate(['/dashboard']); 
>>>>>>> 18fe514 (feat:Mapa interactivo con marcadores test)
    })
    .catch(error => console.log(error)
    )
  }
}
OnclickGoogle(){
<<<<<<< HEAD
  this.authService.logInGoogle()
  .then(r => {
    this.router.navigate(['./dashboard'])
  }) 
  .catch(error => console.log(error))
=======
  const provider = new GoogleAuthProvider();
  signInWithPopup(this.auth, provider).then(result => {
    console.log('Usuario autenticado:', result.user);
    localStorage.setItem('token', JSON.stringify(result.user)); // Guarda el token
    this.router.navigate(['/dashboard']);  
  }).catch(error => console.error('Error al iniciar sesión:', error));
>>>>>>> 18fe514 (feat:Mapa interactivo con marcadores test)

}
goToRegister() {
  this.router.navigate(['/register']);
}
}
