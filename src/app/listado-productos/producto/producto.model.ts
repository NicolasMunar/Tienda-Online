export class ProductoModelo {
  constructor( //definición del constructor de la clase Producto
    public id: number | null = null,
    public descripcion: string, //definición del atributo descripcion de tipo string
    public precio: number
    ){}
}
