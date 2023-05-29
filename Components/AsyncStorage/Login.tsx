import {View, Text, TextInput, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStyle from './Asyc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const CreateToken = async () => {
    const value = {
      Name: name,
      Age: age,
    };
    try {
      const val = await AsyncStorage.setItem('token', JSON.stringify(value));
      navigation.navigate('home');
    } catch (error) {
      console.log(error);
    }
  };
  const check = async () => {
    const getToken = await AsyncStorage.getItem('token');
    console.log(getToken);
    if (getToken != null) {
      navigation.navigate('home');
    }
  };
  useEffect(() => {
    check();
  }, []);
  return (
    <View style={AsyncStyle.container}>
      <Text style={AsyncStyle.headerText}>Async Storage</Text>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdw9E-NGy3W1YQcI0q418d0AY6Wqu9SuN9GB8MDy6jA&s',
        }}
        style={AsyncStyle.imageSize}
      />
      <TextInput
        style={AsyncStyle.name}
        placeholder="Name"
        onChangeText={val => setName(val)}
      />
      <TextInput
        style={AsyncStyle.age}
        placeholder="Age"
        onChangeText={val => setAge(val)}
      />
      <Pressable style={AsyncStyle.loginBtn} onPress={CreateToken}>
        <Text style={AsyncStyle.loginText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
