import { Component } from '@angular/core';
import { Producto } from './producto/producto';
import { FormsModule } from '@angular/forms';
import { FormularioProducto } from "./formulario-producto/formulario-producto";
import { ProductoModelo } from './producto/producto.model';
import { ServicioProductos } from '../servicio-productos';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, FormularioProducto, Producto],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {
  titulo = "Listado de productos";
  Subtitulo = "Agregar Nuevo Producto";



  listadoProductos: ProductoModelo[] = []
 
  nuevoProducto: ProductoModelo | null = null;
  descripcionProducto: string = '';
  precioProducto: number | null = null; //Typescript permite generar tipos de datos compuestos usando el operador pipe (|). 
                                        // En este caso, precioProducto puede ser de tipo number o null.

  constructor(private servicioProductos: ServicioProductos) { }

  ngOnInit() {
    this.servicioProductos.obtenerProductosObs().subscribe((productos) => { this.listadoProductos = productos })
  }
}


/*
  //Uso de la clase Producto importada desde el archivo model.producto.ts
  //Declaracion e inicialización del array de productos
  listadoProductos: ProductoModelo[] = []
  
    new ProductoModelo("Pantalon", 130),
    new ProductoModelo("Camisa", 130),
    new ProductoModelo("Playera", 130)
  ];
*/


/*
agregarNuevoProducto(nuevoProducto: ProductoModelo): void {
  this.listadoProductos.push(nuevoProducto);
  
 
  //Codigo que permitia agregar productos desde el mismo componente (ahora se hace desde el componente hijo formulario-producto).

  if(this.descripcionProducto !=null && this.precioProducto !=null && this.precioProducto >0){
    const nuevoProducto = new ProductoModelo(this.descripcionProducto,this.precioProducto)
    this.listadoProductos.push(nuevoProducto);
  }else{
    alert("Por favor ingrese una descripcion y un precio valido (mayor o igual a 0)");
  }
  this.deleteValues();
}
*/
