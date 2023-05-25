import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: '50%',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  pressable: {
    backgroundColor: '#2422E8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: '57%',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  pressableText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
  },
});

export default styles;
