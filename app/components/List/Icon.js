import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Icon = ({ check, visible, iconBackground = '' }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  if (iconBackground !== '') {
    iconStyles.push({ backgroundColor: iconBackground });
  }
  return (
    <View style={iconStyles}>
      {check ? (
        <Image
          style={styles.checkIcon}
          source={require('./images/check.png')}
          resizeMode="contain"
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  check: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default Icon;
