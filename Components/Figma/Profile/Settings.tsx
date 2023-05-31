import React,{useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal
} from 'react-native';
import Style from './Style';

import Icon from 'react-native-vector-icons/AntDesign';

const Setting = ({navigation}) => {
    const [loading, setLoading] = useState(false);

  return (
    <View
      style={{
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View
        style={{
          width: '100%',
          padding: 10,
          gap: 10,
        }}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#2242D8',
          }}>
          Settings
        </Text>
        <TextInput
          style={{
            height: 80,
            width: '100%',
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#2242D8',
            shadowColor: 'grey',
            shadowOpacity: 5,
            backgroundColor: '#F4F6FD',
          }}
        />
      </View>
      {/* profiles */}
      <View
        style={{
          width: '100%',
          padding: 10,
          gap: 10,
        }}>
        <Pressable style={styles.btnContainer}>
          <Text style={{padding: 10, color: '#2242D8'}}>Profile</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>

        <Pressable style={styles.btnContainer}>
          <Text style={{padding: 10, color: '#2242D8'}}>Share App</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>

        <Pressable style={styles.btnContainer}>
          <Text style={{padding: 10, color: '#2242D8'}}>Rate us</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>

        <Pressable style={styles.btnContainer}>
          <Text style={{padding: 10, color: '#2242D8'}}>About app</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>

        <Pressable style={styles.btnContainer}>
          <Text style={{padding: 10, color: '#2242D8'}}>Contact us</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>
        <Pressable style={styles.btnContainer}>
          <Text style={{padding: 10, color: '#2242D8'}}>Privacy Policy</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>
        <View style={Style.LogoutBtn}>
          <Pressable onPress={() => setLoading(true)}>
            <Text style={Style.logout}>Logout?</Text>
          </Pressable>
        </View>
      </View>

      {loading && (
        <View style={{height: '100%', width: '100%'}}>
          <Modal visible={loading} transparent animationType="slide">
            <View
              style={{
                height: 338,
                width: '100%',
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 0,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View
                style={{
                  width: 60,
                  height: 7,
                  backgroundColor: '#E5ECFF',
                  position: 'absolute',
                  top: 15,
                  borderRadius: 42,
                }}
              />
              <View style={Style.logoutContainer}>
                <Text
                  style={{
                    color: '#2242D8',
                    fontSize: 18,
                    fontWeight: '500',
                    marginBottom: 14,
                  }}>
                  Are you sure want to logout?
                </Text>
                <Text style={{width: 181, textAlign: 'center', color: '#2242D8'}}>
                  You will need to again enter your details to login
                </Text>
              </View>
              <Pressable
                style={styles.Continuetrue}
                onPress={() => {
                  navigation.navigate('Welcome');
                  setLoading(false);
                }}>
                <Text style={styles.TrueText}>Yes, I want to</Text>
              </Pressable>
              <Pressable
                onPress={() => setLoading(false)}
                style={styles.Continuefalse}>
                <Text style={styles.FalseText}>No, I don't want to</Text>
              </Pressable>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    backgroundColor: '#F4F6FD',
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOpacity: 5,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  Continuetrue: {
    backgroundColor: '#2242D8',
    height: 55,
    width: 280,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
    borderRadius: 20,
  },
  TrueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  Continuefalse: {
    backgroundColor: '#FFFFFF',
    height: 55,
    width: 280,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2242D8',
  },
  FalseText: {
    color: '#2242D8',
    fontSize: 16,
    fontWeight: '500',
  },

});
