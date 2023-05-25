import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import ImagePicker, {
  CameraOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import styles from './OpenGalleryStyle';

const OpenGallery = () => {
  const [modal, setModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(false);

  const OpenGallery = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error:', response.error);
      } else if (response.uri) {
        setPreviewImage(response.uri);
        setModal(true);
      }
    });
  };
  return (
    <View style={styles.openGalleryBtn}>
      <Button title="Open Gallery" onPress={OpenGallery} />
    </View>
  );
};

export default OpenGallery;
