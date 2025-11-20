import { EventEmitter, Injectable, Output} from '@angular/core';
import { ProductoModelo } from './listado-productos/producto/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Producto } from './listado-productos/producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductos {

  listaProductos: ProductoModelo[]= [
    new ProductoModelo("Pantalon", 130),
    new ProductoModelo("Camisa", 130),
    new ProductoModelo("Playera", 10)
  ];
   
  constructor(private http: HttpClient){}

  //Declaracion de un metodo normal tipo "producto Modelo" array.
  obtenerProductos(): ProductoModelo[]{
    return this.listaProductos;
  }
  //Declaracion de observable con el mismo tipo de dato
  obtenerProductosObs(): Observable<ProductoModelo[]>{
    return of(this.listaProductos);
  }

  addNuevoProducto(nuevoProducto: ProductoModelo){
     this.listaProductos.push(nuevoProducto);
  }    
}
