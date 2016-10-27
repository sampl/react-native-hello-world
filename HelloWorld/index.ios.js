import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <Text>blah</Text>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
