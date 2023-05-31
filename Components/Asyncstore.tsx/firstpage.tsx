import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Button,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createStackNavigator } from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import SecendPage from './Sec';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();

const Firstpage = ({navigation}) => {
  const [first, setFirst] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);
  const [ShowP, setShowP] = useState(true);

  const setItem = async () => {
    const n = {name: first, age: age, email: mail, passsword: password};
    let res = await JSON.stringify(n);
    await AsyncStorage.setItem('user', res);
    setAge(0);
    setFirst('');
    setMail('');
    setPassword('');
  };

  const GetItem = async () => {
    const n = await AsyncStorage.getItem('user');
    let newres = await JSON.parse(n);

    setFirst(newres.name);
    // setAge(newres.age);
    console.warn(newres);
  };

  const RemoveItem = async () => {
    await AsyncStorage.removeItem('user');
    setAge(0);
    setFirst('');
    setMail('');
    setPassword('');
  };
  //   const my = async () => {
  //     const n = {name: first, age: age};
  //     let res = await JSON.stringify(n);
  //     // await AsyncStorage.setItem('prac', res)
  //     // console.warn(res);
  //     let js = await JSON.parse(res);
  //     console.warn(js.name);
  //   };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        gap: 20,
        width: '100%',
        height: '100%',
      }}>
      <Text style={{fontSize: 20}}>Wellcome {first} </Text>
      <View>
        <TextInput
          style={styles.Textinp}
          placeholder="Enter the name"
          value={first}
          onChangeText={value => setFirst(value)}
        />
      </View>
      <View>
        <TextInput
          style={styles.Textinp}
          placeholder="Enter the age"
          keyboardType="numeric"
          value={age}
          onChangeText={value => setAge(value)}
        />
      </View>
      <View>
        <TextInput
          style={styles.Textinp}
          editable
          placeholder="Enter the email"
          keyboardType="email-address"
          value={mail}
          onChangeText={value => setMail(value)}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TextInput
          style={styles.Textinp}
          placeholder="Enter the password"
          secureTextEntry={ShowP}
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Pressable
          style={{
            width: 50,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => (ShowP ? setShowP(false) : setShowP(true))}>
          <Icon name="eye-off-outline" size={30} color="#2242D8" />
        </Pressable>
      </View>

      <View
        style={{display: 'flex', flexDirection: 'row', gap: 10, width: '80%'}}>
        <Pressable style={styles.btn} onPress={GetItem}>
          <Text style={styles.Text}>get data</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={setItem}>
          <Text style={styles.Text}>setData</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={RemoveItem}>
          <Text style={styles.Text}>Remove data</Text>
        </Pressable>
      </View>
      <Pressable
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          position: 'absolute',
          bottom: 50,
          width: 300,
        }}
        onPress={() => navigation.navigate('secendp')}>
        <Text style={{color: '#FFFFFF', padding: 10, textAlign: 'center'}}>
          Navigate
        </Text>
      </Pressable>
      {/* <Text>Wellcome {Name}</Text> */}
      {/* <Text style={{color: '#FFFFFF'}}>Name {first}</Text>
      <Text style={{color: '#FFFFFF'}}>Age {age}</Text>
      <Text style={{color: '#FFFFFF'}}>Email {mail}</Text>
      <Text style={{color: '#FFFFFF'}}>Password {password}</Text> */}
    </View>
  );
};

// export default Firstpage;

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="firstp" component={Firstpage} />
        <Stack.Screen name="secendp" component={SecendPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Screens;

const styles = StyleSheet.create({
  Text: {
    color: 'grey',
    fontSize: 16,
    padding: 5,
    color: '#FFFFFF',
  },
  Textinp: {
    backgroundColor: '#FFFFFF',
    width: 260,
    color: 'blue',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'blue',
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
