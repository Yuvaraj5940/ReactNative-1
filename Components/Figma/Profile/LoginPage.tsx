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
// import Style from './Style';
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
    if (mail === '' || password === '') {
      console.warn('Enter mail or password');
    } else {
      if (newres.email === mail && newres.passsword === password) {
        // console.warn(newres.email, newres.passsword);
        setMail('');
        setPassword('');
        navigation.navigate('Bottom');
      } else {
        console.warn('Enter valid mail or password');
      }
    }
  };

  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
      }}>
      <View style={{padding: 20, flex: 1}}>
        <View style={{width: '80%', margin: 10}}>
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
            <Icon name="arrow-back-outline" size={33} color="#2242D8" />
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
        <View style={{width: '100%', padding: 10}}>
          <View>
            <TextInput
              style={styles.passdiv}
              placeholder="Enter email"
              keyboardType="email-address"
              value={mail}
              onChangeText={value => setMail(value)}
            />
          </View>
          <Text>gfhdss</Text>
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
          <Text>hjfdgvkdrjghkjhtrgkj</Text>
        </View>

        <Text style={{color: 'blue'}} onPress={tkn}>
          Forgot password?
        </Text>

        <View style={styles.hrdiv}>
          <View style={styles.hr} />
          <Text>or</Text>
          <View style={styles.hr} />
        </View>
        <Text style={{fontSize: 15, color: '#2242D8', textAlign: 'center'}}>
          Login with Mobile no.
        </Text>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            gap: 10,
            position: 'absolute',
            alignSelf: 'center',
            bottom: 50,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{fontSize: 12}}>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text style={{fontSize: 12, color: '#2242D8', fontWeight: '700'}}>
                Sign up
              </Text>
            </Pressable>
          </View>
          <Pressable
            onPress={Validate}
            style={{
              backgroundColor: '#2242D8',
              width: '80%',
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
                fontWeight: '500',
                textAlign: 'center',
                padding: 15,
              }}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
const styles = StyleSheet.create({
  passdiv: {
    borderWidth: 1,
    width: '100%',
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
  hrdiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 50,
    marginBottom: 50,
  },
  hr: {
    borderBottomWidth: 2,
    borderColor: '#EBEEFC',
    flex: 1,
  },
});
