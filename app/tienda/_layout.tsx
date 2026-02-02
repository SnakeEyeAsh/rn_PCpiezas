import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { useTemaStore } from '@/store/TemaStore'
import { Badge, Icon } from 'react-native-paper'
import { useCarritoStore } from '@/store/CarritoStore'


export default function _layout() {

const {tema} = useTemaStore();

 const {productos} = useCarritoStore();

  return (
    <Tabs
    screenOptions={{
      headerTintColor:tema.colors.onPrimary,
      headerStyle:{
        backgroundColor:tema.colors.primary
      },
      tabBarActiveTintColor:tema.colors.primary,
      tabBarInactiveTintColor:tema.colors.onSurfaceVariant,
      tabBarStyle:{
        backgroundColor:tema.colors.surface,
        borderTopColor:tema.colors.outline
      }
    }}>

      <Tabs.Screen
      name='inicio'
      options={{
        title:"PC Pieza",
        tabBarIcon:({color,size})=>(<Icon source='home-outline' size={24} color='blue'/>),
        tabBarLabel:"Inicio"
      }}/>

      <Tabs.Screen
      name='buscar'
      options={{
        title:'Buscar',
        tabBarIcon:({color,size})=>(<Icon source='magnify' size={24} color='blue'/>),
        headerShown:false
      }}/>
      <Tabs.Screen
      name='carrito'
      options={{
        title:'Carrito',
        tabBarIcon:({color,size})=>(
          <View>
            <Icon source='cart-outline' size={24} color='blue'/>
            {
              productos.length>=0 &&(
                <Badge size={16} style={{
                  backgroundColor:tema.colors.tertiary,
                  position:'absolute',
                  marginTop:-4,
                  marginRight:10,
                }}>
                  {productos.length}
                </Badge>
              )
            }
          </View>
        ),
        
      }}/>
      <Tabs.Screen
      name='ajustes'
      options={{
        title:'Ajustes',
        tabBarIcon:({color,size})=>(<Icon source='tune-variant' size={24} color='blue'/>),
        
      }}/>
      
    </Tabs>
  )
}

const styles = StyleSheet.create({})