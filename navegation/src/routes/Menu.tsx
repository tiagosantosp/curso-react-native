import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
const Drawer = createDrawerNavigator();

export default (props: any) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={TelaA} />
      <Drawer.Screen name="Article" component={TelaB} />
    </Drawer.Navigator>
  );
}