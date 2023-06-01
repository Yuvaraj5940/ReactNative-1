import React from 'react';
import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import General from './General';
import Display from './Display';
import Icon from 'react-native-vector-icons/Ionicons';
// import Links from './Link';

const Tab = createMaterialTopTabNavigator();

// const Display = () => {
//   return (
//     <View>
//       <Text>Display</Text>
//     </View>
//   );
// };
const Links = () => {
  return (
    <View>
      <Text>Links</Text>
    </View>
  );
};

function MyTabs() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarItemStyle: {
          borderColor: '#EEEEEE',
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: '#EEEEEE',
          margin: 10,
          activeTintColor: '#2242D8',
          inactiveTintColor: '#8D8D8D',
        },
      })}>
      <Tab.Screen name="general" component={General} />
      <Tab.Screen name="display" component={Display} />
      <Tab.Screen name="links" component={Links} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
// const Navigationcon = () => {
//   return (
//
//       <MyTabs />
//
//   );
// };
const Edit = ({navigation}) => {
  return (
    <>
      <View style={styles.Topdiv}>
        <Pressable
          style={styles.Crosbtn}
          onPress={() => navigation.navigate('Bottom')}>
          <Icon name="close" size={25} color="#2242D8" />
        </Pressable>
        <Text style={styles.heading}>Edit Card</Text>
        <Pressable style={styles.Savebtn}>
          <Text style={{color: '#2242D8'}}>Save</Text>
        </Pressable>
      </View>
      <MyTabs />
    </>
  );
};

export default Edit;

const styles = StyleSheet.create({
  Topdiv: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    gap: 5,
    borderWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  Crosbtn: {
    width: 40,
    height: 40,
    backgroundColor: '#EAEDFB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Savebtn: {
    width: 75,
    height: 30,
    backgroundColor: '#EAEDFB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {color: '#2242D8', fontSize: 20, fontWeight: 'bold'},
});
