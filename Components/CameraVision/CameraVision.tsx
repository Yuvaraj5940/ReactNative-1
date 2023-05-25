/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import cameraStyle from './cameraStyle';
import ImagePicker, {
  CameraOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import OpenGallery from '../openGallery/OpenGallery';

const CameraVision = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef();
  const [imageData, setImageData] = useState('');
  const [takePhotoClicked, setTakePhotoClicked] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  useEffect(() => {
    checkPermission;
  }, []);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
  };

  const takePhoto = async () => {
    if (camera !== null) {
      const photo = await camera.current.takePhoto();
      console.log(photo.path);
      setImageData(photo.path);
      setTakePhotoClicked(false);
    }
  };

  if (device == null) {
    return <ActivityIndicator />;
  }
  const openGallery = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User canceled image picker');
      } else if (response.error) {
        console.log('Image picker error:', response.error);
      } else if (response.uri) {
        setPreviewImage(response.uri);

        setShowModal(true);
      }
    });
  };
  return (
    <View style={cameraStyle.cam}>
      {takePhotoClicked ? (
        <View style={cameraStyle.cam}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo
          />
          <TouchableOpacity
            style={cameraStyle.clickBtn}
            onPress={() => takePhoto()}
          />
          <OpenGallery />
        </View>
      ) : (
        <View style={cameraStyle.cam}>
          {imageData !== '' && (
            <Image
              style={cameraStyle.previewImage}
              source={{
                uri: 'file://' + imageData,
              }}
            />
          )}

          <TouchableOpacity
            style={cameraStyle.prevBtn}
            onPress={() => setTakePhotoClicked(true)}>
            <Text style={cameraStyle.prevText}>Try again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CameraVision;
