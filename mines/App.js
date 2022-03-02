import React, { Component } from 'react';
import params from './src/Params'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MineField from './src/Components/MineField';
import { createMinedBoard } from './src/functions';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.createState()
  }
  
  minesAmount = () => {
    const cols = params.getColumsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }
  
  createState = () => {
    const cols = params.getColumsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }


  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}> Tamanho da grade:
          {params.getRowsAmount()} X {params.getColumsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board}/>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor:'#AAA'
  }
 
});
