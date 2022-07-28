import { Box, Button, Text } from "native-base"
import {View, StyleSheet} from 'react-native'
import { IPropsEl } from "../views/TelaA"

interface IProps {
  children: IPropsEl
  corFundo?: string
  corTexto?: string
  avancar: string
  navigation: {
    navigate: (tela: string) => void
  }
}

export default (props: IProps)  => {

  return(
    <View  style={{flex: 1, justifyContent: 'center',  alignItems:'center', backgroundColor:props.corFundo || '#000'}}>
      <View>
        {props.avancar && 
          <Button 
            onPress={() => {props.navigation.navigate(props.avancar) }}
          >
            Avançar
          </Button>
        }
      </View>
      <View style={{flex:1}}>
          {props.children}
      </View>
    </View>
  )
}
