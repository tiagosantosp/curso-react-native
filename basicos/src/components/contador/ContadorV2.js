import React, { useState } from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import ContadorBotao from './ContadorBotao'
import ContadorDisplay from './ContadorDisplay'

export default props => {
  const [num, setNum] = useState(0)

  const inc = () => setNum(num + 1)
  const dec = () => setNum(num - 1)

  return (
    <>
      <Text style={estilo.min}>
        Contador 
      </Text>
      <ContadorDisplay num={num}/>
      <ContadorBotao inc={inc} dec={dec}/>
    </>
  )
}