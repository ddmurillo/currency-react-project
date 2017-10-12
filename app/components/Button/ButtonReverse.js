import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ButtonReverse = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.wrapper}>
      <Image style={styles.icon} source={require('./images/icon.png')} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ButtonReverse.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ButtonReverse;
