/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Pressable, Image, TextInput} from 'react-native';
import React from 'react';
import Style from './Style';

const LoginPage = ({navigation}) => {
  const data = ['Email Address', 'Password'];
  return (
    <View style={Style.signupContainer}>
      <View style={{width: 325, height: 67, marginTop: 16}}>
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
      <View style={{marginTop: 52, marginBottom: 29}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={Style.inputContainer}>
              <Text style={Style.placeholderTop}>{item}</Text>
              <TextInput style={Style.placeholderBottom} placeholder={item} />
            </View>
          )}
        />
      </View>
      <Text style={Style.forgotPassword}>Forgot password?</Text>
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
      <Pressable
        style={Style.nxtBtn}
        onPress={() => navigation.navigate('Cards')}>
        <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '500'}}>
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginPage;
