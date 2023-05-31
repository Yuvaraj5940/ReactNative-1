import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Style from './Style';
import CameraVision from '../../CameraVision/CameraVision';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import WelcomePage from './WelcomePage';
import SignUp from './SignUp';
import LoginPage from './LoginPage';
import Addcard from './AddCard';
import Setting from './Settings';
import Home from './Home';
import Contancts from './Contancts';
import Cards from './Cards';
import ScannedPages from './Scannedcontacts';
import ScannedP from './scaned';
import MyTabs from './Edit';
import Edit from './Edit';
import Display from './Display';
import Prac from './Prac';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const Cards = () => {
//   return (
//     <View
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '50%',
//       }}>
//       <Text style={{fontSize: 20, fontWeight: '900'}}>Cards</Text>
//     </View>
//   );
// };
const CamPage = () => {
  return <CameraVision />;
};
const ScanCard = ({navigation}) => {
  return (
    <View style={Style.scanContainer}>
      <Text style={Style.scanText}>Scan card</Text>
      <View style={Style.innerDiv}>
        {/* <Ion name="scan-outline" style={Style.scanneroutline} />
        <FontAwesome5 name="file" style={Style.scanFile} />
        <Ion name="remove-outline" style={Style.horizontalLine} /> */}
        <Image source={require('./Images/Scan.png')} />
        <Text style={Style.scanNewCard}>Scan a new card</Text>
        <Text style={Style.ScanDesc}>
          Just tap on scan card to add contact from physical card
        </Text>
        <Pressable
          style={Style.scanBtn}
          onPress={() => navigation.navigate('Scan Id')}>
          <Text style={Style.scanBtnText}>Scan card</Text>
        </Pressable>
        <View style={Style.scannedContact}>
          <View style={Style.badgeContainer}>
            <FontAwesome5 name="id-badge" style={Style.profileBadge} />
          </View>
          <Text style={Style.seeProfiles}>See scanned contacts</Text>
          <FontAwesome5 name="chevron-right" style={Style.nextProfiles} />
        </View>
      </View>
    </View>
  );
};

// const AddCard = () => {
//   return (
//     <ScrollView>
//       {/* Image */}
//       <View style={Style.imgConatiner}>
//         <Image
//           source={{
//             uri: 'https://static.vecteezy.com/system/resources/previews/002/618/090/large_2x/business-woman-in-white-shirt-on-grey-background-free-photo.jpg',
//           }}
//           style={Style.img}
//         />
//       </View>
//       <View style={Style.addContainer}>
//         {/* Name */}
//         <View style={Style.nameContainer}>
//           <Text style={Style.name}>Jani ren</Text>
//           <View style={Style.nameCheck} />
//         </View>

//         {/* About */}
//         <View style={Style.aboutConatiner}>
//           <Text style={Style.Detailstext}>About</Text>
//           <Text style={Style.about}>
//             A UX designer must have strong problem- solving skills and be able
//             to identify pain points in the user journey and find solutions to
//             improve the user experience.
//           </Text>
//         </View>

//         {/* Person details */}
//         <View style={Style.personDetailsContainer}>
//           <Text style={Style.Detailstext}>Person details</Text>
//           <View style={Style.DetailsInnerContainer}>
//             <Text style={Style.Details}>Email address:</Text>
//             <Text style={Style.Bold}>johnryan@gmail.com</Text>
//           </View>
//           <View style={Style.DetailsInnerContainer}>
//             <Text style={Style.Details}>Mobile number:</Text>
//             <Text style={Style.Bold}>9833762389</Text>
//           </View>
//         </View>

//         {/* Company details */}
//         <View style={Style.companyDetailsContainer}>
//           <Text style={Style.Detailstext}>Company details</Text>
//           <View style={Style.DetailsInnerContainer}>
//             <Text style={Style.Details}>Company name:</Text>
//             <Text style={Style.Bold}>Creative tech minds</Text>
//           </View>
//           <View style={Style.DetailsInnerContainer}>
//             <Text style={Style.Details}>Designation:</Text>
//             <Text style={Style.Bold}>Creative designer</Text>
//           </View>
//           <View style={Style.DetailsInnerContainer}>
//             <Text style={Style.Details}>Department:</Text>
//             <Text style={Style.Bold}>Design</Text>
//           </View>
//           <View style={Style.DetailsInnerContainer}>
//             <Text style={Style.Details}>Mobile number:</Text>
//             <Text style={Style.Bold}>+125648 26585</Text>
//           </View>
//         </View>

//         {/* Contacts and Social links */}
//         <View style={Style.contactsContainer}>
//           <Text style={Style.Detailstext}>Contacts and Social links</Text>
//           <View style={Style.contact}>
//             <FontAwesome5 name="phone-alt" style={Style.Font} />
//             <View>
//               <Text style={Style.Social}>+125485 64862</Text>
//               <Text style={Style.Social}>+115483 12487</Text>
//             </View>
//             <View>
//               <Text style={Style.Title}> (For work)</Text>
//               <Text style={Style.Title}>(whatsApp only)</Text>
//             </View>
//           </View>
//         </View>
//         <View style={Style.product}>
//           <FontAwesome5 name="link" style={Style.Font} />
//           <Text style={Style.Title}>(Product web)</Text>
//         </View>
//         <View style={Style.linkedin}>
//           <FontAwesome5 name="linkedin" style={Style.Font} />
//           <Text style={Style.Social}>ryanjohn12</Text>
//           <Text style={Style.Title}>(Product page)</Text>
//         </View>
//         <Pressable style={Style.cardBtn}>
//           <Text style={Style.cardBtnName}>Share contact</Text>
//         </Pressable>
//       </View>
//     </ScrollView>
//   );
// };

// const Contacts = () => {
//   return (
//     <View
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '50%',
//       }}>
//       <Text style={{fontSize: 20, fontWeight: '900'}}>Contacts</Text>
//     </View>
//   );
// };

// const Settings = ({navigation}) => {
//   const settingBtn = [
//     'Profile',
//     'Share app',
//     'Rate us',
//     'About app',
//     'Contact us',
//     'Privacy Policy',
//   ];
//   const [loading, setLoading] = useState(false);

//   return (
//     <View style={Style.settingContainer}>
//       <Text style={Style.settingText}>Settings</Text>
//       <View style={Style.sec} />
//       <View style={Style.btnContainer}>
//         <FlatList
//           data={settingBtn}
//           renderItem={({item}) => (
//             <View style={Style.btnDiv}>
//               <Pressable style={Style.setBtn}>
//                 <Text style={Style.btnText}>{item}</Text>
//               </Pressable>
//               <FontAwesome5 name="chevron-right" style={Style.next} />
//             </View>
//           )}
//         />
//         <View style={Style.LogoutBtn}>
//           <Pressable onPress={() => setLoading(true)}>
//             <Text style={Style.logout}>Logout?</Text>
//           </Pressable>
//         </View>
//       </View>
//       {loading && (
//         <View style={{height: '100%', width: '100%'}}>
//           <Modal visible={loading} transparent animationType="slide">
//             <View
//               style={{
//                 height: 338,
//                 width: '100%',
//                 backgroundColor: '#FFFFFF',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 position: 'absolute',
//                 bottom: 0,
//                 borderTopRightRadius: 20,
//                 borderTopLeftRadius: 20,
//               }}>
//               <View
//                 style={{
//                   width: 60,
//                   height: 7,
//                   backgroundColor: '#E5ECFF',
//                   position: 'absolute',
//                   top: 15,
//                   borderRadius: 42,
//                 }}
//               />
//               <View style={Style.logoutContainer}>
//                 <Text
//                   style={{
//                     color: '#2242D8',
//                     fontSize: 18,
//                     fontWeight: '500',
//                     marginBottom: 14,
//                   }}>
//                   Are you sure want to logout?
//                 </Text>
//                 <Text style={{width: 181, textAlign: 'center'}}>
//                   You will need to again enter your details to login
//                 </Text>
//               </View>
//               <Pressable
//                 style={Style.outConfirm}
//                 onPress={() => {
//                   navigation.navigate('Welcome');
//                   setLoading(false);
//                 }}>
//                 <Text style={Style.outConfirmtext}>Yes, I want to</Text>
//               </Pressable>
//               <Pressable
//                 onPress={() => setLoading(false)}
//                 style={Style.outConfirm}>
//                 <Text style={Style.outConfirmtext}>No, I don't want to</Text>
//               </Pressable>
//             </View>
//           </Modal>
//         </View>
//       )}
//     </View>
//   );
// };

const Profile = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Cards') {
            iconName = 'credit-card';
            size = focused ? 25 : 20;
            color = focused ? '#2242D8' : null;
          } else if (route.name === 'Scan card') {
            iconName = 'barcode';
            size = focused ? 25 : 20;
            color = focused ? '#2242D8' : null;
          } else if (route.name === 'Add card') {
            iconName = 'plus-circle';
            size = focused ? 30 : 25;
            color = focused ? '#2242D8' : null;
          } else if (route.name === 'Contacts') {
            iconName = 'address-book';
            size = focused ? 25 : 20;
            color = focused ? '#2242D8' : null;
          } else if (route.name === 'Settings') {
            iconName = 'toolbox';
            size = focused ? 25 : 20;
            color = focused ? '#2242D8' : null;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Scan card"
        component={ScanCard}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Add card"
        component={Addcard}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Contacts"
        component={Contancts}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{header: () => null}}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{header: () => null}}
        />
         <Stack.Screen
          name="Prac"
          component={Prac}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Welcome"
          component={Home}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Bottom"
          component={Profile}
          options={{header: () => null}}
        />
        <Stack.Screen name="Scan Id" component={CamPage} />
        <Stack.Screen
          name="edit"
          component={Edit}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Cards"
          component={Cards}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="scdp"
          component={ScannedP}
          options={{header: () => null}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
