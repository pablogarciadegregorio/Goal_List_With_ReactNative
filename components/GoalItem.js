import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {

  return (

    
      <View style={styles.goalItem}>
        <Pressable onPress={props.onDeleteItem.bind(this,props.id)} android_ripple={{color:'#290b52'}}>
        <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    

  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    marginTop: 16,
    
    backgroundColor: "#5e0acc",
    color: "white",
    borderRadius: 6,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
