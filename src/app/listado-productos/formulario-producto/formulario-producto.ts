import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto';
import { ProductoModelo } from '../producto/producto.model';
import { ServicioProductos } from '../../servicio-productos';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProducto {
  titulo = 'Detalle Producto'
  //titulo = 'Agregar Nuevo Producto'

  productoID: number | null = null;
  descripcionProducto: string = "";
  precioProducto: number = 0;

  constructor(private servicioProductos: ServicioProductos, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //verificamos si se debe cargar un producto existente
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const producto = this.servicioProductos.getProductoById(Number(id));
      if (producto) {
        //si obtiene un producto se muestra en el formulario y se inicializan los valores.
        this.productoID = producto.id;
        this.descripcionProducto = producto.descripcion;
        this.precioProducto = producto.precio;
      }
    }

  }

  guardarProducto(event: Event) {
    //event.preventDefault();
    if (this.descripcionProducto !== null && this.descripcionProducto !== "" && this.precioProducto !== null && !isNaN(this.precioProducto) && (this.precioProducto > 0)) {
      const producto = new ProductoModelo(this.productoID, this.descripcionProducto, this.precioProducto);
      this.servicioProductos.guardarProducto(producto);
      this.eliminarValoresProducto();
      //Redirige al inicio
      this.router.navigate(['/']);
    } else {
      alert("Por favor diligencia todos los campos para agregar nuevos productos")
    }
  }

  cancelar() {
    //Redirige al inicio
    this.router.navigate(['/']);
  }

  eliminarValoresProducto() {
    this.productoID = null;
    this.descripcionProducto = "";
    this.precioProducto = 0;
  }

  /*
  //Declaracion de objeto tipo ProductoModelo Emitter para gestion de emicion de la data al 
 //@Output() nuevoProducto = new EventEmitter<ProductoModelo>();
 //Declaracion de variables con @ViewChild para capturar los valores del DOM.
 //@ViewChild('descripcionProducto') descripcionProducto!: ElementRef;
 //@ViewChild('precioProducto') precioProducto!: ElementRef;


 //Metodo para limpiar los campos del formulario
 /*EliminarValores(): void {
   this.descripcionProducto.nativeElement.value = '';
   this.precioProducto.nativeElement.value = '';
 }

 agregarNuevoProducto(evento: Event) {
   //Toma el evento ejecutado y previene la actualizacion por defecto de la pagina
   //dado el caso evita que se pierta el foco y la informacion gestionada en el DOM.
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
   */
}