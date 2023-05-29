import {View, Button, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [name, setName] = useState('hi');
  const [age, setAge] = useState('bye');
  useEffect(() => {
    checkToken();
  }, []);
  const checkToken = async () => {
    await AsyncStorage.getItem('token').then(val => {
      if (val != null) {
        const res = JSON.parse(val);
        setName(res.Name);
        setAge(res.Age);
      }
    });
  };
  const goBack = async () => {
    const val = await AsyncStorage.getItem('token');
    await AsyncStorage.clear();
    if (val == null) {
      navigation.navigate('login');
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 50, color: 'black'}}>{name}</Text>
      <Text style={{fontSize: 50, color: 'black'}}>{age}</Text>
      <Button
        title="Logout"
        onPress={() => {
          AsyncStorage.clear();
          goBack();
        }}
      />
    </View>
  );
};

export default Home;
