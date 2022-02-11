import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import estilo from '../estilo'

export default ({num}) => {
  return (
    <View style={style.container}>
      <Text style={[estilo.min, style.num]}>
        {num}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    height: 55,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'    
  },
  num: {
    color: '#fff',
    margin:0,
    padding: 0
  }
})