import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import General from './General';
import Display from './Display';

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
      <Tab.Navigator>
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
const Edit = () => {
  return (
    <>
      <Text>Edit</Text>
      <MyTabs />
    </>
  );
};

export default Edit;
