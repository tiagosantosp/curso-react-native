import React from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import Stack from "./src/routes/Stack";
import Tab from "./src/routes/Tab";
import 'react-native-gesture-handler';





import Menu from "./src/routes/Menu";


export default function App() {
  return (
    <NativeBaseProvider >
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Menu/>       
      </NavigationContainer>
    </SafeAreaView>
    </NativeBaseProvider>
  );
}

