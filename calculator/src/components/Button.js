import React  from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native'


export default props => {
  // APLICANDO CLASSES DE FORMAS CONDICIONAIS
  const stylesButton = [styles.button]
  if (props.double) stylesButton.push(styles.buttonDouble)
  if (props.triple) stylesButton.push(styles.buttonTriple)
  if (props.operation) stylesButton.push(styles.operationButton)
  if (props.ac) stylesButton.push(styles.ac)

  
  return (
      <TouchableHighlight onPress={() => props.onClick(props.label)}>
        <Text style={stylesButton}>{props.label}</Text>
      </TouchableHighlight>
  )
}

// APLICANDO ESTILOS
const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#c1dff7',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    color: '#999'
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#73b8f0'
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
  ac: {
    color: '#000',
    fontWeight: '100'
  }
})