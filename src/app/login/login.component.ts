import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { LoginService } from '../servicios/login.service';
import {  } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    CommonModule, 
    FormsModule,ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  message = signal('');

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.message.set('');

    const { email, password } = this.form.value;
    if (email === 'test@example.com' && password === 'password123') {
      this.message.set('Inicio de sesión exitoso. ¡Bienvenido!');
    } else {
      this.message.set('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  }

  isSuccess(): boolean {
    return this.message().includes('exitoso');
  }
}
