import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

// components
import Animal from './animal.ios.js'

class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Animal caption="hello darlin" pic={{uri: 'https://i.imgur.com/UH59bBo.jpg'}} />
        <Animal caption="here we go" pic={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/3c/4b/90/3c4b9031ed852ea25f587e34c34a9569.jpg'}} />
      </View>
    )
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
