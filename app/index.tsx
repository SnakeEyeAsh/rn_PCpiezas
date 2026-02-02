import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {Image} from 'expo-image'
import { useRouter } from 'expo-router'

export default function index() {

  const router = useRouter();

  function retarsarInicio(){
    setTimeout(()=>{router.replace('/tienda/inicio'),700})
  };

  useEffect(retarsarInicio,[]);

  return (
    <View className='flex-1 bg-/[#e8f7ff]'>
      <Image
      source={require('../logo.png')}
      style={{width:210,height:170}}
      /> 
    </View>
  )
}

const styles = StyleSheet.create({})