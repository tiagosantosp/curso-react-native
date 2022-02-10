import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default props => {
  return (
    <View style={style.view}>
      <Button style={style.btn} title="+" onPress={props.inc} />
      <Button style={style.btn} title="-" onPress={props.dec} />
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',    
  },
  btn: {
    margin: 5,
    padding: 20    
  }

})