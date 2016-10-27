import React, { Component } from 'react'
import { AppRegistry, Text, Image, View } from 'react-native'

class HelloWorld extends Component {
  render() {

    let slothPic = {
      uri: 'https://i.imgur.com/UH59bBo.jpg'
    }
    let bearPic = {
      uri: 'https://s-media-cache-ak0.pinimg.com/564x/3c/4b/90/3c4b9031ed852ea25f587e34c34a9569.jpg'
    }

    return (
      <View>
        <Animal caption="hello darlinggg" pic={slothPic} />
        <Animal caption="here we gooo" pic={bearPic} />
      </View>
    )
  }
}

class Animal extends Component {
  render() {
    let viewStyle = {
      alignItems: 'center',
    }
    let picStyle = {
      width: 320,
      height: 200,
    }
    return(
      <View style={viewStyle}>
        <Image source={this.props.pic} style={picStyle}/>
        <Text>{this.props.caption}</Text>
      </View>
    )
  }
}
AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
