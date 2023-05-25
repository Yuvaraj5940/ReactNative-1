import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //universal style
  Bold: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  DetailsInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Details: {
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 9,
  },
  Detailstext: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    paddingBottom: 3,
  },
  Font: {
    fontSize: 20,
    color: '#2242D8',
  },
  Social: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2242D8',
  },
  Title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#768AE7',
    textAlign: 'right',
  },

  //setting
  settingContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 30,
    // fontFamily: 'Plus Jakarta Display',
    color: '#2242D8',
    lineHeight: 38.82,
    fontWeight: '500',
    height: 39,
    width: 118,
    top: 25,
    alignSelf: 'flex-start',
    left: '8%',
  },
  sec: {
    height: 100,
    width: 325,
    borderWidth: 2,
    top: 45,
    borderRadius: 20,
    borderColor: '#2242D8',
    backgroundColor: '#EAEDFB',
  },

  btnContainer: {
    marginTop: 60,
  },
  btnDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EAEDFB',
    marginBottom: 5,
    width: 325,
    borderRadius: 20,
    height: 55,
  },
  setBtn: {
    display: 'flex',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.6,
    color: '#2242E8',
    paddingLeft: 15,
  },
  next: {
    marginRight: 30,
    color: '#2242E8',
    fontSize: 15,
  },
  logout: {
    width: 325,
    color: '#EF4B4B',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15.6,
    position: 'absolute',
    paddingLeft: 15,
    bottom: 370,
    padding: 20,
  },
  LogoutBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Add Card
  addContainer1: {
    display: 'flex',
    alignItems: 'center',
  },

  //Image Field
  imgConatiner: {
    borderBottomWidth: 5,
    borderBottomColor: '#ACB9FF',
  },
  img: {
    height: 354,
    width: '100%',
  },

  //Add Container
  addContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  //User Name
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ACB9FF',
    width: 325,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
    flex: 1,
  },
  nameCheck: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
  },

  // About user
  aboutConatiner: {
    width: 325,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#ACB9FF',
  },

  about: {
    fontSize: 16,
    fontWeight: '400',
  },

  //Person details
  personDetailsContainer: {
    width: 325,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#ACB9FF',
  },

  //Company details
  companyDetailsContainer: {
    width: 325,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#ACB9FF',
  },

  //Contacts and Social links
  contactsContainer: {
    width: 325,
    marginVertical: 20,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F7FF',
    width: 325,
    height: 80,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginTop: 12,
  },
  product: {
    width: 325,
    height: 47,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F7FF',
    marginBottom: 10,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  linkedin: {
    width: 325,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F7FF',
    marginBottom: 30,
    borderRadius: 15,
    paddingHorizontal: 20,
  },

  //Card Button
  cardBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2422E8',
    width: 280,
    height: 55,
    marginBottom: 35,
    borderRadius: 20,
  },
  cardBtnName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },

  //Scan card

  //Scan Text
  scanText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#2242D8',
    marginVertical: 28,
    alignSelf: 'flex-start',
    left: '5%',
  },

  //container
  scanContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  //Inner div
  innerDiv: {
    backgroundColor: '#F5F7FD',
    display: 'flex',
    alignItems: 'center',
    height: 680,
    width: 325,
    borderRadius: 20,
    paddingTop: 35,
  },

  //Scanned Contact
  scannedContact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 20,
  },

  //Profile Badge
  profileBadge: {
    color: '#2242D8',
    fontSize: 22,
  },
  badgeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FD',
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  //See Profiles
  seeProfiles: {
    color: '#2242D8',
    fontSize: 16,
    fontWeight: '400',
  },

  //Scan New Card
  scanNewCard: {
    color: '#2242D8',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 32,
  },

  //Next Profiles
  nextProfiles: {
    color: '#2242D8',
    fontSize: 16,
  },

  //Scan Description
  ScanDesc: {
    color: '#869BFF',
    width: 201,
    height: 32,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 13,
    marginBottom: 32,
  },
  //Scan Button
  scanBtn: {
    width: 115,
    height: 40,
    backgroundColor: '#F5F7FD',
    borderWidth: 1,
    borderColor: '#2242D880',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 65,
  },
  scanBtnText: {
    color: '#2242D8',
    fontSize: 14,
    fontWeight: '500',
  },

  //Scanner
  // scanneroutline: {
  //   fontSize: 100,
  //   color: 'black',
  // },
  // scanFile: {
  //   position: 'absolute',
  //   fontSize: 60,
  //   top: '3%',
  // },
  // horizontalLine: {
  //   position: 'absolute',
  //   width: '29%',
  //   fontSize: 100,
  // },
});

export default styles;
