import React, { Component } from 'react'
import { AppRegistry, Text, Image, View, StyleSheet } from 'react-native'

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

class Animal extends Component {
  render() {
    return(
      <View style={styles.card}>
        <Image source={this.props.pic} style={styles.pic}/>
        <Text>{this.props.caption}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
  pic: {
    width: 340,
    height: 220,
  },
})

AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
