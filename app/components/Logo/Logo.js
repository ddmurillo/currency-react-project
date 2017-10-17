import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Dimensions, Platform } from 'react-native';

import styles from './styles';

const imageWidth = Dimensions.get('window').width / 2;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(imageWidth);
    this.imageWidth = new Animated.Value(imageWidth / 2);
  }

  componentDidMount() {
    let listenerShow = 'keyboardWillShow';
    let listenerHide = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      listenerShow = 'keyboardDidShow';
      listenerHide = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(listenerShow, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(listenerHide, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: imageWidth / 2,
      }),
      Animated.timing(this.imageWidth, {
        toValue: imageWidth / 4,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: imageWidth,
      }),
      Animated.timing(this.imageWidth, {
        toValue: imageWidth / 2,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [styles.image, { width: this.imageWidth }];

    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('./images/background.png')}
          style={containerImageStyle}
          resizeMode="contain"
        >
          <Animated.Image
            source={require('./images/logo.png')}
            style={imageStyle}
            resizeMode="contain"
          />
        </Animated.Image>
        <Text style={styles.text}>Currency 2</Text>
      </View>
    );
  }
}

export default Logo;
