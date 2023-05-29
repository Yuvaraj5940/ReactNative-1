import {StyleSheet} from 'react-native';

const AsyncStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
  },
  name: {
    borderWidth: 1,
    width: 325,
    borderRadius: 20,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: '900',
  },
  age: {
    borderWidth: 1,
    width: 325,
    borderRadius: 20,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: '900',
  },
  loginBtn: {
    width: 200,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  imageSize: {
    height: 200,
    width: 200,
  },
});

export default AsyncStyle;
