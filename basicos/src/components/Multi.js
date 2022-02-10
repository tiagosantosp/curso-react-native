import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Componente1() {
  return <Text style={style.App}>Comp #Oficial</Text>;
}

export function Componente2() {
  return <Text style={style.cp2}>Comp 2</Text>;
}

export function Componente3() {
  return <Text style={style.cp3}>Comp 3</Text>;
}

const style = StyleSheet.create({
  App: {
    backgroundColor: '#a00',
  },
  cp2: {
    backgroundColor: '#FFF',
  },
  cp3: {
    backgroundColor: '#A17',
  },
});
