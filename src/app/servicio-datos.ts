import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModelo } from './listado-productos/producto/producto.model';
import { ServicioLogin } from './servicio-login';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatos {
  //URL de base de datos de firebase
  url = 'https://tienda-online-a9ea6-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient, private loginService: ServicioLogin){}

  //Metodo retornara un objeto de tipo Observable, en forma de llave con el valor de producto

  listarProductos(): Observable<{ [llave: string]: ProductoModelo }> {
    const  token = this.loginService.getIdToken();
    const  url_listar = `${this.url}datos.json?auth=${token}`;
    return this.httpClient.get<{ [llave: string]: ProductoModelo }>(url_listar);
    //  'datos' -- nombre de la coleccion en firebase
    //  '.json' -- Formato de la respuesta
    //uso dle httpClient por medio del  metodo get para obtener informacion de la base de datos                                                                                        //en formato llav - valor
  }

  agregarProducto(nuevoProducto: ProductoModelo): Observable<any> {
    const  token = this.loginService.getIdToken();
    const  url_agregar = `${this.url}datos.json?auth=${token}`;
    /*al usar POST, por medio de firebase de genera un identificador unico por cada uno de los
    registros a insertar, se genera el valor de la llave de forma automatica*/
    return this.httpClient.post(url_agregar, nuevoProducto);
  }

  modificarProducto(producto: ProductoModelo, llave: string): Observable<any> {
    const token = this.loginService.getIdToken();
    const url_modificar = `${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.put(url_modificar, producto); //primero se ubica la llave y luego se gestiona la data en la base de datos
  }

  eliminarProducto(llaveProducto: string): Observable<any>{
    const  token = this.loginService.getIdToken();
    const url_eliminar = `${this.url}datos/${llaveProducto}.json?auth=${token}`;
    return this.httpClient.delete(url_eliminar);
  }
}
