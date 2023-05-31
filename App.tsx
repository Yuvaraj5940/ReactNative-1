import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './Components/Figma/Profile/Profile';
import ScreenNavigation from './Components/Figma/Profile/Profile';
import Edit from './Components/Figma/Profile/Edit';
import MyTabs from './Components/Figma/Profile/Edit';

const App = () => {
  return (
    // <NavigationContainer>
      <MyTabs />
    // </NavigationContainer>
  );
};

export default App;
