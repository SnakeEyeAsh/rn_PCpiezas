import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCarritoStore } from '@/store/CarritoStore'
import { Producto, Productos } from '@/model/Types';
import { useTemaStore } from '@/store/TemaStore';
import CabeceraCarrito from '@/components/CabeceraCarrito';
import ProductItem from '@/components/ProductItem';
import { useRouter } from 'expo-router';

export default function carrito() {

  const {productos,setProductos} = useCarritoStore();
  const {tema} = useTemaStore();
  const [precio,setPrecio] = useState(0);
  const router = useRouter();

  function calcularPrecioTotal(){
    precio
    productos.map((item)=>{
      setPrecio(precio+item.precio)
    })
    return precio
  }

  function accionVerDetalle(p:Producto,){
    router.push({
      pathname:'/tienda/buscar/[id]',
      params:{id:p.id,carrito:'si'}
    })
  }

  function accionRetirarProducto(p:Producto){
    let lista:Productos = []
    productos.map((item)=>{
        if(p.id!==item.id){
          [...lista,item]
        }
    })
    setProductos(lista);
  }

  function accionComprar(){
    Alert.alert("Falta Implementar la funcionalidad de compra")
  }
  
  return (
    <View className='flex-1' style={{backgroundColor:tema.colors.background}}>
      <CabeceraCarrito total={precio} accionComprar={accionComprar}/>
      <FlatList
      data={productos}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=><ProductItem producto={item} accionRetiraraProducto={accionRetirarProducto} accionVerDetalle={()=>accionVerDetalle(item)}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})