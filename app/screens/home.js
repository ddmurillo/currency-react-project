import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ButtonReverse } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE = 'USD';
const TEMP_CONVERT_TO = 'COP';
const TEMP_DEFAULT_VALUE = '1';
const TEMP_CONV_RATE = 0.001;
const TEMP_CONV_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Moneda base' });
  };

  handlePressToCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Convertir a' });
  };

  handleTextChange = (text) => {
    console.log('changed text ', text);
  };

  handlePressButtonReverse = () => {
    console.log('press button reverse');
  };

  handlePressSettings = () => {
    this.props.navigation.navigate('Options');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handlePressSettings} />
        <KeyboardAvoidingView behavior="padding">
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
          <LastConverted
            base={TEMP_BASE}
            quote={TEMP_CONVERT_TO}
            conversionRate={TEMP_CONV_RATE}
            date={TEMP_CONV_DATE}
          />
          <ButtonReverse text="Cambiar monedas" onPress={this.handlePressButtonReverse} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
