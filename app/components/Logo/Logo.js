import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('./images/background.png')}
      style={styles.containerImage}
      resizeMode="contain"
    >
      <Image source={require('./images/logo.png')} style={styles.image} resizeMode="contain" />
    </ImageBackground>
    <Text style={styles.text}>Currency 2</Text>
  </View>
);

export default Logo;
