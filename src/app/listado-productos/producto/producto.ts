import { Component, Input } from '@angular/core';
import { ProductoModelo } from './producto.model';
import { ServicioProductos } from '../../servicio-productos';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {
  @Input() producto!: ProductoModelo;

  constructor(private servicioProducto: ServicioProductos){} //inyeccion de dependencias

  emitirDetalleProducto(){
    this.servicioProducto.detalleProductoEmitter.emit(this.producto);
  }
}
