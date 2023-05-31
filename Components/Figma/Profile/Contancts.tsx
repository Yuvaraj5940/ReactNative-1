import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Contancts = ({navigation}) => {
  // const [text, onChangeText] = React.useState('fgd');
  const DATA = [
    {
      heading: 'All contacts',
      count: 10,
      img1: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQo5gl7sJQimDLb9QwmCQNGvDJA56gh0ItMYJ-f5e9HahVCY0Ac9A4EsYhYKD9eQF0JJc3JLm65HKFAvws',
      img2: 'https://karnatakastateopenuniversity.in/wp-content/uploads/2022/12/Yuvraj-Singh-Wiki.jpg',
      img3: 'https://static.toiimg.com/photo/msid-96596073/96596073.jpg',
      img4: 'https://static.india.com/wp-content/uploads/2022/05/pjimage-31-1.jpg?impolicy=Medium_Resize&w=1200&h=800',
    },
    {
      heading: 'Recently adedd',
      count: 30,
      img1: 'https://ss-i.thgim.com/public/incoming/article38435989.ece/alternates/FREE_1200/pawan-sehrawat-16300553073x2-1jpg',
      img2: 'https://www.jagranimages.com/images/newimg/30092022/30_09_2022-mahendra_singh_thakur_pro_kabaddi_23110656.webp',
      img3: 'https://www.prokabaddi.com/static-assets/waf-images/0a/8c/8b/1-1/tBcmcAORHr.jpg?v=2.07&w=1024',
      img4: 'https://pbs.twimg.com/media/FZaSE-tX0AAnLnR.jpg:large',
    },
    {
      heading: 'Live contents',
      count: 40,
      img1: 'https://starsunfolded.com/wp-content/uploads/2017/04/Yash.jpg',
      img2: 'https://cdn4.sharechat.com/helpinggroupDBossfriendsgroup,%E2%9D%A4%EF%B8%8FDarshanDBoss_24e13480_1645019088129_sc_cmprsd_75.jpg',
      img3: 'https://cdn.bollywoodmdb.com/fit-in/celebrities/600x600/photol/11-cele-img/sudeep-15.jpg',
      img4: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Ramesh_Aravind_%2802%29.jpg',
    },
  ];

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: '100%',
        display: 'flex',
        gap: 25,
      }}>
      <View style={styles.Topdiv}>
        <Text style={styles.heading}>Contacts</Text>
        <View style={styles.topbtn}>
          <Icon name="add" size={25} />
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#2242D8'}}>
            Create grop
          </Text>
        </View>
      </View>

      <View style={styles.Secdiv}>
        <View style={styles.Searchdiv}>
          <Icon name="search-outline" size={20} color="#2242D8" />
          <Text style={styles.Input}>Search by name</Text>
        </View>
        <View style={styles.Datadiv}>
          <Icon name="swap-vertical-sharp" size={20} color="#2242D8" />
        </View>
      </View>

      {/* <View style={styles.Cone}>
        <View style={styles.M1}>
          <Image
            source={{
              uri: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQo5gl7sJQimDLb9QwmCQNGvDJA56gh0ItMYJ-f5e9HahVCY0Ac9A4EsYhYKD9eQF0JJc3JLm65HKFAvws',
            }}
            style={styles.Img1}
          />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://karnatakastateopenuniversity.in/wp-content/uploads/2022/12/Yuvraj-Singh-Wiki.jpg',
              }}
              style={styles.Img2}
            />
            <Image
              source={{
                uri: 'https://static.toiimg.com/photo/msid-96596073/96596073.jpg',
              }}
              style={styles.Img3}
            />
            <Image
              source={{
                uri: 'https://static.india.com/wp-content/uploads/2022/05/pjimage-31-1.jpg?impolicy=Medium_Resize&w=1200&h=800',
              }}
              style={styles.Img4}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: 20,
          }}>
          <Text style={styles.h3}>All contacts</Text>
          <Text style={styles.h4}>35 contacts</Text>
        </View>
        <Icon name="chevron-forward-sharp" size={30} color="#2242D8" />
      </View> */}
      <View style={{display: 'flex', gap: 10}}>
        {
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <View style={styles.Cone}>
                <View style={styles.M1}>
                  <Image
                    source={{
                      uri: `${item.img1}`,
                    }}
                    style={styles.Img1}
                  />
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image
                      source={{
                        uri: `${item.img2}`,
                      }}
                      style={styles.Img2}
                    />
                    <Image
                      source={{
                        uri: `${item.img3}`,
                      }}
                      style={styles.Img3}
                    />
                    <Image
                      source={{
                        uri: `${item.img4}`,
                      }}
                      style={styles.Img4}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: 20,
                  }}>
                  <Text style={styles.h3}>{item.heading}</Text>
                  <Text style={styles.h4}>{item.count} contacts</Text>
                </View>
                <Icon name="chevron-forward-sharp" size={30} color="#2242D8" />
              </View>
            )}
          />
        }
        <Pressable onPress={() => navigation.navigate('scdp')}>
          <View style={styles.Cone}>
            <View style={styles.M1}>
              <Image
                source={{
                  uri: '',
                }}
                style={styles.Img1}
              />
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={{
                    uri: '',
                  }}
                  style={styles.Img2}
                />
                <Image
                  source={{
                    uri: '',
                  }}
                  style={styles.Img3}
                />
                <Image
                  source={{
                    uri: '',
                  }}
                  style={styles.Img4}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: 20,
              }}>
              <Text style={styles.h3}>Scanned</Text>
              <Text style={styles.h4}> contacts</Text>
            </View>
            <Icon name="chevron-forward-sharp" size={30} color="#2242D8" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Contancts;
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    color: '#2242D8',
    fontWeight: 'bold',
    flex: 1,
  },
  topbtn: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#EAEDFB',
    borderColor: '#2242D8',
    paddingHorizontal: 20,
    paddingVertical: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: '80%',
  },
  Topdiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  Secdiv: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  Searchdiv: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    height: 40,
    backgroundColor: '#F4F6FD',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  Input: {
    color: '#757575',
    // fontWeight: 'bold',
    fontSize: 13,
    flex: 1,
    textAlign: 'center',
  },
  Datadiv: {
    backgroundColor: '#F4F6FD',
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Cone: {
    width: '100%',
    backgroundColor: '#e4ecf2',
    height: 100,
    borderWidth: 1,
    borderColor: '#77a1bf',
    borderRadius: 20,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  h3: {
    color: '#2242D8',
    fontSize: 15,
    fontWeight: 'bold',
  },
  h4: {
    color: '#8B9CEB',
    fontSize: 12,
  },
  M1: {
    // borderWidth: 1,
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    position: 'relative',
    top: 10,
  },
  Img1: {
    width: '75%',
    height: '90%',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 40,
    backgroundColor: '#F4F6FD',
  },
  Img2: {
    width: '30%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 15,
    position: 'relative',
    left: 10,
    top: -20,
    backgroundColor: '#F4F6FD',
  },
  Img3: {
    width: '30%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 15,
    position: 'relative',
    left: 1,
    top: -20,
    backgroundColor: '#F4F6FD',
  },
  Img4: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 15,
    position: 'relative',
    left: -5,
    top: -20,
    backgroundColor: '#F4F6FD',
  },
});
