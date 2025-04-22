import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../Services/auth.service';
import { Router, RouterLink, RouterLinkWithHref, RouterModule } from '@angular/router';
import { User } from '../../../Interfaces/User.model';
import { Auth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,RouterLinkWithHref,RouterLink,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  auth: Auth = inject(Auth);
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
      console.log('usuario autenticado:',r.user);
      localStorage.setItem('token', JSON.stringify(r.user)); // Guarda el token
      this.router.navigate(['/dashboard']); 
    })
    .catch(error => console.log(error)
    )
  }
}
OnclickGoogle(){
  const provider = new GoogleAuthProvider();
  signInWithPopup(this.auth, provider).then(result => {
    console.log('Usuario autenticado:', result.user);
    localStorage.setItem('token', JSON.stringify(result.user)); // Guarda el token
    this.router.navigate(['/dashboard']);  
  }).catch(error => console.error('Error al iniciar sesión:', error));

}
goToRegister() {
  this.router.navigate(['/register']);
}
}
