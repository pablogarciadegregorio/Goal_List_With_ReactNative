import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

export default function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>

        <Image source={require('../assets/img/goal.png')} style={styles.img}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={props.goalInputHandler}
          value={props.enteredGoalText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Add Goal" onPress={props.addGoalHandler} color={'#5e0acc'} />
            </View>
            <View style={styles.button}>
            <Button title='cancel'onPress={props.close} color={'#f31282'}/>
            </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    img:{
        width:100,
        height:100,
        margin:20

    },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius:6,
    backgroundColor:"#e4d0ff",
    color:'#120438',
    width: "100%",
    padding: 16
  },
  inputContainer: {
    flex: 1,
    backgroundColor:'#311b6b',
    padding:16,
    justifyContent: "center",
    alignItems: "center"
   
    
  },
  buttonContainer:{
    flexDirection: 'row',
    marginTop:16
  },
  button:{
    width: '100',
    marginHorizontal: 8
  }
});
