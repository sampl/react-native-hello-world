import React, { Component } from 'react'
import { AppRegistry, ScrollView, StyleSheet } from 'react-native'

// components
import AnimalList from './components/AnimalList.ios.js'

class HelloWorld extends Component {
  render() {
    return (
      <AnimalList />
    )
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
