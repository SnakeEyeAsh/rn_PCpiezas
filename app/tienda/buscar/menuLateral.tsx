import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useConsulta } from '@/store/ConsultaSotre';
import { CATEGORIAS, Categoria, Consulta } from '@/model/Types';
import { useTemaStore } from '@/store/TemaStore';
import { List, Text } from 'react-native-paper'

export default function menuLateral() {
  
  const {tema} = useTemaStore();
  const tamañpPantalla = useWindowDimensions();
  const desplazamiento = useSharedValue(tamañpPantalla.height * 0.5);
  const router = useRouter();
  const {consulta,setConsulta} = useConsulta();

  function consultarCategoria(c:Categoria){
    const consulta:Consulta = {
       texto:"",
        marca:"",
        precioMin:0,
        precioMax:0,
        categoriaId:c.id
    }
  }

  function aparecerModal() {
    desplazamiento.value = withTiming(0, { duration: 300 });
  }



  useEffect(aparecerModal, []);
  return (
    <View className='flex-1 flex-row'>
      <View className='w-/[60%] h-full justify-center' style={{backgroundColor:tema.colors.surface, borderTopEndRadius:12,borderBottomEndRadius:12}}>
      <Text variant='titleLarge' style={{fontWeight:'bold', color:tema.colors.primary, textAlign:'center'}}>Categorías</Text>

      {CATEGORIAS.map((c) => (
        <List.Item
          key={c.id}
          title={c.nombre}
          left={(props) => <List.Icon {...props} icon={c.icono} />}
          onPress={() => consultarCategoria(c)}
        />
      ))}
      </View>
      <Pressable onPress={router.back}/>
    </View>
  );
}

const styles = StyleSheet.create({});
