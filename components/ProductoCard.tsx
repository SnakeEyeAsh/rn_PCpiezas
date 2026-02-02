import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { Producto } from '@/model/Types';
import { Badge, Card, Icon, Text } from 'react-native-paper';
import { useTemaStore } from '@/store/TemaStore';

export default function ProductoCard({producto, onPress}: {producto: Producto, onPress: (P: Producto) => void}) {
  const { tema } = useTemaStore();

  return (
    <Pressable onPress={()=>onPress(producto)}>
      <Card className="mx-12 my-8" style={{ borderRadius: 12 }}>
        <Card.Cover
          source={{ uri: producto.imagen }}
          style={{
            aspectRatio: 1,
            height: 180,
            backgroundColor: 'white',
          }}
        />
        <Card.Content>
          <View className='flex-row justify-between items-center'>
            <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
              {producto.nombre}
            </Text>
            <Badge style={{ paddingHorizontal: 8 }}>{producto.categoria.nombre}</Badge>
          </View>
          <Text variant="titleSmall" style={{ backgroundColor: tema.colors.onSurface }}>
            {producto.marca}
          </Text>
          <View className='flex-row justify-between items-center'>
            <Text variant="titleMedium" style={{ color: tema.colors.tertiary }}>
              {producto.precio}
            </Text>
            <View>
              <Icon source="star" size={16} color="yellow" />
              <Text variant="titleMedium">
                {producto.estrellas.toFixed(1)}
                {'(' + producto.valoraciones + ')'}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
