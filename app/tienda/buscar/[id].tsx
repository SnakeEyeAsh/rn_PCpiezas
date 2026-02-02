import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { DetalleProducto, Producto } from '@/model/Types';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useCarritoStore } from '@/store/CarritoStore';
import { consultarDetalle } from '@/helpers/ProductosAPI';
import { pushError } from '@/Nav/Navegacion';
import { useTemaStore } from '@/store/TemaStore';
import { Image } from 'expo-image';
import { Button, Chip, DataTable, Divider, Icon, IconButton, Text } from 'react-native-paper';

export default function detalleProducto() {
  const { tema } = useTemaStore();
  const [producto, setProducto] = useState<DetalleProducto | undefined>(undefined);
  const info = useLocalSearchParams<{ id: string }>();
  const { productos, setProductos } = useCarritoStore();
  const router = useRouter();
  const params = useLocalSearchParams<{id:string,carrito:string}>()

  function accionConsultarDetalle(id: string) {
    consultarDetalle(id)
      .then((item) => {
        setProducto(item);
      })
      .catch(() => {
        pushError(
          router,
          'Error en la consulta de los detalles',
          'Algo salio mal en tu solicitud de infromacion de este producto'
        );
      });
  }

  function accionAñadirProducto(detalle: DetalleProducto) {
    const product = {
      id: detalle.detalleProducto.id,
      nombre: detalle.detalleProducto.nombre,
      marca: detalle.detalleProducto.marca,
      precio: detalle.detalleProducto.precio,
      estrellas: detalle.detalleProducto.estrellas,
      valoraciones: detalle.detalleProducto.valoraciones,
      imagen: detalle.detalleProducto.imagen,
      categoria: detalle.detalleProducto.categoria,
    };
    const listaNueva = [...productos, product];
    setProductos(listaNueva);
    router.back();
    router.back();
    router.push('tienda/carrito');
  }

  

  return (
    <>
    <Stack.Screen options={{
      headerTitle:()=>(<View>
        <Text variant='titleMedium' style={{color:tema.colors.onPrimary}}>{producto?.detalleProducto.nombre!==undefined?producto.detalleProducto.nombre:""}</Text>
        <Text variant='titleSmall' style={{color:tema.colors.onPrimary}}>{producto?.detalleProducto.marca!==undefined?producto.detalleProducto.marca:""}</Text>
        </View>),
      headerLeft:()=><IconButton icon={'arrow-left'} iconColor={tema.colors.onPrimary} onPress={()=>params.carrito!==undefined?router.push('/tienda/carrito'):router.back}/>
    }}>

    </Stack.Screen>
      {producto === undefined && <View className="flex-1" />}
      {producto !== undefined && (
        <View className="flex-1" style={{ backgroundColor: tema.colors.background }}>
          <Image
            source={{ uri: producto.detalleProducto.imagen }}
            className="w-full"
            style={{
              height: 250,
              backgroundColor: 'white',
              aspectRatio: 1,
            }}
          />
          <View style={{paddingVertical:5}}>
            <Text variant="titleLarge">{producto.detalleProducto.nombre}</Text>
            <View className="flex-row items-center justify-start">
              <Text variant="bodyMedium" style={{ color: tema.colors.onSurface }}>
                {producto.detalleProducto.marca}
              </Text>
              <Chip icon={producto.detalleProducto.categoria.icono}>
                {producto.detalleProducto.categoria.nombre}
              </Chip>
            </View>
            <Text variant="titleMedium" style={{ color: tema.colors.primary }}>
              {producto.detalleProducto.precio}
            </Text>
            <View className="flex-row items-center justify-start">
              {Array.from({ length: 5 }, (_, i) => (
                <Icon
                  key={i}
                  source={i < producto.detalleProducto.estrellas ? 'star' : 'star-outline'}
                  size={20}
                  color={tema.colors.primary}
                />
              ))}
              <Text variant="bodyMedium" style={{ color: tema.colors.onSurface }}>
                {producto.detalleProducto.valoraciones}
              </Text>
            </View>
            <View className="flex-row items-center justify-start">
              <Text>{producto.descripcion}</Text>
            </View>
            <Text variant="titleMedium">Caracteristicas</Text>
            <DataTable>
              {Object.keys(producto.caracteristicas).map((clave) => (
                <DataTable.Row key={clave}>
                  <DataTable.Cell>{clave}</DataTable.Cell>
                  <DataTable.Cell numeric>{producto.caracteristicas[clave]}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
            <Button mode="contained" onPress={() => accionAñadirProducto}>
              Añadir al Carrito
            </Button>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
