import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'native-base';
import UserForm from '../views/UserForm';
import UserList from '../views/UserList';
import { MaterialIcons } from '@expo/vector-icons'

interface IProps {

}

const {Navigator, Screen }= createStackNavigator();

export default (props: IProps) => {
  return (
    <Navigator initialRouteName='UserList' screenOptions={screenOptions}>
      <Screen 
        name="UserList" 
        component={UserList} 
        options={({navigation}) =>{
          return {
            title: "Lista de Usuários",
            headerRight: () => (
              <Button 
              variant={'ghost'}  
              endIcon={<MaterialIcons name="add" size={24} color="white" />}  
              onPress={() => navigation.navigate("UserForm")}
              />
            )
          }
        }}
      />
      <Screen 
        name="UserForm" 
        component={UserForm} 
        options={{
          title: "Formulario de Usuários"
        }}
      />
    </Navigator>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#03e3fc'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}