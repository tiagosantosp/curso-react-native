import { View, Text, StyleSheet } from "react-native";
import { ITask } from "../types/ITask.type";
import Icon from "@expo/vector-icons/FontAwesome";

import moment from "moment";
import "moment/locale/pt-br";
import CommonStyles from "../CommonStyles";

export default (props: ITask) => {
  const doneOrNotStyle: object = props.doneAt != null ? {textDecorationLine: 'line-through'} : {}
  const data = props.doneAt ? props.doneAt : props.estimateAt
  const formattedDate = moment(data).locale("pt-br").format("ddd, D [de] MMMM")



  const getCheckView = (doneAt: Date | null | undefined) => {
    if (doneAt != null) {
      return (
        <View style={styles.done}>
          <Icon name="check" size={20} color='#FFF'/>
        </View>
      )
    } else {
      return <View style={styles.pending}></View>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      <View>
        <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
        <Text style={styles.date}>
          {formattedDate}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#AAA",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  checkContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#555",
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4d7031',
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    fontFamily: 'Lato',
    color: CommonStyles.colors.mainText,
    fontSize: 15
  },
  date: {
    fontFamily: 'Lato',
    color: CommonStyles.colors.subText
  }
});
