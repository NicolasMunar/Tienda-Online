import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductos } from "./listado-productos/listado-productos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Tienda-online";
}
