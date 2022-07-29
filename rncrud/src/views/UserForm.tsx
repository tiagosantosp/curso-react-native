import { Input, VStack, Icon, Text, Button } from "native-base"
import { MaterialIcons } from '@expo/vector-icons' 
import { useContext, useState } from "react"
import UserContext from "../redux/UserContext"



export default ({route, navigation}) => {
  const [user,setUser] = useState(route.params ? route.params : {} )
  const {dispatch} = useContext(UserContext)

  return(
    <VStack p={10}>
      <Text>Nome</Text>
      <Input 
        my={3}
        w={{base: "100%",md: "25%"}} 
        InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} 
        placeholder="Name" 
        variant={'outline'}
        onChangeText={name => setUser({...user, name})}
        value={user.name}
      />
      <Text>Email</Text>
      <Input 
        my={3}
        w={{base: "100%",md: "25%"}} 
        InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />} 
        placeholder="Email" 
        variant={'outline'}
        onChangeText={email => setUser({...user, email})}
        value={user.email}
      />
      <Text>URL do Avatar</Text>
      <Input 
        my={3}
        w={{base: "100%",md: "25%"}} 
        InputLeftElement={<Icon as={<MaterialIcons name="image" />} size={5} ml="2" color="muted.400" />} 
        placeholder="image" 
        variant={'outline'}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        value={user.avatarUrl}
      />
      <Button
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user
          }) 
          navigation.goBack()
        }}
        mt={4}
      >Salvar</Button>
    </VStack>
  )
}