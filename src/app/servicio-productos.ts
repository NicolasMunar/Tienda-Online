import { EventEmitter, Injectable, Output } from '@angular/core';
import { ProductoModelo } from './listado-productos/producto/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Producto } from './listado-productos/producto/producto';
import { ServicioDatos } from './servicio-datos';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductos {

  /*Evento para el boton ver detalle.
  detalleProductoEmitter = new EventEmitter<ProductoModelo>();
  */

  /*Variable para el ID siguiente y unico
  /el ID sera generado directamente por FIREBASE
  private idSiguiente = 1;
  */

  /*lista de productos
  listaProductos: ProductoModelo[] = []
  */

  //la lista de productos sera obtenida desde firebase
  //se genera un diccionario o mapa de objetos
  listaProductos: { [llave: string]: ProductoModelo } = {};

  constructor(private http: HttpClient, private datosServive: ServicioDatos) {
    //this.inicializarProductos()
  }

  listarProductos() {
      //se realiza la invocacion al servicio de datos para obtener por medio de un observable la lista de productos
    return this.datosServive.listarProductos();
  }

  getProductoById(id: number): ProductoModelo | undefined {
    return undefined;
    //return this.listaProductos.find(producto => producto.id === id);
  }

  //Agregar o modificar un producto existente
  guardarProducto(nuevoProducto: ProductoModelo) {
    // if (nuevoProducto.id === null) {
    //   //agregar producto
    //   nuevoProducto.id = this.idSiguiente++;
    //   this.listaProductos.push(nuevoProducto);
    // } else if (nuevoProducto.id !== null) {
    //   //modificar producto
    //   const indice = this.listaProductos.findIndex(p => p.id === nuevoProducto.id);
    //   //si no encuentra producto con ID similar retorna el valor de -1
    //   if (indice !== -1) {
    //     this.listaProductos[indice] = nuevoProducto;
    //   }
    // }
  }

  eliminarProducto(productoId: number) {
    // const indice = this.listaProductos.findIndex(p => p.id === productoId);
    // // sin encontrar producto con ID similar retorna el valor de -1
    // if (indice !== -1) {
    //   this.listaProductos.splice(indice, 1);
    // }
  }
 
  /*
  //Los productos seran recuperados desde la base de datos (firebase)
  private inicializarProductos() {
    const producto1 = new ProductoModelo(this.idSiguiente++, 'Pantalon', 130.0);
    const producto2 = new ProductoModelo(this.idSiguiente++, 'Camisa', 80.0);
    const producto3 = new ProductoModelo(this.idSiguiente++, 'Playera', 50.0)
    this.listaProductos.push(producto1, producto2, producto3);
  }*/

  /*Declaracion de un metodo normal tipo "producto Modelo" array.
  obtenerProductos(): ProductoModelo[] {
    return this.listaProductos;
  }
  */
  
  /*Declaracion de observable con el mismo tipo de dato
  obtenerProductosObs(): Observable<ProductoModelo[]> {
    return of(this.listaProductos);
  }*/

  /*metodo usado anteriormente para adicionar productos a la lista de productos
  addNuevoProducto(nuevoProducto: ProductoModelo) {
    this.listaProductos.push(nuevoProducto);
  }*/
}