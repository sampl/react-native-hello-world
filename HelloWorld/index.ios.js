import React, { Component } from 'react'
import { AppRegistry, Text, Image, View } from 'react-native'

class HelloWorld extends Component {
  render() {
    let sloth = {
      uri: 'https://i.imgur.com/UH59bBo.jpg'
    }
    let bear = {
      uri: 'https://s-media-cache-ak0.pinimg.com/564x/3c/4b/90/3c4b9031ed852ea25f587e34c34a9569.jpg'
    }
    let slothText = 'hello darling'
    let bearText = 'here we go'

    return (
      <View>
        <Image source={sloth} style={{width: 320, height: 200}}/>
        <Text>{slothText}</Text>
        <Image source={bear} style={{width: 320, height: 200}}/>
        <Text>{bearText}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
