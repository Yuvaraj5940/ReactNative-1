/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
// import TodoApp from './Components/Todo/TodoApp';
// import App from './Components/App';
// import AppTest from './Components/Shop';
import Profile from './Components/Figma/Profile/Profile';
import Firstpage from './Components/Asyncstore.tsx/firstpage';
import Cards from './Components/Figma/Profile/Cards';
// import Edit from './Components/Figma/Profile/Edit';
import MyTabs from './Components/Figma/Profile/Edit';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';
import Edit from './Components/Figma/Profile/Edit';
import ScreenNavigation from './Components/Figma/Profile/Profile';
// import CameraVision from './Components/CameraVision/CameraVision';
// import OpenGallery from './Components/openGallery/OpenGallery';
// import ModalBox from './Components/ModalBox/ModalBox';

AppRegistry.registerComponent(appName, () => ScreenNavigation);
