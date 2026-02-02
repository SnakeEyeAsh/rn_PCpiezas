import { ImageSourcePropType, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper'
import { useTemaStore } from '@/store/TemaStore'

export default function CategoriaCard({nombre, imagen}: {nombre: string, imagen: ImageSourcePropType}) {
    const {tema} = useTemaStore()
  return (
    <Card style={{backgroundColor: tema.colors.surface, width: '48%'}}>
        <Card.Cover
        source={imagen}
        resizeMode='cover'
        style={{height: 120}}/>
        <Card.Content style={{paddingVertical: 8}}>
            <View>
                <Text variant='titleMedium' style={{color: tema.colors.onSurface, textAlign: 'center'}}>{nombre}</Text>
            </View>
        </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({})
