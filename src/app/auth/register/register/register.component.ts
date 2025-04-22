import { Component, inject } from '@angular/core';
import { AuthService } from '../../../Services/auth.service'; 
import { Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../Interfaces/User.model'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true, 
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export default class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);

  form = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    age: new FormControl<number | null>(null, Validators.required), // Ahora es un número
    phone: new FormControl<number | null>(null, Validators.required),
    location: new FormControl<string>('', Validators.required),
    gender: new FormControl<string>('', Validators.required),
  });
  

  onSubmit() { 
    if (this.form.valid) {
      this.authService.register(this.form.value as User)
        .then(() => {
          this.router.navigate(['./login']);
        })
        .catch(error => {
          console.error('Error en el registro:', error); 
        });
    }
  }
}
