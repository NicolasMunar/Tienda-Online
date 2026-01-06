import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServicioLogin } from './servicio-login';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardian implements CanActivate {

  constructor(
    private servicioLogin: ServicioLogin,
    private router: Router
  ) { }

  //verificar si el usuario esta autenticado antes de activar la ruta
  canActivate(): boolean {
    if (this.servicioLogin.isAutenticado()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
