import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioFirebase } from './servicio-firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ServicioLogin {

  token: string = '';

  constructor(
    private router: Router,
    private firebaseService: ServicioFirebase
  ) { }

  login(email: string, password: string) {
    const auth = this.firebaseService.auth;
    signInWithEmailAndPassword(auth, email, password) //retorna una promesa (Promise)
      .then(() => { //si logra hacer login con el usuario proporcionado, se obtiene el token
        auth.currentUser?.getIdToken().then((token) => {
          this.token = token;
          this.router.navigate(['/']);
        })
      })
      .catch((error) => {
        console.error('Error al iniciar sesión: ', error);
      });
  }

  getIdToken() {
    return this.token;
  }
}
