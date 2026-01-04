import { Component, Input } from '@angular/core';
import { ProductoModelo } from './producto.model';
import { ServicioProductos } from '../../servicio-productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {
  @Input() producto!: ProductoModelo;
  @Input() llaveInput!: string; 
  //propiedad para recibir la llave del producto desde el componente padre

  constructor(private servicioProducto: ServicioProductos, private router:Router){} //inyeccion de dependencias

  /*Metodo para el boton EDITAR
  emitirDetalleProducto(){
    this.servicioProducto.detalleProductoEmitter.emit(this.producto);
  }
  */

  editarProducto(id: number){
   // Pasamos el ID en la URL
   this.router.navigate(['/editar',id])
  }
}