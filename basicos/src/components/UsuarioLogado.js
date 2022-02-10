import React from 'react'
import { Text, Button } from 'react-native'
import estilo from './estilo'
import If from './if'

export default ({usuario = {}}) => {
  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text>Usuario Logado:</Text>
        <Text style={estilo.min}>{usuario.nome} - {usuario.email}</Text>
      </If>
    </>
  )
}