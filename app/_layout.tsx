import '../global.css';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import { PaperProvider, useTheme } from 'react-native-paper';
import { temaClaro } from '@/themes/TemaClaro';
import { temaOscuro } from '@/themes/TemaOscuro';
import { useCarritoStore } from '@/store/CarritoStore';

export default function _layout() {

  const tema = useColorScheme() === 'dark' ? temaOscuro : temaClaro;

  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}
      initialRouteName='index'>

        <Stack.Screen name="tienda/" 
        options={{
          animation:'fade'
        }}/>


      </Stack>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
