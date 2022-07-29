import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider} from "native-base";
import Routes from "./src/routes";
import { UsersProvider } from "./src/redux/UserContext";

export default function App() {
  return (
    <UsersProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </NativeBaseProvider>
    </UsersProvider>
  );
}
