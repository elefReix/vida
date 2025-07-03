import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    CommonModule, 
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  error: string | null = null;
  message:String = ''

  constructor(private authService: LoginService) {
    this.login()
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.error = null;
        this.message =  'Login exitosos';
        console.log('✅ Login exitoso');
        // Redirige o actualiza vista
      })
      .catch((err) => {
        this.error = err.message;
        console.log("🚀 ~ LoginComponent ~ login ~ this.error:", this.error)
      });
  }
}
