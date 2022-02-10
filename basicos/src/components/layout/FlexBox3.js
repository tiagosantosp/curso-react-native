import React from 'react'
import { View, StyleSheet } from 'react-native'
// import estilo from './estilo'
import Quadrado from './Quadrado'

export default props => {
  return (
    <View  style={style.FlexV1}>
      <Quadrado/>
      <Quadrado cor='#900'/>
      <Quadrado cor='#090'/>
      <Quadrado cor='#009'/>
      <Quadrado cor='#ff801a'/>
    </View>
  )
}

const style = StyleSheet.create({
  FlexV1: {
    width: '100%',
    backgroundColor: 'pink',
    justifyContent: 'space-between',
    alignItems: 'center'
    

  }
})