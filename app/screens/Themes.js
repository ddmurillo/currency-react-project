import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';

const COLOR_THEME_BLUE = '#4F6D7A';
const COLOR_THEME_ORANGE = '#D57a66';
const COLOR_THEME_GREEN = '#00bd9d';
const COLOR_THEME_PURPLE = '#9e768f';

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handlePressThemes = (color) => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Azul"
          onPress={() => this.handlePressThemes(COLOR_THEME_BLUE)}
          selected
          check={false}
          iconBackground={COLOR_THEME_BLUE}
        />
        <Separator />
        <ListItem
          text="Verde"
          onPress={() => this.handlePressThemes(COLOR_THEME_GREEN)}
          iconBackground={COLOR_THEME_GREEN}
          selected
          check={false}
        />
        <Separator />
        <ListItem
          text="Amarillo"
          onPress={() => this.handlePressThemes(COLOR_THEME_ORANGE)}
          iconBackground={COLOR_THEME_ORANGE}
          selected
          check={false}
        />
        <Separator />
        <ListItem
          text="Púrpura"
          onPress={() => this.handlePressThemes(COLOR_THEME_PURPLE)}
          iconBackground={COLOR_THEME_PURPLE}
          selected
          check={false}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
