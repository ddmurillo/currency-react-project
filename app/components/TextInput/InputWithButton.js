import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const containerStyles = [styles.container];

  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const underlayColor = color('#f9f9f9').darken(0.1);

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={onPress}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
