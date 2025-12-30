import { Routes } from '@angular/router';
import { FormularioProducto } from './listado-productos/formulario-producto/formulario-producto';
import { Producto } from './listado-productos/producto/producto';
import { ListadoProductos } from './listado-productos/listado-productos';

export const routes: Routes = [
    {path:'', component: ListadoProductos}, //localhost:4200/
    {path:'formulario', component: ListadoProductos}, //localhost:4200/listado
    {path:'agregar', component: FormularioProducto},//localhost:4200/producto
    {path:'editar/:id', component: FormularioProducto},//localhost:4200/producto   
];