import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import Home from './Home';

const Stack = createNativeStackNavigator();
const AsyncStackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          // options={{header: () => null}}
        />
        <Stack.Screen
          name="home"
          component={Home}
          //   options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AsyncStackNav;
