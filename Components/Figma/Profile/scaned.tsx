import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  SectionList,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons';

const ScannedP = ({navigation}) => {
  const DATA = [
    {
      title: 'A',
      data: [
        {
          logo: require('./Images/scanned/boy.png'),
          name: 'Aont reni',
          role: 'Co-founder at visio',
        },
        {
          logo: require('./Images/scanned/girl.png'),
          name: 'Aimy len',
          role: 'Marketing head at visio',
        },
      ],
    },
    {
      title: 'B',
      data: [
        {
          logo: require('./Images/scanned/boy.png'),
          name: 'Ben roy',
          role: 'Co-founder at visio',
        },
        {
          logo: require('./Images/scanned/girl.png'),
          name: 'Buzil ken',
          role: 'Marketing head at visio',
        },
      ],
    },
    {
      title: 'C',
      data: [
        {
          logo: require('./Images/scanned/boy.png'),
          name: 'Ciniz mel',
          role: 'Co-founder at visio',
        },
        {
          logo: require('./Images/scanned/girl.png'),
          name: 'Cili ven',
          role: 'Marketing head at visio',
        },
      ],
    },
  ];
  const browse = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  return (
    <View style={{flex: 1}}>
      <View style={Style.scannedHeader}>
        <Pressable
          style={Style.back}
          onPress={() => navigation.navigate('Contacts')}>
          <FontAwesome5 name="arrow-left" size={12} />
        </Pressable>
        <Text style={Style.scanHeader}>Scanned</Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={Style.plus}>
            <FontAwesome5 name="plus" />
          </Pressable>
          <Pressable style={Style.pen}>
            <FontAwesome5 name="pen" />
          </Pressable>
        </View>
      </View>
      <View style={Style.scanedSearch}>
        <View style={Style.search}>
          <Icon name="search" size={25} style={Style.searchGlass} />
          <TextInput
            placeholder="Search by job, name..."
            style={Style.searchInput}
          />
        </View>
        <View style={Style.filter}>
          {/* <Image source={require('./Images/filter.png')} /> */}
          <Icon name="swap-vertical-sharp" size={20} color="#2242D8" />
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row', width:'100%'}}>
        <SectionList
          sections={DATA}
          renderSectionHeader={({section}) => (
            <View style={Style.secTitle}>
              <Text style={Style.secTitleText}>{section.title}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={Style.sectionList}>
              <Image source={item.logo} />
              <View>
                <Text style={Style.scanName}>{item.name}</Text>
                <Text style={Style.scanRole}>{item.role}</Text>
              </View>
              <Pressable style={Style.viewBtn}>
                <Text style={Style.viewBtnText}>View</Text>
              </Pressable>
            </View>
          )}
        />
        <View
          style={{
            position: 'absolute',
            left: '88%',
            top: 170,
            backgroundColor: '#F4F6FD',
            height: 228,
            width: 21,
            paddingTop: 10,
            borderRadius: 20,
          }}>
          <FlatList
            data={browse}
            renderItem={({item}) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 15,
                }}>
                <Text
                  style={{color: '#2242D8', fontWeight: '500', fontSize: 9}}>
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default ScannedP;

const Style = StyleSheet.create({
  scannedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  plus: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FD',
    width: 35,
    height: 35,
    borderRadius: 20,
    borderColor: '#2242D8',
    borderWidth: 1,
    marginRight: 7,
  },
  pen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FD',
    borderColor: '#2242D8',
    borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  scanHeader: {
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 25,
    color: '#2242D8',
  },
  back: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEDFB',
    width: 32,
    height: 32,
    borderRadius: 20,
  },
  scanedSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 29,
    gap: 5,
  },
  secTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    backgroundColor: '#F4F6FD',
    borderRadius: 20,
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  secTitleText: {
    color: '#2242D8',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionList: {
    width: '80%',
    height: 60,
    backgroundColor: '#F4F6FD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginLeft: 18,
    marginBottom: 10,
  },
  viewBtn: {
    width: 55,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderColor: '#2242D8',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBtnText: {
    color: '#2242D8',
    fontSize: 9,
    fontWeight: '500',
  },
  scanName: {
    color: '#2242D8',
    fontSize: 12,
    fontWeight: '500',
  },
  scanRole: {
    color: '#7085E6',
    fontSize: 9,
    fontWeight: '500',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 270,
    height: 50,
    backgroundColor: '#F4F6FD',
    borderRadius: 20,
  },
  filter: {
    width: 50,
    height: 50,
    backgroundColor: '#F4F6FD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  searchGlass: {
    color: '#2242D8',
    paddingLeft: 16,
  },
  searchInput: {
    width: 200,
    color: '#757575',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 21,
  },
});
