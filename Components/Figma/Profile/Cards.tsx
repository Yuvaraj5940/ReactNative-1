import {Text, View, Image, Pressable, FlatList, Modal} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Cards({navigation}) {
  const [active, setactive] = useState(false);
  const Data = [
    {
      img: require('./Images/cards/extractor.jpg'),
      name: 'Chris Hemsworth',
      title: 'personal card',
    },
    {
      img: require('./Images/cards/thanos.jpg'),
      name: 'Josh Brolin',
      title: 'Work card',
    },
    {
      img: require('./Images/cards/groot.jpg'),
      name: 'Vin Diesel',
      title: 'personal card',
    },
  ];
  return (
    <View style={active ? styles.opacity : styles.container}>
      {Data.length ? (
        <View>
          <View style={styles.Topdiv}>
            <View style={{flex: 1}}>
              <Image source={require('./Images/cards/Timg.png')} />
            </View>
            <Text style={styles.hedtext}>Hey, John</Text>
            <View style={styles.logo}>
              <Image source={require('./Images/boy.png')} />
            </View>
          </View>
          {/* <View style={{display:'flex', gap:20}}> */}
          {
            <FlatList
              data={Data}
              renderItem={({item}) => (
                <View style={styles.Box}>
                  <View style={styles.fistrow}>
                    <View style={styles.frc1}>
                      <Image
                        source={item.img}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 30,
                        }}
                      />
                    </View>
                    <View style={styles.frc2}>
                      <View>
                        <Text style={styles.frname}>{item.name}</Text>
                        <Text style={styles.fetitle}>{item.title}</Text>
                      </View>
                    </View>
                    <Pressable
                      style={styles.frc3}
                      onPress={() => {
                        setactive(!active);
                      }}>
                      <Icon
                        name="ellipsis-horizontal-outline"
                        size={18}
                        color="#2242D8"
                      />
                    </Pressable>
                  </View>
                  <View style={styles.secondrow}>
                    <Pressable
                      style={styles.srbtn1}
                      onPress={() => navigation.navigate('edit')}>
                      <AntDesign name="edit" size={12} color="#2242D8" />
                      <Text style={styles.srbtnText}>Eddit</Text>
                    </Pressable>

                    <Pressable style={styles.srbtn2}>
                      <Fontisto name="preview" size={12} color="#2242D8" />
                      <Text style={styles.srbtnText}>Preview card</Text>
                    </Pressable>
                    <Pressable style={styles.srbtn3}>
                      <Icon
                        name="paper-plane-outline"
                        size={12}
                        color="#2242D8"
                      />
                      <Text style={styles.srbtnText}>Share</Text>
                    </Pressable>
                  </View>
                </View>
              )}
            />
          }
          {/* </View> */}
        </View>
      ) : (
        <View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginRight: 20,
              // marginTop: 20,
            }}>
            <Text
              style={{
                color: '#2242D8',
                fontWeight: '500',
              }}>
              Hey, John
            </Text>
            <View
              style={{
                backgroundColor: '#F5F5FD',
                borderRadius: 22,
                margin: 10,
              }}>
              <Image source={require('./Images/boy.png')} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F5F7FD',
              width: '90%',
              alignSelf: 'center',
              height: '85%',
              marginTop: 10,
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={require('./Images/empty1.png')}
              style={{
                marginTop: 40,
              }}
            />
            <Text
              style={{
                color: '#2242D8',
                marginTop: 30,
                fontSize: 18,
                fontWeight: '500',
              }}>
              Nothing in your card list!
            </Text>
            <Text
              style={{
                color: '#2242D8',
                marginTop: 10,
                fontSize: 12,
                fontWeight: '300',
                width: 200,
                textAlign: 'center',
                marginBottom: 20,
              }}>
              No worried make your first digital business card now
            </Text>
            <Image
              source={require('./Images/Line1.png')}
              style={{marginLeft: 40}}
            />
          </View>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={active}
        onRequestClose={() => {
          console.warn('closed');
        }}>
        <View style={styles.modeldiv}>
          <Pressable
            style={styles.modelbtn}
            onPress={() => {
              setactive(!active);
            }}
          />
          <View style={{display: 'flex', flexDirection: 'row', gap: 15}}>
            <View style={styles.modecard}>
              <Icon name="radio-outline" size={30} color="#2242D8" />
              <Text style={styles.cardText}>Write to NFC</Text>
            </View>
            <View style={styles.modecard}>
              <Icon name="copy-outline" size={30} color="#2242D8" />
              <Text style={styles.cardText}>Write to NFC</Text>
            </View>
            <View style={styles.modecard}>
              <Icon name="trash-outline" size={30} color="#2242D8" />
              <Text style={styles.cardText}>Write to NFC</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#F5F5FD',
    borderRadius: 22,
    // margin: 10,
  },
  hedtext: {
    color: '#2242D8',
    fontWeight: '500',
  },
  Topdiv: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    // marginTop: 20,
  },
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor:'#4CD2DB',
    paddingHorizontal: 25,
  },
  Box: {
    display: 'flex',
    width: '100%',
    borderWidth: 1,
    borderColor: '#59ACF3',
    borderRadius: 20,
    padding: 10,
    gap: 10,
    backgroundColor: '#F1F3FC',
    marginTop: 10,
  },
  fistrow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondrow: {
    width: '100%',
    display: 'flex',
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderColor: '#F1F3FC',
  },
  frc1: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#B3D3F8',
    borderRadius: 30,
  },
  frc2: {
    display: 'flex',
    flex: 1,
    alignItems: 'stretch',
    paddingLeft: 10,
  },
  frc3: {
    width: 30,
    display: 'flex',
    height: 18,
    borderWidth: 1,
    borderColor: '#2242D8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2242D8',
  },
  fetitle: {
    color: '#5870E1',
    fontSize: 10,
  },
  srbtn1: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#B6C1F2',
    margin: 5,
    padding: 5,
  },
  srbtn2: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#B6C1F2',
    margin: 5,
    padding: 5,
  },
  srbtn3: {
    display: 'flex',
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  srbtnText: {
    fontSize: 10,
    color: '#2242D8',
    fontWeight: 'bold',
  },
  modeldiv: {
    width: '100%',
    height: '33%',
    position: 'absolute',
    bottom: 10,
    borderWidth: 1,
    borderColor: '#4CDB66',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    // justifyContent:'center'
    padding: 15,
  },
  modelbtn: {
    width: 60,
    height: 10,
    backgroundColor: '#E5ECFF',
    // position: 'absolute',
    // top: 15,
    borderRadius: 42,
    marginBottom: 20,
  },
  modecard: {
    width: '27%',
    height: 100,
    backgroundColor: '#E9ECFB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardText: {
    fontSize: 12,
    color: '#000000',
  },
  opacity: {
    opacity: 0.2,
    backgroundColor: '#C0C0C0',
    width: '100%',
    height: '70%',
    paddingHorizontal: 25,
  },
});
