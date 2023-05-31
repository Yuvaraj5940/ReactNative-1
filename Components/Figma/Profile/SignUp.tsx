import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Style from './Style';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [first, setFirst] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');
  const [ShowP, setShowP] = useState(true);

  const tokn = async () => {
    const res = await AsyncStorage.getItem('user');
    if (res) {
      await navigation.navigate('Login');
    }
  };
  useEffect(() => {
    tokn();
  }, []);

  const Validations = async() => {
    // () => navigation.navigate('Login')
    if (first === '' || mail === '' || password === '' || Cpassword === '') {
      console.warn('enter inputs');
    } else {
      if (mail.endsWith('@gmail.com')) {
        if (password === Cpassword) {
          const n = {name: first, email: mail, passsword: password};
          let res = await JSON.stringify(n);
          await AsyncStorage.setItem('user', res);
          // console.warn(first, mail, password);
          setFirst('');
          setMail('');
          setCpassword('');
          setPassword('');
          navigation.navigate('Login')
        } else {
          console.warn('Password  and confirm Pasword must match');
        }
      } else {
        console.warn('enter valid email');
      }
    }
  };

  return (
    <View style={Style.signupContainer}>
      <Pressable
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#F5F7FD',
          borderRadius: 20,
          alignItems: 'center',
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('Welcome')}>
        <Icon name="arrow-back-outline" size={35} color="#2242D8" />
      </Pressable>
      <View style={{width: 325, height: 67, marginTop: 16}}>
        <Text
          style={{
            color: '#8899EA',
            alignSelf: 'flex-start',
            fontSize: 14,
            fontWeight: '400',
          }}>
          SignUp
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 18,
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              fontSize: 24,
              color: '#2242D8',
              fontWeight: '700',
              marginBottom: 7,
            }}>
            Welcome to App
          </Text>
          <Image
            source={require('./Images/hi.png')}
            style={{height: 30, width: 30, gap: 18}}
          />
        </View>
        <Text
          style={{
            color: '#8899EA',
            alignSelf: 'flex-start',
            fontSize: 12,
            fontWeight: '400',
          }}>
          Create your asccount to make your first business card
        </Text>
      </View>
      <View style={{marginTop: 52, marginBottom: 29}}>
        <View style={styles.Inputdiv}>
          {/* <Text style={styles.InputBox}>Name</Text> */}
          <TextInput
            style={styles.InputText}
            placeholder="Enter the Name"
            value={first}
            onChangeText={value => setFirst(value)}
          />
        </View>

        <View style={styles.Inputdiv}>
          {/* <Text style={styles.InputBox}>Email Adress</Text> */}
          <TextInput
            style={styles.InputText}
            placeholder="Email Adress"
            keyboardType="email-address"
            value={mail}
            onChangeText={value => setMail(value)}
          />
        </View>

        <View style={styles.Inputdiv}>
          {/* <Text style={styles.InputBox}>Password</Text> */}
          <TextInput
            style={styles.InputText}
            placeholder="Password"
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
        <View style={styles.Inputdiv}>
          {/* <Text style={styles.InputBox}>Confirm Password</Text> */}
          <TextInput
            style={styles.InputText}
            placeholder="Confirm Password"
            secureTextEntry={ShowP}
            value={Cpassword}
            onChangeText={value => setCpassword(value)}
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
      </View>
      <View style={styles.TC}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={{alignSelf: 'center'}}
        />
        <Text style={Style.TCtext}>I accepts the terms & conditions</Text>
      </View>
      <View style={Style.alreadyExist}>
        <Text style={{fontSize: 12}}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 12, color: '#2242D8', fontWeight: '400'}}>
            Login
          </Text>
        </Pressable>
      </View>
      <Pressable style={Style.nxtBtn} onPress={Validations}>
        <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '500'}}>
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  InputBox: {
    fontSize: 13,
    fontWeight: '500',
    paddingLeft: 5,
    color: '#2242D8',
  },
  InputText: {
    color: '#2242D8',
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
  },
  Inputdiv: {
    borderWidth: 1,
    width: '100%',
    height: 67,
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: '#2242D8B2',
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'row',
  },
  signupContainer: {
    alignSelf: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    width: 325,
    height: 67,
    marginBottom: 10,
    paddingVertical: 15,
    borderRadius: 20,
    borderColor: '#2242D8B2',
    paddingHorizontal: 25,
  },
  placeholderTop: {
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 5,
  },
  placeholderBottom: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2242D8',
  },
  TC: {
    paddingHorizontal: 20,
    width: '80%',
    height: 67,
    position: 'relative',
    top: -40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  TCtext: {
    fontSize: 12,
    fontWeight: '400',
    color: '#7C7C7C',
  },
  alreadyExist: {
    position: 'absolute',
    bottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    // gap:10
  },
  nxtBtn: {
    width: 280,
    height: 55,
    backgroundColor: '#2242D8',
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
