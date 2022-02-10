import {Text, Button} from 'react-native';
import React, { useState } from 'react';
import estilo from './estilo';

export default props => {
  const [numero , setNum] = useState(0)
  function teste(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  return (
    <>
    <Text style={estilo.min}>Num aleatorio: 
      {teste(props.min, props.max)}
    </Text>

    <Text style={estilo.min}>: {numero}</Text>
    <Button
      title="Press me"
      onPress={() => setNum(numero + 1)}
    />
    
    </>
  )
};
