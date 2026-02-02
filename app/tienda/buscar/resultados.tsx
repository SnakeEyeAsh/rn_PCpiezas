import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useResultadoConsultaStore } from '@/store/ResulatdoConsultaStore'
import { Producto } from '@/model/Types';
import { useRouter } from 'expo-router';
import { useTemaStore } from '@/store/TemaStore';
import ProductoCard from '@/components/ProductoCard';


export default function resultados() {

  const {resultadoConsulta} = useResultadoConsultaStore();
  const {tema} = useTemaStore();
  const router = useRouter();


  function accionVerDetalle(p:Producto){
    router.push(`/tienda/buscar/${p.id}`)
  }

  return (
    <View className='flex-1' style={{backgroundColor:tema.colors.background}}>
      <FlatList
      data={resultadoConsulta}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=><ProductoCard producto={item} onPress={accionVerDetalle}/>}/>
    </View>
  )
}

const styles = StyleSheet.create({})