import React from 'react';
import params from './src/Params'
import Field from './src/Components/Field';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.instructions}> Tamanho da grade:
        {params.getRowsAmount()} X {params.getColumsAmount()}</Text>
      <Field/>
      <Field opened />
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={4}/>
      <Field opened nearMines={7}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333'
  },
  instructions: {
    color: '#777'
  }

 
});

export default App;
