import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import estilo from '../estilo'

export default props => {
  return (
    <View style={style.display}>
      <Text style={[estilo.min, style.displayText] }>
        {props.num}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  display: {
    backgroundColor: '#000',
    padding: 20  
  },
  displayText: {
    color: '#fff'
  }
})