import { Consulta, DetalleProducto, Productos } from "@/model/Types";
import { Platform } from "react-native";
import request, { gql } from 'graphql-request'


const IP = Platform.OS === 'android' ? "10.0.2.2" : "localhost"

export async function buscarProductos(consulta: Consulta): Promise<Productos> {

    const URL = `http://${IP}:3000/`

    const query = gql`query consultarProductos(
                        $texto: String
                        $marca: String
                        $categoriaId: String
                        $precioMin: Float
                        $precioMax: Float
                        ) {
                        allProductos(
                            filter: {
                            q: $texto
                            marca: $marca
                            categoriaId: $categoriaId
                            precio_gt: $precioMin
                            precio_lt: $precioMax
                            }
                        ) {
                            id
                            imagen
                            marca
                            nombre
                            precio
                            valoraciones
                            estrellas
                            categoria
                        }
                    }`

    const respuesta = await request(URL, query, consulta);

    console.log(respuesta.allProductos)

    return respuesta.allProductos

}

export async function consultarDetalle(id: string):Promise<DetalleProducto> {

    const URL = `http://${IP}:3000/`

    const consulta = gql`query MyQuery($id: ID!) {
                                Producto(id: $id) {
                                    caracteristicas
                                    categoriaId
                                    descripcion
                                    descuento
                                    estrellas
                                    id
                                    imagen
                                    marca
                                    nombre
                                    valoraciones
                                    precio
                                }
                            }
                            `
    const respuesta = await request(URL,consulta,{id})

    console.log(respuesta.Producto)

    return respuesta.Producto

}