import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native-paper'

export default function error() {

  const error = useLocalSearchParams<{mensaje:string;descripcion?:string}>()
  return (
    <View>
      <Text variant='titleLarge'>Se ha producido un error</Text>
      <Text variant='bodyMedium'>{error.mensaje}</Text>
      {
        error.descripcion && (
          <View>
            <Text variant='titleLarge'>Detalle</Text>
            <Text variant='bodyMedium'>{error.descripcion}</Text>
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({})


