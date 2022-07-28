import { View, Text } from "react-native"


interface IProps {
  children?: string
  corFundo?: string
  corTexto?: string
}

export default (props:any)  => {
  return(
    <View style={{flex:1, justifyContent : 'center', alignItems: 'center', backgroundColor: props.corFundo || '#000'}}  >
      <Text style={{fontSize: 50}}>{props.children}</Text>
    </View>
  )
}