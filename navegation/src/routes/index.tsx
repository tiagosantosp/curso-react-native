import { Text, SafeAreaView } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import Stack from "./Stack";

interface IProps {

}


export default (props: IProps) => {
  return(
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
    </SafeAreaView>
  )
}