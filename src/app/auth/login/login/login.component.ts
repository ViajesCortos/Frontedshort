import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../Services/Auth.service';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { User } from '../../../Interfaces/User.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,RouterLinkWithHref,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
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
      this.router.navigate(['./dashboard']);
    })
    .catch(error => console.log(error)
    )
  }
}
OnclickGoogle(){
  this.authService.logInGoogle()
  .then(r => {
    this.router.navigate(['./dashboard'])
  }) 
  .catch(error => console.log(error))

}
goToRegister() {
  this.router.navigate(['/register']);
}
}
