/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const ModalBox = ({loading, setLoading}) => {
  return (
    <View style={{flex: 1}}>
      <Modal visible={loading}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#A0A0A0',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 20,
              right: 40,
            }}
            onPress={() => setLoading(!loading)}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '900',
              }}>
              X
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <ActivityIndicator size={'large'} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalBox;
