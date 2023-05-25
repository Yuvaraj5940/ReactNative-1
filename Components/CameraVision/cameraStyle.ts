import {StyleSheet} from 'react-native';

const cameraStyle = StyleSheet.create({
  //Camera
  cam: {
    height: '100%',
  },

  //Capture btn
  clickBtn: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: '#FF3C3C',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },

  //Preview Image
  previewImage: {
    height: '85%',
  },

  //Prev Button
  prevBtn: {
    width: 150,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#2242D8',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  prevText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#E7E7E7',
  },
});

export default cameraStyle;
