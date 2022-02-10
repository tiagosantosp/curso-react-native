import React from 'react'
// import { Text, Button } from 'react-native'
// import estilo from './estilo'
import Filho from './filho'

export default props => {
  let x = 13
  let y = 100
  return (
    <>
      <Filho a={x} b={y}/>
      <Filho a={x + 10} b={y - 50}/>
    </>
  )
}