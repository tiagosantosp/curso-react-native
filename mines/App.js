import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button} from 'react-native';
import MineField from './src/components/MineField';
import params from './src/params';
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag, 
  flagsUsed
} from './src/functions';
import React, { useState} from 'react';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';



minesAmout = () => {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()
  return Math.ceil(cols * rows * params.difficultLevel)
}

createState = () => {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()
  return createMinedBoard(rows, cols, minesAmout())
}


export default function App(props) {
  const [board, setBoard] = useState(createState())
  const [won, setWon] = useState(false)
  const [lost, setLost] = useState(false)
  const [showLevelSelection, setShowLevelSelection] = useState(false)


  
  const onOpenField = (row, column) => {
     const boardClone = cloneBoard(board)
     openField(boardClone, row, column)
     const lost = hadExplosion(boardClone)
     const won = wonGame(boardClone)

     if (lost) {
      showMines(boardClone)
      Alert.alert('Perdeuuuu', 'Que burrrrrrro!')
     }

     if (won) {
      Alert.alert('Parabéns', 'Você venceu!!!')
     }

     setBoard(boardClone)
     setWon(won)
     setLost(lost)
    }
    
    const onSelectField = (row, column) => {
      const boardClone = cloneBoard(board)
      invertFlag(boardClone, row, column)
      const won = wonGame(boardClone)
      
      if (won) {
        Alert.alert('Parabéns', 'Você venceu!!!')
      }
      
      
      setBoard(boardClone)
      setWon(won)
  }

  const onLevelSelected = (level) => {
    params.difficultLevel = level
    setBoard(createState())
  }


  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LevelSelection 
        isVisible={showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelection(false)}
      />
      <Header 
        flagsLeft={minesAmout() - flagsUsed(board)}
        onNewGame={() => setBoard(createState())}
        onFlagPress={() => setShowLevelSelection(true) }
      />
      <View style={styles.board} >
        <MineField 
          board={board} 
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-end'

  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
