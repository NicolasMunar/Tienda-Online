export class ProductoModelo {
  constructor( //definición del constructor de la clase Producto
    //public id: number | null = null, //se deternina usar la asignacion de ID ya que se usara una llave, mas los datos adicionales del producto
    public descripcion: string, //definición del atributo descripcion de tipo string
    public precio: number
    ){}
}
