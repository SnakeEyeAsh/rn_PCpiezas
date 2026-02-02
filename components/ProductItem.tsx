import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Producto } from '@/model/Types';
import { Button, Card, Text } from 'react-native-paper';
import { useTemaStore } from '@/store/TemaStore';
import {Image} from 'expo-image';
type props = {
  producto: Producto;
  accionRetiraraProducto: (p:Producto) => void;
  accionVerDetalle: ()=>void;
};

export default function ProductItem({ producto, accionRetiraraProducto, accionVerDetalle }: props) {
  const { tema } = useTemaStore();

  return (
    <Card style={{ backgroundColor: tema.colors.surface }}>
      <Card.Content className='flex-row justify-center'>
            <Image
            source={{uri:producto.imagen}}
            style={{
                width:80,
                height:80,
                borderRadius:8,
            }}/>
            <View>
                <Text variant='titleMedium' style={{color:tema.colors.onSurface}}>{producto.nombre}</Text>
                <Text variant='titleMedium'>{producto.precio}</Text>
            </View>
      </Card.Content>
      <Card.Actions>
            <Button icon={'eye'} onPress={accionVerDetalle} textColor={tema.colors.primary} >Detalle</Button>
            <Button icon={'delete'}
            onPress={()=>accionRetiraraProducto(producto)}
             textColor={tema.colors.tertiary}
              buttonColor={tema.colors.tertiaryContainer}>Quitar</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({});
