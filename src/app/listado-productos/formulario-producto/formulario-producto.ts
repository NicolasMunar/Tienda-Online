import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto';
import { ProductoModelo } from '../producto/producto.model';

@Component({
  selector: 'app-formulario-producto',
  imports: [Producto],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProducto {
  titulo = 'Agregar Nuevo Producto'
  @Output() nuevoProducto = new EventEmitter<ProductoModelo>();
  @ViewChild('descripcionProducto') descripcionProducto!: ElementRef;
  @ViewChild('precioProducto') precioProducto!: ElementRef;

 
  //Metodo para limpiar los campos del formulario
  EliminarValores(): void {
    this.descripcionProducto.nativeElement.value = '';
    this.precioProducto.nativeElement.value = '';
  }


  agregarNuevoProducto(evento: Event) {
    evento.preventDefault();
    //Creacion de constantes para asignacion de valores.
    const descripcion = this.descripcionProducto.nativeElement.value;
    const precio = parseFloat(this.precioProducto.nativeElement.value);

    if (descripcion != null && precio != null && !isNaN(precio)) {
      const producto = new ProductoModelo(descripcion, precio);
      this.nuevoProducto.emit(producto);
      // Limpiar los campos del formulario después de agregar el producto
      this.EliminarValores();
    }else{
      alert("Por favor diligencia todos los campos para agregar nuevos productos")
    }
  }
}

