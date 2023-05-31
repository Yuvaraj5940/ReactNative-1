import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const General = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ch2}>Card name</Text>
      <TextInput style={styles.mInput} />
      <Text style={styles.ch2}>Personal details</Text>
      <TextInput style={styles.mInput} />
      <Text style={styles.ch2}>Company details</Text>
      <TextInput style={styles.mInput} placeholder="Company name" />
      <TextInput style={styles.mInput} placeholder="Designation" />
      <TextInput style={styles.mInput} placeholder="Department" />
      <TextInput
        style={styles.mInput}
        placeholder="Bio"
        numberOfLines={4}
        maxLength={40}
      />
    </View>
  );
};

export default General;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#FFFFFF',
    padding: 20,
    gap: 10,
  },
  ch2: {
    color: '#000000',
    fontSize: 15,
    fontWeight:'bold'

  },
  mInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#2242D8',
    color: '#2242D8',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
});
