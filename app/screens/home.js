import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ButtonReverse } from '../components/Button';

const TEMP_BASE = 'USD';
const TEMP_CONVERT_TO = 'COP';
const TEMP_DEFAULT_VALUE = '1';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  };

  handlePressToCurrency = () => {
    console.log('press to');
  };

  handleTextChange = (text) => {
    console.log('changed text ', text);
  };

  handlePressButtonReverse = () => {
    console.log('press button reverse');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_DEFAULT_VALUE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_CONVERT_TO}
          onPress={this.handlePressToCurrency}
          editable={false}
          value="0"
        />
        <ButtonReverse text="Cambiar monedas" onPress={this.handlePressButtonReverse} />
      </Container>
    );
  }
}

export default Home;
