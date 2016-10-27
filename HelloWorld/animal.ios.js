import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

export default class Animal extends Component {
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
    backgroundColor: 'white',
    height: 240,
    padding: 10,
    margin: 10,
  },
  pic: {
    width: 300,
    height: 200,
  },
})
