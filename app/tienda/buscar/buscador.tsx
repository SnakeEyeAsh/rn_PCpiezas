import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useConsulta } from '@/store/ConsultaSotre';
import { router } from 'expo-router';
import { useTemaStore } from '@/store/TemaStore';
import { Icon, List, Searchbar, TextInput, Text, Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker'
import { CATEGORIAS } from '@/model/Types';
import RangeSlider from 'rn-range-slider';

export default function buscador() {

  
  const {tema} = useTemaStore()

  const [textoConsulta,setTextoConsulta] = useState("");
  const [marca,setMarca] = useState("");
  const [categoriaId,setCategoriaiD] = useState<string|undefined>(undefined);
  const [precioHabilitado,setPrecioHabilitado] = useState(false);
  const [precioMin,setPrecioMin] = useState(0);
  const [precioMax,setPrecioMax] = useState(2000);

  const {consulta,setConsulta} = useConsulta();

  function prepararConsulta(){
    const consulta = {
      texto:textoConsulta,
      marca:marca,
      precioMin:precioMin,
      precioMax:precioMax,
      categoriaId:categoriaId,
    }
    setConsulta(consulta);
  }
  function resetarFormulario(){
    setTextoConsulta("");
    setMarca("");
    setPrecioMax(0);
    setPrecioMin(2000);
    setCategoriaiD(undefined);
  }

  function accionRealizarConsulta(){
    prepararConsulta();
    resetarFormulario();
    router.push('/tienda/buscar/consulta')
  }
  return (
    <View style={{backgroundColor:tema.colors.background}} className='p-16 justify-center'>
      <Searchbar 
      placeholder='¿Que estas buscabdo?'
      value={textoConsulta}
      onChangeText={setTextoConsulta}
      onSubmitEditing={accionRealizarConsulta}
      icon={'magnify'}/>
      <List.Accordion
      title='Busqueda Avanzada'
      left={()=><Icon source={'filter-variant'} size={12} color='blue'/>}
      >
        <View>
          <TextInput mode='outlined' value={marca} onChangeText={setMarca}/>
          <Text variant='labelMedium' style={{color:tema.colors.onSurfaceVariant}}>Categoría</Text>
          <View className='border' style={{borderColor:tema.colors.outline, borderRadius:tema.roundness}}>
            <Picker onValueChange={setCategoriaiD}>
              <Picker.Item value={undefined} label='Todas'/>
              {
                CATEGORIAS.map((item)=>
                  (<Picker.Item value={item.id} label={item.nombre}/>))
              }
            </Picker>
            <View className='flex-column justify-center'>
              <Checkbox disabled={precioHabilitado} color={tema.colors.primary} status='checked'/>
              <Text variant='labelMedium'>Precio {precioMin} - {precioMax}</Text>
              <RangeSlider 
              disabled={precioHabilitado}
              min={0}
              max={2000}
              step={10}
              low={precioMin}
              high={precioMax}
              onValueChanged={(low,high)=>{setPrecioMin(low)
                setPrecioMax(high)
              }}
              renderThumb={(name)=>(<View style={{width:20,height:20,
                backgroundColor:precioHabilitado?tema.colors.primary:tema.colors.surfaceVariant
              }}/>)}
              renderRail={()=><View style={{height:4,borderRadius:2,backgroundColor:tema.colors.surfaceVariant}}/>}
              renderRailSelected={()=><View style={{height:4,borderRadius:2,
              backgroundColor:precioHabilitado?tema.colors.primary:tema.colors.surfaceVariant}}/>}/>
            </View>
          </View>
        </View>
      </List.Accordion>
    </View>
  )
}

const styles = StyleSheet.create({})