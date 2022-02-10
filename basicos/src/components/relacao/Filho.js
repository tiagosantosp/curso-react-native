import React from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'

export default props => {
  return (
    <Text style={estilo.min}>
      {props.nome} {props.children}
    </Text>
  )
}