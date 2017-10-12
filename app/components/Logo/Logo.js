import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image
      source={require('./images/background.png')}
      style={styles.containerImage}
      resizeMode="contain"
    >
      <Image source={require('./images/logo.png')} style={styles.image} resizeMode="contain" />
    </Image>
    <Text style={styles.text}>Currency 2</Text>
  </View>
);

export default Logo;
