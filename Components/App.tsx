import React from 'react';
import {View, Text, SectionList, Button, Image, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './AppStyle';
const data = [
  {
    category: 'Fruits',
    data: [
      {
        name: 'Apple',
        quantity: 2,
        price: 1.99,
        url: 'https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1.00xw:0.631xh;0.00160xw,0.206xh&resize=1200:*',
      },
      {
        name: 'Banana',
        quantity: 3,
        price: 0.99,
        url: 'https://www.forbesindia.com/media/images/2022/Sep/img_193775_bananas.jpg',
      },
      {
        name: 'Orange',
        quantity: 4,
        price: 0.79,
        url: 'https://www.bangaloreagrico.in/wp-content/uploads/2018/11/ORANGE.jpg',
      },
    ],
  },
  {
    category: 'Vegetables',
    data: [
      {
        name: 'Tomato',
        quantity: 2,
        price: 1.99,
        url: 'https://www.abcfruits.net/wp-content/uploads/2022/08/14.png',
      },
      {
        name: 'Carrot',
        quantity: 3,
        price: 0.99,
        url: 'https://www.heart.org/-/media/Images/News/2023/April-2023/0404EIOLICarrots_SC.jpg',
      },
      {
        name: 'Oninon',
        quantity: 4,
        price: 0.79,
        url: 'https://cdn.shopify.com/s/files/1/0297/4187/5253/products/7.red-onion-24784_1024x1024.jpg?v=1593132726',
      },
    ],
  },
];
const Stack = createNativeStackNavigator();
const HomeScreen = ({navigation}) => {
  const Renderitem = ({item}) => (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Text>Price: ${item.price}</Text>
          <Text>Quantity:</Text>
          <View style={styles.quantity}>
            <Pressable>
              <Text style={styles.quan}>-</Text>
            </Pressable>
            <Text style={styles.btnQuan}>{item.quantity}</Text>
            <Pressable>
              <Text style={styles.quan}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Image
          style={styles.pic}
          source={{
            uri: item.url,
          }}
        />
      </View>
    </View>
  );
  const Header = ({section}) => (
    <View style={styles.header}>
      <Text style={styles.headertext}>{section.category}</Text>
    </View>
  );
  return (
    <View style={styles.home}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={Renderitem}
        renderSectionHeader={Header}
      />
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('Shopper')}>
        <Text style={styles.btnFont}>Next Page</Text>
      </Pressable>
    </View>
  );
};
const HomeScreen2 = ({navigation}) => {
  const Renderitem = ({item}) => (
    <View style={styles.container}>
      <View>
        <Text>{item.name}</Text>
      </View>
      <View>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
    </View>
  );
  const Header = ({section}) => (
    <View style={styles.header}>
      <Text style={styles.headertext}>{section.category}</Text>
    </View>
  );
  return (
    <View>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={Renderitem}
        renderSectionHeader={Header}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Shopper')}
      />
    </View>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shopper Stop" component={HomeScreen} />
        <Stack.Screen name="Shopper" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
