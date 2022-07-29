import {  FlatList,  Text,  VStack,  Box,  HStack,  Avatar, Button,} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { useContext } from "react";
import UserContext from "../redux/UserContext";


interface IProps {}

interface IUser {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

export default (props: IProps) => {
  const {state, dispatch} = useContext(UserContext)


  const deleteUser = (user) => {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',
    [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user

          })
        }
      },
      {
        text: 'Não'
      }
    ])
  } 

  const getUserItem = ({ item: users }) => {
    return (
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: "muted.50",
        }}
        borderColor="muted.300"
        pl={["0", "4"]}
        pr={["0", "5"]}
        py="2"
        
      >
        <HStack space={[2, 2]} justifyContent="space-between" >
          <HStack onTouchStart={() => props.navigation.navigate("UserForm", users)}>
            <Avatar
              size="48px"
              source={{
                uri: users.avatarUrl,
              }}
            />
            <VStack ml={3}>
              <Text
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                bold
              >
                {users.name}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                {users.email}
              </Text>
            </VStack>
          </HStack>
          <HStack>
            <Button
              variant={"ghost"}
              endIcon={<MaterialIcons name="edit" size={24} color="#b9e8b5" />}
              onPress={() => props.navigation.navigate("UserForm", users)}
            />
            <Button
              variant={"ghost"}
              endIcon={<MaterialIcons name="delete" size={24} color={"#fa707e"} />}
              onPress={() => deleteUser(users)}
            />
          </HStack>
        </HStack>
      </Box>
    );
  };

  return (
    <VStack>
      <FlatList
        data={state.users}
        keyExtractor={(users) => users.id.toString()}
        renderItem={getUserItem}
      />
    </VStack>
  );
};
