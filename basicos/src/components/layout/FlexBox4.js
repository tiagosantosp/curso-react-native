import React from 'react'
import { View, StyleSheet } from 'react-native'
// import estilo from './estilo'
import Quadrado from './Quadrado'

export default props => {
  return (
    <View  style={style.FlexV4}>
      <View style={style.v0}/>
      <View style={style.v1}/>
      <View style={style.v2}/>
    </View>
  )
}


// FLEX GROW divide o espaço a ser ocupado
const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000'    
  },
  v0: {
    height: 300,
    backgroundColor: '#36c9a7'
  },
  v1: {
    flexGrow: 9,
    backgroundColor: '#ff801a'
  },
  v2: {
    flexGrow: 1,
    backgroundColor: '#dd22c1'
  }
})