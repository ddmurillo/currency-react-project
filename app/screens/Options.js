import React, { Component } from 'react';
import { ScrollView, StatusBar, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { connectAlert } from '../components/Alert';

import { ListItem, Separator } from '../components/List';

// const ICON_COLOR = '#868686';
// const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };
  handlePressThemes = () => {
    this.props.navigation.navigate('Themes');
  };

  handlePressSite = () => {
    Linking.openURL('htsdtp://fixer.io').catch(() =>
      this.props.alertWithType(
        'error',
        'Lo sentimos!',
        'fixer.io no puede ser accedido en este momento',
      ));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem text="Temas" onPress={this.handlePressThemes} />
        <Separator />
        <ListItem text="Ir a fixer.io" onPress={this.handlePressSite} />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
