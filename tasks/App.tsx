import 'react-native-gesture-handler';
import TaskList from './src/screens/TaskList';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontCarregada, setFonteCarregada] = useState(false) 

  useEffect(() => {
    async function carregar() {
      await Font.loadAsync({'Lato': require('./assets/fonts/Lato.ttf')})
      setFonteCarregada(true)
    }
    carregar()
  }, [])
  
  const onLayoutRootView = useCallback(async () => {
    if (fontCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fontCarregada]);

  if (!fontCarregada) {
    return null;
  }

  return (
    <TaskList layout={onLayoutRootView}/>
  );
}