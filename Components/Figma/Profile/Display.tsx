import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Display = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.ch2}>Profile Photo</Text>
      <View style={styles.frow}>
        <View style={styles.Fimg}>
          <Image
            source={require('./Images/cards/extractor.jpg')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
          />
        </View>
        <View style={styles.pchange}>
          <Icon name="pencil" size={12} color="#2242D8" />
          <Text style={styles.ch4}>Change photo</Text>
        </View>
      </View>
      <Text style={styles.ch2}>Card color</Text>
      <Text style={styles.ch2}>Logo</Text>
      <View style={styles.frow}>
        <View style={styles.Limg}>
          <Image
            source={require('./Images/cards/Timg.png')}
            style={{
              width: '60%',
              height: '50%',
              borderRadius: 10,
            }}
          />
        </View>
        <View style={styles.pchange}>
          <Icon name="pencil" size={12} color="#2242D8" />
          <Text style={styles.ch4}>Change photo</Text>
        </View>
      </View>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: 20,
    gap: 10,
  },
  ch2: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  ch4: {
    color: '#1E1E1E',
    fontSize: 13,
    paddingVertical: 5,
  },
  Fimg: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#2242D8',
    borderRadius: 10,
    backgroundColor: '#E9ECFB',
  },
  pchange: {
    display: 'flex',
    backgroundColor: '#E9ECFB',
    flexDirection: 'row',
    borderRadius: 20,
    padding: 5,
    gap: 10,
    paddingHorizontal: 15,
    left: 50,
  },
  frow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    // justifyContent:'space-between'
  },
  Limg: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#2242D8',
    borderRadius: 10,
    backgroundColor: '#E9ECFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
