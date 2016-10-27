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
  },
  pic: {
    width: 340,
    height: 220,
  },
})
