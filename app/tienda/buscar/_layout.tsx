import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { useTemaStore } from '@/store/TemaStore'
import { IconButton } from 'react-native-paper'

export default function _layout() {

  const {tema} = useTemaStore()

  return (
    <Stack
    initialRouteName='tienda/buscar/buscador'>
      <Stack.Screen
        name='buscador'
        options={{
          title:"Buscador Producto",
          headerTintColor:tema.colors.onPrimary,
          headerLeft:()=><IconButton icon={'menu'} size={28} iconColor={tema.colors.onPrimary} onPress={()=>router.push('/menuLateral')}/>
      }}/>
      <Stack.Screen
        name='resultados'
        options={{
          title:'Resultado de busqueda',
          animation:'none'

        }}/>
        <Stack.Screen
        name='consulta'
        options={{
          title:'Resultado de busqueda',
          headerShown:false,
          presentation:'transparentModal',
          animation:'none'

        }}/>
        <Stack.Screen
        name='menuLateral'
        options={{
          title:'Resultado de busqueda',
          headerShown:false,
          presentation:'transparentModal',
          animation:'slide_from_left'

        }}/>
      
    </Stack>
  )
}

const styles = StyleSheet.create({})