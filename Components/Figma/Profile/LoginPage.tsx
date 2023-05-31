/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [ShowP, setShowP] = useState(true);

  const tkn = async () => {
    const res = await AsyncStorage.getItem('user');
    const newres = await JSON.parse(res);
    if (newres) {
      console.warn(newres.email, newres.passsword);
    }
  };
  const Validate = async () => {
    const res = await AsyncStorage.getItem('user');
    const newres = await JSON.parse(res);
    if (newres.email === mail && newres.passsword === password) {
      // console.warn(newres.email, newres.passsword);
      setMail('');
      setPassword('');
      navigation.navigate('Bottom');

    } else {
      console.warn('Enter password');
    }
  };

  return (
    <View style={Style.signupContainer}>
      <View style={{width: 325, height: 67, marginTop: 16}}>
        <Pressable
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#F5F7FD',
            borderRadius: 20,
            alignItems: 'center',
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate('Welcome')}>
          <Icon name="arrow-back-outline" size={35} color="#2242D8" />
        </Pressable>
        <Text
          style={{
            color: '#8899EA',
            alignSelf: 'flex-start',
            fontSize: 14,
            fontWeight: '400',
          }}>
          Login
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
            Welcome back
          </Text>
          <Image
            source={require('./Images/hi.png')}
            style={{height: 30, width: 30, gap: 18}}
          />
        </View>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 12,
            fontWeight: '400',
            color: '#8899EA',
          }}>
          Enter your Email and password to continue
        </Text>
      </View>
      <View style={{marginTop: 100, marginBottom: 20}}>
        <View style={Style.inputContainer}>
          <TextInput
            style={Style.placeholderBottom}
            placeholder="Enter email"
            keyboardType="email-address"
            value={mail}
            onChangeText={value => setMail(value)}
          />
        </View>
        <View style={styles.passdiv}>
          <TextInput
            style={styles.InputTextp}
            placeholder="Enter password"
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
      </View>
      <Text
        style={{color: 'blue', position: 'absolute', top: 350}}
        onPress={tkn}>
        Forgot password?
      </Text>
      <View style={Style.LoginDiv}>
        <View style={Style.loginFrstLine} />
        <Text style={Style.divText}>or</Text>
        <View style={Style.loginSecLine} />
      </View>
      <Text style={Style.anotherWayLogin}>Login with Mobile no.</Text>
      <View style={Style.alreadyExist}>
        <Text style={{fontSize: 12}}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 12, color: '#2242D8', fontWeight: '700'}}>
            Sign up
          </Text>
        </Pressable>
      </View>
      <Pressable style={Style.nxtBtn} onPress={Validate}>
        <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '500'}}>
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginPage;
const styles = StyleSheet.create({
  passdiv: {
    borderWidth: 1,
    width: 325,
    height: 67,
    marginBottom: 10,
    paddingVertical: 15,
    borderRadius: 20,
    borderColor: '#2242D8B2',
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'row',
  },
  InputTextp: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2242D8',
    flex: 1,
  },
});
