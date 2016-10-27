import React, { Component } from 'react'
import { AppRegistry, ScrollView, StyleSheet } from 'react-native'

// components
import Animal from './animal.ios.js'

class HelloWorld extends Component {
  render() {
    return (
      <ScrollView style={styles.list}>
        <Animal caption="hello darlin" pic={{uri: 'https://i.imgur.com/UH59bBo.jpg'}} />
        <Animal caption="here we go" pic={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/3c/4b/90/3c4b9031ed852ea25f587e34c34a9569.jpg'}} />
        <Animal caption="you know it" pic={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/7a/ef/cf/7aefcf972b9f48bcfe716abfb4ecbdd0.jpg'}} />
        <Animal caption="oh god" pic={{uri: 'https://i.ytimg.com/vi/dbdS5kDaX4w/maxresdefault.jpg'}} />
        <Animal caption="oh god no" pic={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/f3/c8/22/f3c8222d51f0b5bda3d5931d56e36205.jpg'}} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
  },
})

AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
