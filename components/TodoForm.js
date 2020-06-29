import React, {useState} from 'react';
import {View, Text, TextInput,StyleSheet, Button} from 'react-native'


export default function TodoForm ({addTask}) {
  const [task, setTask]  = useState('')

  return ( 
    <View>
      <TextInput
          placeholder = 'Add a new task ...' 
          style = {styles.task}
          onChangeText = {(val) => setTask(val)}
          value = {`${task}`}  
          />
        <Button 
          onPress = {() => { addTask(task) , setTask('') } }
            title = 'Add Task'
            color = 'coral'
          /> 
    </View>
   );
}

const styles = StyleSheet.create({
  task: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 0.7,
    borderBottomColor: '#ddd',
  }
})
 