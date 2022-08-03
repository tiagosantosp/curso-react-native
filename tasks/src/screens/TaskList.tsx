import { ImageBackground, Text, View, StyleSheet } from "react-native"
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import CommonStyle from '../CommonStyles'
import {ITaskList} from '../types/ITaskList.type'
import Task from "../components/Task"



export default (props: ITaskList) => {
  const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

  return (
    <View style={styles.container} onLayout={props.layout}>
      <ImageBackground 
        source={todayImage}
        style={styles.background}
      >
        <View style={styles.titleBar}>
          <Text style={styles.title}>Hoje</Text>
          <Text style={styles.subtitle}>{today}</Text>
        </View>
      </ImageBackground>
      <View style={styles.taskList}>
        <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}/>
        <Task desc="Ler Livro" estimateAt={new Date()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  background: {
    flex: 3
  },
  taskList: {
    flex: 7
  },
  titleBar:{
    flex: 1,
    justifyContent: "flex-end"
  },
  title: {
    fontFamily: 'Lato',
    fontSize: 50,
    color: CommonStyle.colors.secondary,
    marginLeft: 20,
    marginBottom: 20
  },
  subtitle: {
    fontFamily: 'Lato',
    fontSize: 20,
    color: CommonStyle.colors.secondary,
    marginLeft: 20,
    marginBottom: 30
  }
})