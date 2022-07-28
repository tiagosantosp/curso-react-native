import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

interface IProps {

}

const Tab = createBottomTabNavigator();

export default (props: IProps) => {
  return(
    <Tab.Navigator screenOptions={{tabBarLabelStyle: {fontSize:30}}}>
      <Tab.Screen name="TelaA" component={TelaA} />
      <Tab.Screen name="TelaB" component={TelaB} />
      <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
  )
}