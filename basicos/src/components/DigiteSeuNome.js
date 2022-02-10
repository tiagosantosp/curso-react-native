import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import estilo from './estilo'

export default props => {
  const [nome, setNome] = useState('teste')

  return (
    <>
      <View>
        <Text style={estilo.min}>{nome}</Text>
        <TextInput 
          placeholder='Digite seu Nome'
          value={nome}
          onChangeText={nome => setNome(nome)}
        />
      </View>
    </>
  )
}