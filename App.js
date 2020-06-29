import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import Sandbox from './components/Sandbox';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key))
  }

  const addTask = (task) => {
    if (task.length > 3) {
      setTodos([{ text: task, key: Math.random().toString() }, ...todos])
    } else {
      task.length ===  0 ? Alert.alert('Oops', 'New task should have over 3 chars') :       
      Alert.alert('Oops', `${task} is not long enough.\nNew task shoudl be over 3 chars`, [
        { text: 'Got it', onPress: () => console.log('alert closed') },
        { text: 'Add anyway', onPress: () => console.log('alert closed') },
      ])
    }
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback 
       onPress = {() => { Keyboard.dismiss() }} 
       >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoForm
            addTask={addTask}
          />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  pressHandler={pressHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    padding: 40,
    justifyContent: 'center',
  },
  list: {
    flex:1,
    marginTop: 20,
  },
});