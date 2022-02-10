import React from 'react'
import { Text, Button, FlatList } from 'react-native'
import estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
  return (
    <>
      <Text style={estilo.min}>Lista de Produtos</Text>
      <FlatList
        data={Produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={({item : p}) =>{
          return <Text>{p.id}) {p.nome} R$ {p.preco}</Text>
        }}
      />
    </>
  )
}