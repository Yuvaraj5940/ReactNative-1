import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecendPage = () => {
  const [Name, setName] = useState('');
  const [Age, setAge] = useState(null);
  const [Email, setEmail] = useState('');
  const [Pswld, setPswld] = useState('');

  const GetItem = async () => {
    const n = await AsyncStorage.getItem('user');
    let newres = await JSON.parse(n);

    setName(newres.name);
    setAge(newres.age);
    setEmail(newres.email);
    setPswld(newres.passsword);
    console.warn(newres);
  };
  return (
    <View style={{alignItems:'center', justifyContent:'center', height:'100%'}}>
      {/* <Text>SecendPage</Text> */}
      <Pressable onPress={GetItem} style={{backgroundColor:'blue', width:'80%', borderRadius:8}} ><Text style={{color:'#FFFFFF', textAlign:'center', padding:10}}>get data</Text></Pressable>
      <View style={{margin:20}}>
        <Text style={styles.Text}>Name :- {Name}</Text>
        <Text style={styles.Text}>Age :- {Age}</Text>
        <Text style={styles.Text}>Email :- {Email}</Text>
        <Text style={styles.Text}>Password :- {Pswld}</Text>
      </View>
    </View>
  );
};

export default SecendPage;
const styles = StyleSheet.create({
  Text: {
    color: 'grey',
    fontSize: 16
  },
});
