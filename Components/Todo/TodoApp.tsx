import {View, Text, TextInput, Pressable, FlatList, Button} from 'react-native';
import React, {useState} from 'react';
import styles from './Todo';
import CheckBox from 'expo-checkbox';

const TodoApp = () => {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  const AddTodo = () => {
    setTodo(prevVal => [...prevVal, text]);
  };
  return (
    <View>
      <Text style={styles.headerText}>TodoApp</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={inputVal => setText(inputVal)}
        />
        <Pressable style={styles.pressable} onPress={AddTodo}>
          <Text style={styles.pressableText}>Add</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={todo}
          renderItem={({item}) => (
            <View>
              <CheckBox />
              <Text>{item}</Text>
              <Button title="Delete" />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default TodoApp;
