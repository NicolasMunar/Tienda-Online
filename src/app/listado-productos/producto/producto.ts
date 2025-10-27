import { Component, Input } from '@angular/core';
import { ProductoModelo } from './producto.model';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {
  @Input() producto!: ProductoModelo;
}
