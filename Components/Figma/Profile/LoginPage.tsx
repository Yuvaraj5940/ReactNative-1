import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
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
});

const LoginPage = ({navigation}) => {
  const [ShowP, setShowP] = useState(true);

  const tkn = async () => {
    const res = await AsyncStorage.getItem('user');
    const newres = await JSON.parse(res);
    if (newres) {
      console.warn(newres.email, newres.passsword);
    }
  };
  const Validate = async x => {
    const res = await AsyncStorage.getItem('user');
    const newres = await JSON.parse(res);
    if (newres.email === x.Email && newres.passsword === x.Password) {
      // console.warn(newres.email, newres.passsword, x.Email, x.Password);
      navigation.navigate('Bottom');
    } else {
      console.warn('Enter valid mail or password');
    }
  };

  return (
    <Formik
      initialValues={{Email: '', Password: ''}}
      validationSchema={SignupSchema}
      onSubmit={values => Validate(values)}>
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

              {/* <Text>hjfdgvkdrjghkjhtrgkj</Text> */}
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
                position: 'relative',
                alignSelf: 'center',
                top: 100,
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 12}}>Don't have an account?</Text>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                  <Text
                    style={{fontSize: 12, color: '#2242D8', fontWeight: '700'}}>
                    Sign up
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
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </Formik>
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
});
