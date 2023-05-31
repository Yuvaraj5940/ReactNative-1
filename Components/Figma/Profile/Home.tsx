import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.TopContainer}>
        <Text style={styles.TopText}>
          Let's make your first digital business csrd
        </Text>
      </View>
      <Image
        source={{
          uri: 'https://images.hindustantimes.com/img/2022/04/05/1600x900/dhoni-csk-screengrab_1649142649306_1649142655615.jpg',
        }}
        style={styles.ImageView}
      />
      <View style={styles.TopBox}>
        <Text style={styles.FistBox}>M S D</Text>
        <View style={styles.SeconBox}>
          <Text style={{color: '#FFFFF', fontSize: 13, textAlign: 'center'}}>
            Softwere Engineer
          </Text>
          <Text
            style={{
              color: 'blue',
              textAlign: 'right',
              paddingEnd: 15,
              fontSize: 13,
            }}>
            At google
          </Text>
        </View>
        <Text style={styles.ThreeBox}>
          I’m ryan software engineer at Google and here is my digital business
          card with all my career and personal details with only the best app
        </Text>
        <Text style={styles.ForeBox}>Twitter.com/ryan</Text>
        <Text style={styles.FiveBox}>instagram.com/ryn</Text>
      </View>
      <View style={styles.Zbox} />
      <View style={styles.Zbox2} />
      <View style={styles.SecondBox}>
        <View style={styles.Bar} />
        <Pressable
          style={styles.Fbtn}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={{color: '#FFFF', textAlign: 'center'}}>Sign up</Text>
        </Pressable>

        <Pressable
          style={styles.sbtn}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{textAlign: 'center'}}>Login to app</Text>
        </Pressable>

        <View style={styles.hrdiv}>
          <View style={styles.hr} />
          <Text>or</Text>
          <View style={styles.hr} />
        </View>

        <View style={styles.tbtn}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-icon/search_318-265146.jpg',
            }}
            style={styles.btnImg}
          />
          <Text style={{color: '#2242D8'}}> Continue with google</Text>
        </View>

        <View style={styles.tbtn}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
            }}
            style={styles.btnImg}
          />
          <Text style={{color: '#2242D8'}}> Continue with google</Text>
        </View>
        <View style={styles.tbtn}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-icon/apple_318-565853.jpg',
            }}
            style={styles.btnImg}
          />
          <Text style={{color: '#2242D8'}}> Continue with google</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#2242DA',
    position: 'absolute',
  },
  TopText: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#FFFFFF',
  },
  TopContainer: {
    position: 'relative',
    left: 30,
    top: 50,
    width: '80%',
  },
  ImageView: {
    position: 'relative',
    width: 80,
    height: 80,
    top: 50,
    left: 30,
    borderRadius: 40,
    zIndex: 2,
  },
  TopBox: {
    width: '70%',
    height: '50%',
    position: 'relative',
    top: 0,
    left: '15%',
    backgroundColor: '#FFFFFF',
    zIndex: 1,
    borderWidth: 3,
    borderColor: '#54A4EE',
    borderTopRightRadius: 80,
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    overflow: 'hidden',
  },
  FistBox: {
    backgroundColor: '#54A4EE',
    paddingVertical: 10,
    width: '45%',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
    position: 'relative',
    left: -15,
  },
  SeconBox: {
    backgroundColor: '#c6e3f3',
    width: '55%',
    borderRadius: 40,
    padding: 5,
    gap: 5,
    position: 'relative',
    left: 30,
  },
  ThreeBox: {
    fontSize: 12,
    width: '90%',
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: '#c6e3f3',
    borderRadius: 30,
    position: 'relative',
    left: 40,
    margin: 25,
    textAlign: 'center',
  },
  ForeBox: {
    fontSize: 12,
    color: 'blue',
    backgroundColor: '#c6e3f3',
    padding: 8,
    borderRadius: 15,
    paddingHorizontal: 15,
    position: 'relative',
    left: -30,
  },
  FiveBox: {
    fontSize: 8,
    color: 'blue',
    backgroundColor: '#c6e3f3',
    paddingHorizontal: 10,
    borderRadius: 10,
    padding: 5,
    position: 'relative',
    left: 80,
    top: -15,
  },
  SecondBox: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '47%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 2,
    borderColor: '#54A4EE',
    display: 'flex',
    gap: 10,
    paddingTop: 10,
    alignItems: 'center',
  },
  Fbtn: {
    backgroundColor: '#2242D8',
    width: '80%',
    borderRadius: 17,
    padding: 15,
  },
  sbtn: {
    borderWidth: 1,
    borderColor: '#2242D8',
    width: '80%',
    borderRadius: 17,
    padding: 15,
  },
  tbtn: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2242D857',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
  },
  btnImg: {
    position: 'relative',
    width: 30,
    height: 30,
    borderRadius: 40,
    zIndex: 2,
  },
  hr: {
    borderBottomWidth: 2,
    borderColor: '#EBEEFC',
    flex: 1,
  },
  hrdiv: {display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5},
  Bar: {
    width: 40,
    borderWidth: 2,
    borderColor: '#54A4EE',
    borderRadius: 5,
    marginVertical: 10,
  },
  Zbox: {
    width: '60%',
    height: '40%',
    position: 'absolute',
    top: 160,
    left: '25%',
    backgroundColor: '#54A4EE',
    zIndex: -2,
    borderTopRightRadius: 80,
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    paddingTop: 20,
    transform: [{rotate: '20deg'}],
  },
  Zbox2: {
    width: '60%',
    height: '30%',
    position: 'absolute',
    top: 240,
    left: '15%',
    backgroundColor: '#54A4EE',
    zIndex: -2,
    borderTopLeftRadius: 20,
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    paddingTop: 20,
    transform: [{rotate: '-20deg'}],
  },
});
