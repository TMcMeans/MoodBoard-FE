import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
// import Logo from '../../components/Logo/Logo';

export default class Journal extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput editable={true} style={styles.input} multiline={true}>journal</TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 150,
    height: 100,
    borderColor: 'black',
    borderWidth: 1
  },
  input: {
    borderColor: 'red',
    borderWidth: 1,
    height: 500
  }
})
