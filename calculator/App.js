import React, { Component, useState,} from 'react';
import {  SafeAreaView,  StyleSheet,  View,} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}

const App = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setarOperations] = useState(null)
  const [values, setValues] = useState([0,0])
  const [current, setCurrent] = useState(0)

  

  addDigit = n => {
    const limparTela = displayValue === '0' || clearDisplay
    
    if (n === '.' && !limparTela && displayValue.includes('.')) return;
    
    const valorAtual = limparTela ? '' : displayValue 
    const valorTela = valorAtual + n
    setDisplayValue(valorTela) 
    setClearDisplay(false)

    if (n !== '.') {
      const novoValor = parseFloat(valorTela)
      const valores = [...values]
      valores[current] = novoValor
      setValues(valores)
    }
  }
 
  clearMemory = () => {
    setDisplayValue(initialState.displayValue)
    setClearDisplay(initialState.clearDisplay)
    setarOperations(initialState.operation)
    setValues(initialState.values)
    setCurrent(initialState.current)
  }

  setOperation = operador => {
    if (current === 0) {
      setarOperations(operador)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      const equals = operador === '='
      const valores = [...values]
      try{
        valores[0] = eval(`${valores[0]} ${operation} ${valores[1]}`)
      } catch (e) {
        valores[0] = values[0]
      }

      valores[1] = 0
      setDisplayValue(`${valores[0]}`)
      setarOperations(equals ? null : operador)
      setCurrent(equals ? 0 : 1)
      // setClearDisplay(!equals)
      setClearDisplay(true)
      setValues(valores)

    }
  }
  return (
  <SafeAreaView style={styles.container}>
      <Display value={displayValue}/>
      <View style={styles.button}>
        <Button label='AC' ac triple onClick={clearMemory}/>  
        <Button label='/' operation onClick={setOperation}/>  
        <Button label='7' onClick={addDigit}/>  
        <Button label='8' onClick={addDigit}/>  
        <Button label='9' onClick={addDigit}/>  
        <Button label='*' operation onClick={setOperation}/>  
        <Button label='4' onClick={addDigit}/>     
        <Button label='5' onClick={addDigit}/>    
        <Button label='6' onClick={addDigit}/>    
        <Button label='-' operation onClick={setOperation}/>  
        <Button label='1' onClick={addDigit}/>    
        <Button label='2' onClick={addDigit}/>    
        <Button label='3' onClick={addDigit}/>    
        <Button label='+' operation onClick={setOperation}/>  
        <Button label='0' double onClick={addDigit}/>
        <Button label='.' onClick={addDigit}/>  
        <Button label='=' operation onClick={setOperation}/>  
      </View>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  }
});

export default App;