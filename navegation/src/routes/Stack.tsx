import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

interface IProps {

}

const Stack = createNativeStackNavigator();

export default (props: IProps) => {
  return(
    <Stack.Navigator initialRouteName='TelaA'>
      <Stack.Screen 
        name='TelaA'
        component={TelaA}
        options={{title: 'Inicial'}}

      />
      <Stack.Screen name='TelaB' component={TelaB}/>
      <Stack.Screen name='TelaC' component={TelaC}/>
    </Stack.Navigator>
  )
}