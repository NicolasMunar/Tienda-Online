import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModelo } from './listado-productos/producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class Datos {
  //URL de base de datos de firebase
  url = 'https://tienda-online-a9ea6-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient) { }


  listarProductos(): Observable<{[llave:string]: ProductoModelo}>{ //Metodo retornara un objeto de tipo Observable, en forma de llave con el valor de producto
    return this.httpClient.get<{[llave:string]: ProductoModelo}>(this.url + 'datos.json');//uso dle httpClient por medio del  metodo get para obtener informacion de la base de datos
                                                                                          //en formato llav - valor
  }
}