import { StyleSheet, useWindowDimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { ActivityIndicator, Card, withTheme } from 'react-native-paper';
import { useConsulta } from '@/store/ConsultaSotre';
import { useResultadoConsultaStore } from '@/store/ResulatdoConsultaStore';
import { buscarProductos } from '@/helpers/ProductosAPI';
import { replaceError } from '@/Nav/Navegacion';
import { Text } from 'react-native-paper'
import { useTemaStore } from '@/store/TemaStore';

export default function consulta() {
  const {tema} = useTemaStore()
  const tamañpPantalla = useWindowDimensions();
  const desplazamiento = useSharedValue(tamañpPantalla.height * 0.5);
  const router = useRouter();
  const { consulta, setConsulta } = useConsulta();
  const { setResultadoConsulta } = useResultadoConsultaStore();
  function aparecerModal() {
    desplazamiento.value = withTiming(0, { duration: 300 });
  }

  function accionBuscarProducto() {
    buscarProductos(consulta)
      .then((respuesta) => {
        setResultadoConsulta(respuesta);
        router.replace('/tienda/buscar/resultado')
      })
      .catch(()=>{
        replaceError(router,'Error al consultar datos','Hubo un error inesperado en la espera de los resultados de busqueda')
      });
  }

  useEffect(aparecerModal, []);
  useEffect(accionBuscarProducto,[])

  return (
    <View className='flex-1 justify-center items-center' style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
      <Card 
      style={{backgroundColor:tema.colors.onSurface,
      padding:24,justifyContent:'center',
      alignItems:'center',
      borderRadius:tema.roundness}}>
          <ActivityIndicator size={'large'} color={tema.colors.primary}/>
          <Text variant='titleMedium' style={{color:tema.colors.onSurface}}>Cargando</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
