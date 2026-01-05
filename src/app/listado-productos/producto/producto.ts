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

  //Metodo para EDITAR 
  editarProducto(){
    //ID en la URL por medio de la llave definida en el input.
    this.router.navigate(['/editar',this.llaveInput]);
  }

  /*Metodo anterior para el boton EDITAR, por medio de router.navigate, se le envia el ID del producto a editar
  editarProducto(id: number){
   // Pasamos el ID en la URL
   this.router.navigate(['/editar',id])
  }
   */
}