import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTemaStore } from '@/store/TemaStore';
import { Chip, Text } from 'react-native-paper';
import CategoriaCard from '@/components/CategoriaCard';

export default function inicio() {
  const { tema } = useTemaStore();
  return (
    <View style={{ backgroundColor: tema.colors.background, flex: 1 }}>
      <ScrollView>
        <Text variant="titleLarge" style={{ textAlign: 'center', margin: 20 }}>Somos los mejores!</Text>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
            <Chip icon="tag">Ofertas especiales</Chip>
            <Chip icon="wrench">Servicio técnico</Chip>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
            <Chip icon="magnify">Tenemos de todo</Chip>
            <Chip icon="account">Trato personal</Chip>
          </View>
        </View>
        <Text variant="titleLarge" style={{ marginLeft: 20, marginTop: 20 }}>Especialistas en</Text>
        <View style={{ padding: 20, gap: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <CategoriaCard nombre={'Ordenadores'} imagen={require('../../ordenadores.jpg')} />
            <CategoriaCard nombre={'Smartphones'} imagen={require('../../moviles.jpg')} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <CategoriaCard nombre={'Reparaciones'} imagen={require('../../reparaciones.jpg')} />
            <CategoriaCard nombre={'Accesorios'} imagen={require('../../accesorios.jpg')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
