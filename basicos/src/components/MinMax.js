import {Text} from 'react-native';
import React from 'react';
import estilo from './estilo';

export default props => {
  return (
    <Text style={estilo.min}>
      O valor {props.max} é maior que o valor {props.min} a soma é
      {props.min + props.max}
    </Text>
  );
};
