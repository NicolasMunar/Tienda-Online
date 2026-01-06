import { Routes } from '@angular/router';
import { FormularioProducto } from './listado-productos/formulario-producto/formulario-producto';
import { Producto } from './listado-productos/producto/producto';
import { ListadoProductos } from './listado-productos/listado-productos';
import { Error } from './error/error';
import { Login } from './login/login';
import { LoginGuardian } from './login-guardian';

export const routes: Routes = [
    { path: '', component: ListadoProductos, canActivate:[LoginGuardian]}, //localhost:4200/
    { path: 'formulario', component: ListadoProductos, canActivate:[LoginGuardian]}, //localhost:4200/listado
    { path: 'agregar', component: FormularioProducto , canActivate:[LoginGuardian]},//localhost:4200/producto
    ////Usado para el envio de ID por parametro
    //{ path: 'editar/:id', component: FormularioProducto },//localhost:4200/producto  
    { path: 'editar/:llave', component: FormularioProducto, canActivate:[LoginGuardian] },//localhost:4200/producto
    {path: 'login', component: Login},
    { path: '**', component: Error }//Control de rutas no existentes
];