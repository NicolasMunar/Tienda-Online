import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterModule } from '@angular/router';
import { ListadoProductos } from "./listado-productos/listado-productos";
import { ServicioLogin } from './servicio-login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  titulo = "Tienda-online";

  constructor(private serviceLogin: ServicioLogin) {
  }

  isAutenticado() {
    return this.serviceLogin.isAutenticado();
  }

  salir() {
    return this.serviceLogin.logout();
  }
}
