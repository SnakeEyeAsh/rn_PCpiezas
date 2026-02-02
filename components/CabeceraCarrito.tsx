import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'
import { useTemaStore } from '@/store/TemaStore'
import { Text } from 'react-native-paper'

type props ={
    total:number,
    accionComprar:()=>void
}

export default function CabeceraCarrito({total,accionComprar}:props) {

    const {tema} = useTemaStore();

  return (
    <Card style={{backgroundColor:tema.colors.primaryContainer}}>
        <Card.Content className='felx-row'>
            <View>
                <Text variant='labelMedium'>Total</Text>
                <Text variant='headlineSmall' style={{fontWeight:'bold'}}>{total}</Text>
            </View>
            <View>
                <Button mode='contained' icon={'credit-card'} onPress={accionComprar} textColor={tema.colors.onPrimary} style={{backgroundColor:tema.colors.onPrimary}}>
                    Comprar
                </Button>
            </View>
        </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({})