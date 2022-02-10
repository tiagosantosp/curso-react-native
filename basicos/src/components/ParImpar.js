import React from 'react'
import { Text, Button } from 'react-native'
import estilo from './estilo'

export default props => {
  if (props.num % 2 === 0) {
    return <Text style={estilo.min}>Par</Text>
  } else {
    return <Text style={estilo.min}>Impar</Text>
  }
}