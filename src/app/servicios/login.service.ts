import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private auth = inject(Auth);

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
