import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  header: {
    backgroundColor: '#66CC66',
    paddingVertical: 4,
    marginBottom: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headertext: {
    fontSize: 25,
    fontFamily: 'cochin',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#CCFFE5',
    marginBottom: 2,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  items: {
    textAlign: 'center',
  },
  name: {
    color: '#404040',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'cochin',
  },
  home: {
    flex: 1,
  },
  pic: {
    width: 100,
    height: 100,
  },
  btn: {
    height: 50,
    backgroundColor: '#009999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnFont: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'cochin',
    fontWeight: 'bold',
  },
  quantity: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnQuan: {
    backgroundColor: '#ffffff',
    width: 20,
    height: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quan: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
