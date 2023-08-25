import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Pressable
} from "react-native";
import {StatusBar} from 'expo-status-bar';
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";



export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function clearInput(){
    setEnteredGoalText('');
  }
  function addGoalHandler() {
   
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    clearInput();  
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
        return currentCourseGoals.filter((goal)=> goal.id !== id );

    }) 
  }

  function startAddGoalHandler() {
    setmodalIsVisible(true)
  }

  function endAddGoalHandler() {
    setmodalIsVisible(false)
    clearInput(); 
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <View style={styles.buttonAdd}>
      <Button title='Add New Goal' color={'#a065ec'} onPress={startAddGoalHandler} />
      </View>
      <GoalInput 
          goalInputHandler={goalInputHandler} 
          addGoalHandler={addGoalHandler} 
          enteredGoalText={enteredGoalText} 
          visible={modalIsVisible} 
          close={endAddGoalHandler}/>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem 
                   text={itemData.item.text} onDeleteItem={deleteGoalHandler}
                   id={itemData.item.id}
                   />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBouceVertical={false}

      />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:'#1e085a'
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  buttonAdd:{
    marginBottom:8
  }
 
});
