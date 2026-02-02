export type Categoria = {
    id:string,
    nombre:string,
    icono:string
};

export type Categorias = Array<Categoria>;

export const CATEGORIAS: Categorias = [
    { "id": "1", "nombre": "Procesadores", "icono": "cpu-64-bit" },
    { "id": "2", "nombre": "Memoria", "icono": "memory" },
    { "id": "3", "nombre": "Discos Duros", "icono": "harddisk" },
    { "id": "4", "nombre": "Smartphones", "icono": "cellphone" },
    { "id": "5", "nombre": "Tarjetas Gráficas", "icono": "chip" }
];

export type Producto = {
    id:string,
    nombre:string,
    marca:string,
    precio:number,
    estrellas:number,
    valoraciones:number,
    imagen:string,
    categoria:Categoria
}

export type Productos = Array<Producto>;
export type Carrito = Productos;

export type Caracteristica = Record<string,string>;

export type DetalleProducto = {
    detalleProducto:Producto,
    caracteristicas:Caracteristica,
    descripcion:string
}

export type Consulta = {
    texto:string,
    marca:string,
    precioMin:number,
    precioMax:number,
    categoriaId:string|undefined
}