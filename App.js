import React from 'react';
import { StyleSheet, View } from 'react-native';
import Journal from './src/containers/Journal/Journal';

export default class App extends React.Component {
  render() {
    return <Journal />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
