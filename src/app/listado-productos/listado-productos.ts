import { Component } from '@angular/core';
import { Producto } from './producto/producto';
import { FormsModule } from '@angular/forms';
import { FormularioProducto } from "./formulario-producto/formulario-producto";
import { ProductoModelo } from './producto/producto.model';
import { ServicioProductos } from '../servicio-productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, Producto],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {
  titulo = "Listado de productos";
  Subtitulo = "Agregar Nuevo Producto";


 //Diccionario o  mapa de objetos
   listadoProductos: {[llave: string]: ProductoModelo} = {};
  //listadoProductos: ProductoModelo[] = []

  nuevoProducto: ProductoModelo | null = null;
  descripcionProducto: string = '';
  precioProducto: number | null = null; //Typescript permite generar tipos de datos compuestos usando el operador pipe (|). 
  // En este caso, precioProducto puede ser de tipo number o null.
   
  constructor(private servicioProductos: ServicioProductos, private router: Router) {
    
  }

  ngOnInit() {
    //metodo para cargar productos desde firebase.
    this.cargarProductos();
    //this.servicioProductos.obtenerProductosObs().subscribe((productos) => { this.listadoProductos = productos })

    /*
    this.servicioProductos.detalleProductoEmitter.subscribe(
      (producto: ProductoModelo) => alert(`Producto: ${producto.descripcion}, precio $${producto.precio}`) // `` = String literal
    )
    */    
  }

  //metodo de carga de productos desde firebase por medio de un observable, usando diccionario o mapa de objetos.
  cargarProductos(){ 
    this.servicioProductos.listarProductos().subscribe((listadoProductos: {[llave: string]: ProductoModelo}) => {
      this.listadoProductos = listadoProductos;
    });
  }
 
   obtenerLlaves(): string[]{
     if(this.listadoProductos){
      return Object.keys(this.listadoProductos);
     }
     /*si no se ha inicializado correctamente la lista de productos se retorna 
     un arrray vacio*/
     return [];
   }
  
  //RUTAS (Routes - router)
  agregarProducto(){
    this.router.navigate(['agregar'])
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
