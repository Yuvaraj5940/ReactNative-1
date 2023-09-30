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
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  Name: Yup.string().min(3, 'To short!').required('plese enter youe name'),
  Email: Yup.string()
    .email('Invalid email')
    .required('Enter your email adress'),
  Password: Yup.string()
    .min(4)
    .required('Enter password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,
      'Must use 1 Uppercase 1 Lowercase 1 Number and 1 Special charector',
    ),
  CnfPassword: Yup.string()
    .min(4)
    .oneOf([Yup.ref('Password')], 'passwords must matchs.')
    .required('confirm password require'),
});

const SignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
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

  const Validations = async vals => {
    // () => navigation.navigate('Login')
    const n = {name: vals.Name, email: vals.Email, passsword: vals.Password};
    let res = await JSON.stringify(n);
    await AsyncStorage.setItem('user', res);
    navigation.navigate('Login');
  };

  return (
    <Formik
      initialValues={{Name: '', Email: '', Password: '', CnfPassword: ''}}
      validationSchema={SignupSchema}
      onSubmit={values => Validations(values)}>
      {({
        values,
        errors,
        handleChange,
        touched,
        setFieldTouched,
        handleSubmit,
        isValid,
      }) => (
        <View
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: '#FFFFFF',
          }}>
          <View style={{padding: 20, flex: 1}}>
            <View style={{width: '80%', margin: 10, marginBottom: 30}}>
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
                Sign up
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
                  alignSelf: 'flex-start',
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#8899EA',
                }}>
                Create your acount make your first business card
              </Text>
            </View>
            <View style={{width: '100%', padding: 10}}>
              <View>
                <TextInput
                  style={[
                    styles.passdiv,
                    {
                      borderColor:
                        touched.Name && errors.Name ? '#e5232e' : '#131d20',
                    },
                  ]}
                  // editable={true}
                  placeholder="Enter your name"
                  // keyboardType="email-address"
                  value={values.Name}
                  onChangeText={handleChange('Name')}
                  onBlur={() => setFieldTouched('Name')}
                />
              </View>
              {touched.Name && errors.Name && (
                <Text style={styles.erText}>{errors.Name}</Text>
              )}
              <View>
                <TextInput
                  style={[
                    styles.passdiv,
                    {
                      borderColor:
                        touched.Email && errors.Email ? '#e5232e' : '#131d20',
                    },
                  ]}
                  // editable={true}
                  placeholder="Enter email"
                  keyboardType="email-address"
                  value={values.Email}
                  onChangeText={handleChange('Email')}
                  onBlur={() => setFieldTouched('Email')}
                />
              </View>
              {touched.Email && errors.Email && (
                <Text style={styles.erText}>{errors.Email}</Text>
              )}
              <View
                style={[
                  styles.passdiv,
                  {
                    borderColor:
                      touched.Password && errors.Password
                        ? '#e5232e'
                        : '#131d20',
                  },
                ]}>
                <TextInput
                  style={styles.InputTextp}
                  placeholder="Enter password"
                  secureTextEntry={ShowP}
                  value={values.Password}
                  onChangeText={handleChange('Password')}
                  onBlur={() => setFieldTouched('Password')}
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
              {touched.Password && errors.Password && (
                <Text style={styles.erText}>{errors.Password}</Text>
              )}

              <View
                style={[
                  styles.passdiv,
                  {
                    borderColor:
                      touched.CnfPassword && errors.CnfPassword
                        ? '#e5232e'
                        : '#131d20',
                  },
                ]}>
                <TextInput
                  style={styles.InputTextp}
                  placeholder="confirm password"
                  secureTextEntry={ShowP}
                  value={values.CnfPassword}
                  onChangeText={handleChange('CnfPassword')}
                  onBlur={() => setFieldTouched('CnfPassword')}
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
              {touched.CnfPassword && errors.CnfPassword && (
                <Text style={styles.erText}>{errors.CnfPassword}</Text>
              )}
            </View>
            <View style={styles.TC}>
              <Checkbox
                value={isSelected}
                onValueChange={() => setSelection(!isSelected)}
                style={{alignSelf: 'center'}}
              />
              <Text style={Style.TCtext}>I accepts the terms & conditions</Text>
            </View>

            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                gap: 10,
                position: 'relative',
                alignSelf: 'center',
                top: 100,
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 12}}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{fontSize: 12, color: '#2242D8', fontWeight: '700'}}>
                    Login
                  </Text>
                </Pressable>
              </View>
              <Pressable
                onPress={handleSubmit}
                style={{
                  backgroundColor: isValid ? '#2242D8' : '#C0C0C0',
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
                  Next
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  passdiv: {
    borderWidth: 1,
    width: '100%',
    height: 67,
    marginBottom: 10,
    paddingVertical: 15,
    borderRadius: 20,
    // borderColor: '#2242D8B2',
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
  erText: {
    color: '#e5232e',
    fontSize: 12,
  },
  TC: {
    paddingHorizontal: 20,
    width: '80%',
    height: 67,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
