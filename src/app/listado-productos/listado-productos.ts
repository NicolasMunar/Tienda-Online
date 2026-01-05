import { Component } from '@angular/core';
import { Producto } from './producto/producto';
import { FormsModule } from '@angular/forms';
import { FormularioProducto } from "./formulario-producto/formulario-producto";
import { ProductoModelo } from './producto/producto.model';
import { ServicioProductos } from '../servicio-productos';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
   listadoProdSuscripcion: Subscription | null = null;
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

    //escuchar los cambios en la lista de productos.
    this.listadoProdSuscripcion = this.servicioProductos.ListaProductosActualizados.subscribe((listadoProductos) => {
      this.listadoProductos = listadoProductos;
    });

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
      this.servicioProductos.setProductos(listadoProductos);
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

  ngOnDestroy():void{
    if(this.listadoProdSuscripcion !== null){
      //permite al temrinar el uso del componente desuscribirse utilizando el SUBJECT.
      this.listadoProdSuscripcion.unsubscribe();
    }
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
