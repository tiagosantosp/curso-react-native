import React from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
  return (
    <>
      <Text style={estilo.min}>Lista de Produtos</Text>
      {Produtos.map(p => <Text key={p.id}>{p.id}) {p.nome} tem R$ {p.preco}</Text>)}
    </>
  )
}