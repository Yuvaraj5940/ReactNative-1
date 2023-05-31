import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import General from './General';
import Display from './Display';

const Tab = createMaterialTopTabNavigator();

// const Edit = () => {
//   return (
//     <View>
//       <Text>Edit</Text>
//     </View>
//   );
// };
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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="general" component={General} />
        <Tab.Screen name="display" component={Display} />
        <Tab.Screen name="links" component={Links} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// const Navigationcon = () => {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// };

export default MyTabs;
