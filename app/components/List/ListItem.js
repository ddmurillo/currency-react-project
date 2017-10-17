import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import color from 'color';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({
  text,
  onPress,
  selected = false,
  check = true,
  visible = true,
  iconBackground = '',
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={color('#e2e2e2').darken(0.2)}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon check={check} visible={visible} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  check: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default ListItem;
